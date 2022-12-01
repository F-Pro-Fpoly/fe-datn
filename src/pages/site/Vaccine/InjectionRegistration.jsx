import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { getCityService, getDistrictService, getWardService } from '../../../services/normal/CityService';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import { getInfoDoctor, getInfoDoctorV2, getUserClientService, updateUserClient } from '../../../services/UserService';
import { useEffect } from 'react';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import "./VaccineCustomer.scss";
import ModalAddress from '../../../components/Client/ModalAddress/ModalAddress';
import { Button, ButtonBase } from '@mui/material';
import { createBookingVaccineService } from '../../../services/normal/BookingService';
import { getVaccineApiByCode } from '../../../services/VaccineService';

function InjectionRegistration() {
    const token = useSelector((state) => state.auth.token);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [bookingVaccine, setBookingVaccine] = useState({
        'date': '',
        'description': ''
    })
    const vaccine_code = sessionStorage["vaccine"];
    const [vaccine, setVaccine] = useState({});

    const start = async () => {
        try {
            let res = await getUserClientService({token});
            let dataUser = res.data.data;
            setUser(dataUser);

            let resVaccine = await getVaccineApiByCode({token, code: vaccine_code});
            let dataVaccine = resVaccine.data.data;
            setVaccine(dataVaccine)
        } catch (error) {
            
        }
    }

    const handleOnClickBtn = async () => {
        if(!bookingVaccine.date || !bookingVaccine.description){
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        let dataPost = {
            ...bookingVaccine,
            vaccine_code: sessionStorage['vaccine'],
        };

        try {
            let res = await createBookingVaccineService({token, data: dataPost});
            let message = res.data.message;
            toast.success(message);
            setTimeout(() => {
                sessionStorage.removeItem('vaccine');
                navigate('/')
            }, 2000) 
        } catch (error) {
            if(error.response) {
                let message = error.response.data.message;
                toast.error(message);
                return;
            }
            toast.error(error);
            return;
        }
    }

    useEffect(() => {
        if(!token){
            navigate('/login');
            return;
        }

        if(!vaccine_code) {
            navigate('/')
            return;
        }

        start();
    }, [])

    return (
        <div className="dang-ky-tiem">
            <div className="container"> 
                <ToastContainer />
                <h4>Đăng ký tiêm</h4>
                <div className="dang-ky-tiem-wrapper">
                    <h5>Thông tin vaccine</h5>
                    <div className="dang-ky-tiem-vaccine">
                        <div className="dang-ky-tiem-vaccine-img">
                            <img src={vaccine.img_link ?? ''} alt="" />
                        </div>
                        <div className="dang-ky-tiem-vaccine-content">
                            <h6>
                                {vaccine.name}
                            </h6>
                            <p>
                                <span>
                                    Nguồn gốc: {vaccine.national_name}
                                </span><br />
                                <span>
                                    Phòng bệnh: {vaccine.sick ? vaccine.sick.map((item, index) => <span key={index}>{item.name + ' '}</span>) : ''}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="dang-ky-tiem-wrapper mt-3">
                            <div className="booking-main-address-top">
                                <div className='booking-main-address-l'>
                                    <h4>Địa chỉ</h4>
                                </div>
                                <div className="booking-main-address-r">
                                    <button 
                                        type='button' 
                                        className='btn booking-main-address-btn'
                                        onClick={() => setShowModal(true)}
                                    >
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="booking-main-address-bottom fs-6">
                                <div className='' style={{whiteSpace: "nowrap", textAlign:"center"}}>
                                    <span className='fw-bold'>{user.name ?? ''}</span>
                                    <br />
                                    <span>{user.phone ?? ''}</span>
                                </div>
                                <div className="">
                                    <p>
                                        <span>
                                            {user.address + ' ' ?? ''}
                                        </span>
                                        <span>
                                            {user.ward_full_name  + ' '}, 
                                        </span>
                                        <span>
                                            {user.district_full_name  + ' '}, 
                                        </span>
                                        <span>
                                            {user.city_full_name}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="dang-ky-tiem-wrapper mt-3">
                            <h6>Chọn ngày</h6>
                            <div>
                                <div className="row">
                                    <div className="col-12">
                                        <Form.Control 
                                            type='date'
                                            value={bookingVaccine.date}
                                            onChange={(e) => setBookingVaccine({...bookingVaccine, date: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dang-ky-tiem-wrapper mt-3">
                    <div className="row">
                        <div className="col-12">
                            <Form.Group>
                                <Form.Label>Nhập lý do tiêm</Form.Label>
                                <textarea 
                                    name="" 
                                    className='form-control' 
                                    id="" cols="30" rows="10"
                                    value={bookingVaccine.description}
                                    onChange={(e) => setBookingVaccine({...bookingVaccine, description: e.target.value})}
                                ></textarea>
                            </Form.Group>
                        </div>
                    </div>
                </div>

                <div className="dang-ky-tiem-wrapper mt-3">
                    <div className="row">
                        <div className="col-12">
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                onClick={handleOnClickBtn}
                            >
                                Xác nhận
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && <ModalAddress 
                showModal={showModal}
                onHide={() => {
                    setShowModal(false)
                }}
                onShow={() => {
                    setShowModal(true)
                }}
            />}
        </div>
    )
}

export default InjectionRegistration;