
import "./Box.scss"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { creatContactApi } from "../../../../services/ContactService";
import { toast,ToastContainer } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
function Policy () {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const formRef = useRef();
 
    const handleSubmit = async (e) => {
     
        e.preventDefault();
        const formData = new FormData(formRef.current)
        const req  = {
            "data" : formData
        }
        try {
            const res =  await creatContactApi(req) 
            formRef.current.reset();
            toast.success(res.data.message) ; 
        } catch (error) {
            let res = error.response;
            let data = res.data;
            let messages = data.message;
            toast.error(messages);
        }
    }

    return ( 

        <div className="container">
            <div className="infoWPolicy">
                <span className="service">CHÍNH SÁCH <span className="outstanding">DÀNH CHO KHÁCH HÀNG</span></span><br />
                <span>PHÒNG KHÁM FPRO</span><br />
                <div className="line"></div>
            </div>
            <div className="Policy">
                <div className="row abc">
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_1.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Vệ sinh răng, lấy cao răng không mất phí trong thời gian điều trị</p>
                                <p className="spText_2">Chỉnh nha cần một lộ trình dài hạn và chúng tôi sẽ đảm bảo mang tới cho bạn một nụ cười đẹp từ trong ra ngoài.</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_2.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Miễn phí 01 khay duy trì sau niềng</p>
                                <p className="spText_2">Bạn sẽ được nhận ngay 01 khay duy trì ngay sau khi tháo niềng để bảo hành “thành quả” lâu dài và trọn vẹn</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_3.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Giảm giá 50% dịch vụ nhổ răng khôn</p>
                                <p className="spText_2">90% khách hàng phải nhổ răng khôn tối thiểu 1 lần trong đời. Tại Nha khoa Thành An bạn sẽ được giảm 50% chi với bất kể số lượng răng khôn cần điều trị</p>
                            </div>
                        </div>
                    </div>        
                </div>
                <div className="row abc">
                <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_4.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Bảo hành mắc cài trong suốt quá trình niềng</p>
                                <p className="spText_2">Nếu bạn bị bung mắc cài hoặc mắc cài bị vỡ do quá trình ăn nhai, Nha khoa Thành An sẽ tiến hành thay mới cho bạn không mất phí.</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_5.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Giữ bảo mật về mặt thông tin</p>
                                <p className="spText_2">Thành An sẽ giữ bảo mật 100% các thông tin và hình ảnh điều trị và không sử dụng quảng cáo nếu chưa có sự cho phép của khách hàng.</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_6.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Hợp đồng cam kết kết quả dịch vụ</p>
                                <p className="spText_2">Nha khoa Thành An cam kết mang lại kết quả như ý tới khách hàng như đã thoả thuận từ buổi tư vấn đầu tiên bằng văn bản, giúp bạn hoàn toàn yên tâm trong quá trình thăm khám.</p>
                            </div>
                        </div>
                    </div>
                </div>


                    
                    <Modal show={show} onHide={handleClose}>
                        
                    <div class="mod" > 
                        <Modal.Header closeButton>
                        <Modal.Title>Liên hệ tư vấn</Modal.Title>
                        </Modal.Header>
                        <Form ref = {formRef} method = "Post" onSubmit={handleSubmit}>
                        <Modal.Body>
       
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                         
                                            <Form.Control type="text" name="name" className="form-control" placeholder="Nhập họ tên" />
                                           
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                         
                                        <Form.Control type="hidden" name="type" className="form-control" value="1" />
                                           
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                                         
                                         <Form.Control type="email" name="email" className="form-control" placeholder="Nhập địa chỉ email" />
                                         
                                     </Form.Group>
                                        <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                                         
                                            <Form.Control type="text" name="phone" className="form-control" placeholder="Nhập số điện thoại" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                      
                                            <Form.Control type="text" name="contents" className="form-control" placeholder="Nhập vấn đề quan tâm" />
                                            
                                        </Form.Group>
                                
                                
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" type="submit"  onClick={handleClose}>
                            Xác nhận
                        </Button>
                        </Modal.Footer>
                        </Form>
                    </div>
                    </Modal>
            


               <div className="Register">
                    <button onClick={handleShow} className="btn-type1" style={{border:"none"}}>LIÊN HỆ TƯ VẤN</button>
               </div>
            </div>
        </div>
 
          
    )

}
export default Policy;