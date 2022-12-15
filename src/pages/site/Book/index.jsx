
import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./book.scss";
import { getCityService, getDistrictService, getWardService } from '../../../services/normal/CityService';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import { getInfoDoctor, getInfoDoctorV2, getUserClientService, updateUserClient } from '../../../services/UserService';
import { useEffect } from 'react';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';
function Book () {
    const token = useSelector(state=>state.auth.token);
    const [showModal, setShowModal] = useState(false);
    const [optionCity, setOptionCity] = useState([]);
    const [optionCitySelect, setOptionCitySelect] = useState('');
    const [optionDistrict, setOptionDistrict] = useState([]);
    const [optionDistrictSelect, setOptionDistrictSelect] = useState('');
    const [optionWard, setOptionWard] = useState([]);
    const [optionWardSelect, setOptionWardSelect] = useState('');
    const [address, setAddress] = useState('');
    const [bookingDescription, setBookingDescription] = useState('');
    const [doctor, setDoctor] = useState({
        'id': '',
        'name': '',
        'birthday': '',
        'city_name': '',
        'district_name': "",
        'ward_name': "",
        'avatar': "",
        'specailist_id': '',
        'specailist_name': ''
    });
    const [booking2, setBooking2] = useState({
        'date': '',
        'time_start': '',
        'time_end': ''
    }) 
    const navigate = useNavigate();
    const [paymentInfo, setPaymentInfo] = useState({
        'phone': '',
        'name' : '',
        'birthday': '',
        'city_name': '',
        'district_name': "",
        'ward_name': "",
        'avatar': "",
        'email': ''
    });

    const start = async () => {
        let dataDoctor = await handleDataDoctor();
        if(dataDoctor){
            let dataUser = getDataUserNoAuth();
            let dataBooking2 = getDataBooking2();
            setDoctor({
                ...doctor, 
                'id': dataDoctor.id ?? null,
                'name': dataDoctor.name ?? '',
                'birthday': dataDoctor.birthday ?? null,
                'city_name': dataDoctor.city_name ?? null,
                'district_name': dataDoctor.district_name ?? null,
                ward_name: dataDoctor.ward_name ?? null,
                avatar: dataDoctor.avatar ?? '',
                specailist_id: dataDoctor.specailist_id ?? null,
                specailist_name: dataDoctor.specailist_name ?? null
            });
            setBooking2({...booking2, 
                'date': dataBooking2.date,
                'time_start': dataBooking2.time_start,
                'time_end': dataBooking2.time_end
            })
            // console.log(dataDoctor);
        }else{
            navigate('/');
            return;
        }

        if(token){
            let dataUser = await handleGetUser();
            handleDataUserForm(dataUser);
        }else{
            let dataUser = getDataUserNoAuth();
            handleDataUserForm(dataUser);
        }
    }
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            let dataAddress = {
                ...paymentInfo,
                'city_code': optionCitySelect.value ?? null,
                'city_name': optionCitySelect.label ?? null,
                'district_code': optionDistrictSelect.value ?? null,
                'district_name': optionDistrictSelect.label ?? null,
                'ward_code': optionWardSelect.value ?? null,
                'ward_name': optionWardSelect.label ?? null,
                'address' : address,
                'birthday': paymentInfo.birthday ? moment(new Date(paymentInfo.birthday)).format("YYYY-MM-DD") : null
            };
            if(!dataAddress.birthday || !dataAddress.city_code || !dataAddress.district_code || !dataAddress.ward_code || !dataAddress.address){
                throw "Vui lòng nhập đầy đủ thông tin";
            }
            if(token){
                let res = await updateUserClient({token, data: dataAddress});
                let message = res.data.message;
                toast.success(message);
                let dataUser = await handleGetUser();
                handleDataUserForm(dataUser);
                setShowModal(false);
                return;
            }else{
                sessionStorage['booking_info']= JSON.stringify(dataAddress);
                let dataUser = getDataUserNoAuth();
                handleDataUserForm(dataUser)
                setShowModal(false);
                return;
            }
        } catch (error) {
            if(error.response){
                let message = error.response.data.message;
                toast.error(message);
                return;
            }
            
            toast.error(error);
        }
    }
    const hanleShowModal = async (is_show) => {
        try {
            // get dataUser;
            if(token){
                let resUser = await getUserClientService({token});
                let dataUser = resUser.data.data;
                handleDataUserForm(dataUser);
            }else{
                let dataUser = getDataUserNoAuth();
                handleDataUserForm(dataUser)
            }
            let res = await getCityService({token});
            let data = res.data.data;
            let handleData = data.map((item, index)=>{
                return {
                    "value": item.code,
                    "label": item.name
                };
            });
            setOptionCity(handleData);
            setShowModal(is_show);
        } catch (error) {
            
        }
    }
    const handleOnChangeCity = async (cityData) => {
        setOptionCitySelect(cityData);
        let res = await getDistrictService({token, search:{
            'city_code': cityData.value
        }});

        let data = res.data.data;
        let dataDistrictHasHandle = data.map((item, index) => {
            return {
                'value': item.code,
                'label': item.name
            };
        })
        setOptionDistrict(dataDistrictHasHandle);
    }
    const handleOnChangeDistrict = async (dataDistrict) => {
        let res = await getWardService({token, search:{
            "district_code": dataDistrict.value
        }});
        let data = res.data.data;
        let dataHandled = data.map((item, index) => {
            return {
                'value': item.code,
                'label': item.name
            };
        })
        setOptionWard(dataHandled);
        setOptionDistrictSelect(dataDistrict);
    }
    const handleOnChangeWard = (dataWard) => {
        setOptionWardSelect(dataWard);
    } 
    const handleGetUser = async () => {
        try {
            let res = await getUserClientService({token});
            let data = res.data.data;
            return data;
        } catch (error) {
            if(error.response){
                let message = error.response.data.message;
                toast.error(message);
                return;
            }
            
            toast.error(error);
        }
    }
    const handleDataUserForm = (dataUser) => {
        if(dataUser) {
            setPaymentInfo({...paymentInfo, 
                phone: dataUser.phone??"", 
                name: dataUser.name??"", 
                birthday: dataUser.birthday?dataUser.birthday:"",
                city_name: dataUser.city_name??'',
                district_name: dataUser.district_name??'',
                ward_name: dataUser.ward_name??'',
            });
            setOptionCitySelect(dataUser.city_code ?? "");
            setOptionDistrictSelect(dataUser.district_code??"");
            setOptionWardSelect(dataUser.ward_code??'');
            setAddress(dataUser.address);
        }
    }
    const getDataUserNoAuth = () => {
        if(sessionStorage['booking_info']) {
            return JSON.parse(sessionStorage['booking_info']);
        }else{
            return null;
        }
    }
    const handleDataDoctor = async () =>{
        try {
            // console.log("handle doctor");
            if(sessionStorage['booking_info2']) {
                let booking_info2 = JSON.parse(sessionStorage['booking_info2']);
                let res = await getInfoDoctorV2({token, id: booking_info2.doctor_id});
                return res.data.data;
            }
        } catch (error) {
            if(error.response){
                let message = error.response.data.message;
                toast.error(message);
            }else{
                toast.error(error)
            }
        }
    }
    const getDataBooking2 = () => {
        if(sessionStorage['booking_info2']){
            return JSON.parse(sessionStorage['booking_info2']);
        }

        return null;
    }

    useEffect(() => {
        document.title = 'Trang thanh toán';
        if(!sessionStorage['booking_info2']){
            navigate('/');
            return;
        }
        start()
    },[]) ;

    return (
        <section className='booking'>
            <ToastContainer />
            {/* <div className="booking-header">
                <div className="booking-container">
                    <div className="booking-header-wrapper">
                        <div className="booking-header-avatar">
                            <img src={doctor.avatar} alt="" />
                        </div>
                        <div className="booking-header-right">
                            <h4 className='booking-header-text booking-header-text--resgiter'>Đăng ký khám</h4>
                            <h3 className='booking-header-text booking-header-text--title'>Giáo sư, Tiến sĩ, Bác sĩ {doctor.name}</h3>
                            <h4 className='booking-header-text booking-header-text--date'>{doctor.specailist_name}</h4>
                            <h4 className='booking-header-text booking-header-text--date'>{booking2.date} - ({booking2.time_start} - {booking2.time_end})</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-main">
                <div className="booking-container">
                    <div className="booking-main-wrapper">
                        <div className="booking-main-address">
                            <div className="booking-main-address-top">
                                <div className='booking-main-address-l'>
                                    <h4>Địa chỉ</h4>
                                </div>
                                <div className="booking-main-address-r">
                                    <button type='button' className='btn booking-main-address-btn' onClick={()=>hanleShowModal(true)}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="booking-main-address-bottom fs-6">
                                <div className='' style={{whiteSpace: "nowrap", textAlign:"center"}}>
                                    <span className='fw-bold'>{paymentInfo.name ?? ""}</span>
                                    <br />
                                    <span>{paymentInfo.phone ?? ""}</span>
                                </div>
                                <div className="">
                                    {
                                        (address && paymentInfo.ward_name && paymentInfo.district_name && paymentInfo.city_name)
                                        ?(
                                            <span>{address??""}, {paymentInfo.ward_name??''}, {paymentInfo.district_name??''}, {paymentInfo.city_name??''}</span>
                                        ):""
                                    }
                                    
                                </div>
                            </div>
                        </div>

                        <div className="booking-main-address mt-3">
                            <h5>Nhập thông tin khám </h5>
                            <textarea
                             value={bookingDescription}
                             onChange={(e) => setBookingDescription(e.target.value)}
                             className='form-control' name="" id="" cols="30" rows="10" placeholder='Nhập thông tin khám'></textarea>
                        </div>
                        <Payment bookingDescription={bookingDescription} />
                    </div>
                </div>
            </div> */}
            <div className="booking-header">
                <div className="container">
                    <h4>ĐĂNG KÝ LỊCH KHÁM</h4>
                </div>
            </div>
            <div className="booking-main">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="booking-main-left">
                                <div className="booking-main-item">
                                    <div className="booking-main-wrapper">
                                        <div className="booking-main-address">
                                            <h5 className='mb-3'>Thông tin bác sĩ</h5>
                                            <div className="booking-header-wrapper">
                                                <div className="booking-header-avatar">
                                                    <img src={doctor.avatar} alt="" />
                                                </div>
                                                <div className="booking-header-right">
                                                    <h3 className='booking-header-text booking-header-text--title'>Giáo sư, Tiến sĩ, Bác sĩ {doctor.name}</h3>
                                                    <h4 className='booking-header-text booking-header-text--date'>{doctor.specailist_name}</h4>
                                                    <h4 className='booking-header-text booking-header-text--date'>{booking2.date} - ({booking2.time_start} - {booking2.time_end})</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-main-item">
                                    <div className="booking-main-wrapper">
                                        <div className="booking-main-address">
                                            <div className="booking-main-address-top">
                                                <div className='booking-main-address-l'>
                                                    <h4>Địa chỉ</h4>
                                                </div>
                                                <div className="booking-main-address-r">
                                                    <button type='button' className='btn booking-main-address-btn' onClick={()=>hanleShowModal(true)}>
                                                        <i className="fa-regular fa-pen-to-square"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="booking-main-address-bottom fs-6">
                                                <div className='' style={{whiteSpace: "nowrap", textAlign:"center"}}>
                                                    <span className='fw-bold'>{paymentInfo.name ?? ""}</span>
                                                    <br />
                                                    <span>{paymentInfo.phone ?? ""}</span>
                                                </div>
                                                <div className="">
                                                    {
                                                        (address && paymentInfo.ward_name && paymentInfo.district_name && paymentInfo.city_name)
                                                        ?(
                                                            <span>{address??""}, {paymentInfo.ward_name??''}, {paymentInfo.district_name??''}, {paymentInfo.city_name??''}</span>
                                                        ):""
                                                    }
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="booking-main-address mt-3">
                                            <h5>Nhập thông tin khám </h5>
                                            <textarea
                                            value={bookingDescription}
                                            onChange={(e) => setBookingDescription(e.target.value)}
                                            className='form-control' name="" id="" cols="30" rows="10" placeholder='Nhập thông tin khám'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 position-relative">
                            <Payment bookingDescription={bookingDescription} /> 
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={showModal} onHide={()=>setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <div className='d-flex justify-content-center'>
                        <h5>Nhập địa chỉ</h5>
                        {/* <button className='btn' onClick={()=>setShowModal(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button> */}
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Số điện thoại</Form.Label>
                            <div className='col-sm-9'>
                                <Form.Control type='text' value={paymentInfo.phone} onChange={(e) => setPaymentInfo({...paymentInfo, phone: e.target.value})} placeholder='Nhập số điện thoại'/>
                            </div>
                        </Form.Group>
                        {!token && (
                            <Form.Group className='row my-2'>
                                <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Email</Form.Label>
                                <div className='col-sm-9'>
                                    <Form.Control type='email' value={paymentInfo.email} onChange={(e) => setPaymentInfo({...paymentInfo, email: e.target.value})}  placeholder='Nhập địa chỉ email'/>
                                </div>
                            </Form.Group>
                        )}
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Họ và tên</Form.Label>
                            <div className='col-sm-9'>
                                <Form.Control type='text' value={paymentInfo.name} onChange={(e) => setPaymentInfo({...paymentInfo, name: e.target.value})} placeholder='Nhập họ và tên'/>
                            </div>
                        </Form.Group>
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Năm sinh</Form.Label>
                            <div className='col-sm-9'>
                                <Form.Control type='date' value={paymentInfo.birthday} onChange={(e)=>setPaymentInfo({...paymentInfo, birthday: e.target.value})} />
                            </div>
                        </Form.Group>
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Tỉnh thành</Form.Label>
                            <div className='col-sm-9'>
                                <Select options={optionCity} value={optionCitySelect} onChange={(data) =>handleOnChangeCity(data)} />
                            </div>
                        </Form.Group>
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Quận/Huyện</Form.Label>
                            <div className='col-sm-9'>
                                <Select options={optionDistrict} value={optionDistrictSelect} onChange={(data) =>handleOnChangeDistrict(data)}  />
                            </div>
                        </Form.Group>
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Phường/Xã</Form.Label>
                            <div className='col-sm-9'>
                                <Select options={optionWard} value={optionWardSelect} onChange={(data) =>handleOnChangeWard(data)}  />
                            </div>
                        </Form.Group>
                        <Form.Group className='row my-2'>
                            <Form.Label className='col-sm-3 col-form-label col-form-label--required'>Địa chỉ</Form.Label>
                            <div className='col-sm-9'>
                                <textarea name="" className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)} id="" cols="30" rows="5"></textarea>
                            </div>
                        </Form.Group>

                        <Button type='submit' >Xác nhận</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
      );
}

export default Book