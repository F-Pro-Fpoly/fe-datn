import { Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { getUserClientService, updateUserClient } from "../../../services/UserService";
import { getCityService, getDistrictService, getWardService } from "../../../services/normal/CityService";
import { toast,ToastContainer } from "react-toastify";

function ModalAddress({showModal, onHide}) {
    const token = useSelector(state => state.auth.token);
    const [optionCity, setOptionCity] = useState([]);
    const [optionDistrict, setOptionDistrict] = useState([]);
    const [optionWard, setOptionWard] = useState([]);
    const [dataModalAddress, setDataModalAddress] = useState({
        phone: "",
        name: '',
        bithday: '',
        city: {
            label: '',
            value: ''
        }, 
        district: {
            label: '',
            value: ''
        },
        ward: {
            label: '',
            value: ''
        },
        address: ""
    });

    async function handleOnChangeCity(data) {
        try {
            setDataModalAddress({...dataModalAddress, 
                city: data
            })
        } catch (error) {
            
        }
    }
    
    async function handleOnChangeDistrict(data) {
        setDataModalAddress({...dataModalAddress, 
            district: data
        })
    }

    async function handleOnChangeWard(data) {
        setDataModalAddress({...dataModalAddress, 
            ward: data
        })
    }
    
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let data = {
                phone: dataModalAddress.phone,
                name: dataModalAddress.name,
                bithday: dataModalAddress.bithday,
                city_code: dataModalAddress.city.value,
                district_code: dataModalAddress.district.value,
                ward_code: dataModalAddress.ward.value,
                address: dataModalAddress.address
            };
            let res = await updateUserClient({token, data})
            let message = res.data.message;
            onHide();
        } catch (error) {
            if(error.response) {
                let message = error.response.data.message;
                toast.error(message);
            }
        }
    }

    function handleDataSelect (data = []) {
        let dataHandle = data.map((item) => {
            return {
                label: item.name,
                value: item.code
            }
        })

        return dataHandle;
    }

    const handleDistrictSelect = async (city_code, district) => {
        try {
            let res = await getDistrictService({token, search: {
                'city_code': city_code
            }})
            let data = res.data.data;
            data = handleDataSelect(data);
            setOptionDistrict(data);
            setDataModalAddress({
                ...dataModalAddress,
                district: district
            })
        } catch (error) {
            
        }
    }
    const handleWardSelect = async (district_code, ward) => {
        try {
            let res = await getWardService({token, search: {
                'district_code': district_code
            }})
            let data = res.data.data;
            data = handleDataSelect(data);
            setOptionWard(data);
            setDataModalAddress({
                ...dataModalAddress,
                ward: ward
            })
        } catch (error) {
            
        }
    }

    const start = async () => {
        try {
            let resUser = await getUserClientService({token});
            let dataUser = resUser.data.data;
            let resCity = await getCityService({token});
            let dataCity = resCity.data.data;
            dataCity = handleDataSelect(dataCity);
            setOptionCity(dataCity);
            setDataModalAddress({...dataModalAddress,
                phone: dataUser.phone,
                name: dataUser.name,
                address: dataUser.address,
            })

            
        } catch (error) {
            
        }
    }

    const handleOnClickOpenMenu = async (type) => {
        try {
            if(type === 'district') {
                setOptionDistrict([]);
                let res = await getDistrictService({token, search: {
                    city_code: dataModalAddress.city.value
                }})
                let data = res.data.data;
                data = handleDataSelect(data);
                setOptionDistrict(data)
            }else if(type === 'ward') {
                setOptionWard([]);
                let res = await getWardService({token, search: {
                    district_code: dataModalAddress.district.value
                }})
                let data = res.data.data;
                data = handleDataSelect(data);
                setOptionWard(data)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if(showModal){
            start();
        }
    },[showModal])

    return ( 
        <Modal show={showModal} onHide={onHide} size="lg">
            <ToastContainer />
            <Modal.Header closeButton>
                <div className='d-flex justify-content-center'>
                    <h5>Nh???p ?????a ch???</h5>
                    {/* <button className='btn' onClick={()=>setShowModal(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button> */}
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >S??? ??i???n tho???i</Form.Label>
                        <div className='col-sm-9'>
                            <Form.Control 
                                type='text' 
                                placeholder='Nh???p s??? ??i???n tho???i'
                                value={dataModalAddress.phone}
                                onChange={(e) => setDataModalAddress({...dataModalAddress, phone: e.target.value})}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >H??? v?? t??n</Form.Label>
                        <div className='col-sm-9'>
                            <Form.Control 
                                type='text' 
                                placeholder='Nh???p h??? v?? t??n'
                                value={dataModalAddress.name}
                                onChange={(e) => setDataModalAddress({...dataModalAddress, name: e.target.value})}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >N??m sinh</Form.Label>
                        <div className='col-sm-9'>
                            <Form.Control 
                                type='date'
                                value={dataModalAddress.bithday}
                                onChange={(e) => setDataModalAddress({...dataModalAddress, bithday: e.target.value})}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >T???nh th??nh</Form.Label>
                        <div className='col-sm-9'>
                            <Select 
                                options={optionCity} 
                                value={dataModalAddress.city} 
                                onChange={handleOnChangeCity}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >Qu???n/Huy???n</Form.Label>
                        <div className='col-sm-9'>
                            <Select 
                                options={optionDistrict} 
                                value={dataModalAddress.district} 
                                onChange={handleOnChangeDistrict} 
                                onMenuOpen={() => handleOnClickOpenMenu('district')}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >Ph?????ng/X??</Form.Label>
                        <div className='col-sm-9'>
                            <Select 
                                options={optionWard} 
                                value={dataModalAddress.ward} 
                                onChange={handleOnChangeWard} 
                                onMenuOpen={() => handleOnClickOpenMenu('ward')}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className='row my-2'>
                        <Form.Label 
                            className='col-sm-3 col-form-label col-form-label--required'
                        >?????a ch???</Form.Label>
                        <div className='col-sm-9'>
                            <textarea name="" className='form-control' value={dataModalAddress.address} onChange={(e)=>setDataModalAddress({...dataModalAddress, address: e.target.value})} id="" cols="30" rows="5"></textarea>
                        </div>
                    </Form.Group>

                    <Button variant="contained" color="primary" type='submit' >X??c nh???n</Button>
                </Form>
            </Modal.Body>
        </Modal>
     );
}

ModalAddress.propTypes  = {
    showModal: PropTypes.bool.isRequired,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}

export default ModalAddress;