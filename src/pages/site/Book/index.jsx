import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./book.scss"
function Book () {
    return (
        <div className="container">
           <div className="formBooking">
           <h3 >Đăng ký lịch khám</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Họ và tên: </Form.Label>
                    <Form.Control type="text" placeholder="Nhập họ và tên" />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Địa chỉ: </Form.Label>
                    <Form.Control type="text" placeholder="Nhập địa chỉ" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Số điện thoại: </Form.Label>
                    <Form.Control type="text" placeholder="Nhập số điện thoại" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Chuyên khoa: </Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Chọn chuyên khoa</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phòng ban: </Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Chọn phòng ban</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Xác nhận
                </Button>
            </Form>

           </div>
        </div>
      );
}

export default Book