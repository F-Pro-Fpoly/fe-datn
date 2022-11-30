import { Form } from "react-bootstrap";
import "./VaccineCustomer.scss";
import Select from "react-select";
import { useState } from "react";

function InjectionRegistration() {
    const [cityOptions, setCityOptions] = useState([]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [wardOptions, setWardOptions] = useState([]);
    const [vaccineOptions, setVaccineOptions] = useState([]);
    const [dataRegister, setDataRegister] = useState({
        cityValue: {
            'label': '',
            'value': ''
        },
        districtValue: {
            'label': '',
            value: ''
        },
        wardValue:{
            label: '',
            value: ''
        },
        vaccineValue: {
            label: '',
            value: ''
        }
    });

    return ( 
        <div className="dang-ky-tiem">
            <div className="container">
                <div className="dang-ky-tiem-title">
                    <h4>ĐĂNG KÝ TIÊM CHỦNG</h4>
                </div>
                <div className="dang-ky-tiem-content">
                    <h5>THÔNG TIN NGƯỜI TIÊM</h5>
                    <Form >
                        <div className="row">
                            <Form.Group className="col-4">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control 
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group className="col-4">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control 
                                    type="date"
                                />
                            </Form.Group>
                            <Form.Group className="col-4">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Select>
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="col-4">
                                <Form.Label>Tỉnh thành</Form.Label>
                                <Select 
                                    options={cityOptions}
                                    onChange={(value) => {
                                        setDataRegister({...dataRegister, cityValue: value})
                                    }}
                                    value={dataRegister.cityValue}
                                />
                            </Form.Group>
                            <Form.Group className="col-4">
                                <Form.Label>Quận/Huyện</Form.Label>
                                <Select 
                                    options={districtOptions}
                                    onChange={(value) => {
                                        setDataRegister({...dataRegister, districtValue: value})
                                    }}
                                    value={dataRegister.districtValue}
                                />
                            </Form.Group>
                            <Form.Group className="col-4">
                                <Form.Label>Phường/Xã</Form.Label>
                                <Select 
                                    options={wardOptions}
                                    onChange={(value) => {
                                        setDataRegister({...dataRegister, wardValue: value})
                                    }}
                                    value={dataRegister.wardValue}
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="col-12">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Nhập địa chỉ"
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="col-12">
                                <Form.Label>Chọn vaccine muốn tiêm</Form.Label>
                                <Select 
                                    options={vaccineOptions}
                                    onChange={(value) => {
                                        setDataRegister({...dataRegister, vaccineValue: value})
                                    }}
                                    value={dataRegister.vaccineValue}
                                />
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
     );
}

export default InjectionRegistration;