
import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./book.scss";
import { getCityService, getDistrictService, getWardService } from '../../../services/normal/CityService';
import { useSelector } from 'react-redux';
import Select from 'react-select';
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
    const [paymentInfo, setPaymentInfo] = useState({
        'phone': '',
        'name' : '',
        'birthday': '',
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        let dataAddress = {
            ...paymentInfo,
            'city_code': optionCitySelect.value ?? null,
            'city_name': optionCitySelect.label ?? null,
            'district_code': optionDistrictSelect.value ?? null,
            'district_name': optionDistrictSelect.label ?? null,
            'ward_code': optionWardSelect.value ?? null,
            'ward_name': optionWardSelect.label ?? null,
            'address' : address
        };
        if(token){

        }else{
            sessionStorage['booking_info']= JSON.stringify(dataAddress);
        }
    }
    const hanleShowModal = async (is_show) => {
        try {
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

    return (
        <section className='booking'>
            <div className="booking-header">
                <div className="booking-container">
                    <div className="booking-header-wrapper">
                        <div className="booking-header-avatar">
                            <img src="https://cdn.bookingcare.vn/fr/w100/2018/04/09/151800292142135730131997187173031663525568184320n.jpg" alt="" />
                        </div>
                        <div className="booking-header-right">
                            <h4 className='booking-header-text booking-header-text--resgiter'>Đăng ký khám</h4>
                            <h3 className='booking-header-text booking-header-text--title'>Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân</h3>
                            <h4 className='booking-header-text booking-header-text--date'>Sáng - Thứ 4 - 09/11/2022</h4>
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
                                    <span className='fw-bold'>Phan Tường Văn</span>
                                    <br />
                                    <span>0774091023</span>
                                </div>
                                <div className="">
                                    <span>222 Nguyễn Văn Linh, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ</span>
                                </div>
                            </div>
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