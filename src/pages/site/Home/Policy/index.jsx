
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
                <span>TRUNG TÂM Y TẾ FPRO</span><br />
                <div className="line"></div>
            </div>
            <div className="Policy">
                <div className="row abc">
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133744-suckhoetinhthan.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Sức khỏe của bạn là xứ mệnh của chúng tôi</p>
                                <p className="spText_2">FPro lun mang tới cho bạn sự lựa chọn tốt nhất và an toàn nhất. Chúng tôi sẽ mang lại cho khách hàng cảm giác thân thiện như ở nhà.</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    {/* <img src="https://nhakhoathanhan.vn/uploads/img/item_3.png" alt="" /> */}
                                    <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133657-khamtuxa.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Thăm khám cho khách hàng toàn quốc</p>
                                <p className="spText_2">FPro sẽ cử Y Bác Sĩ gọi điện hỗ trợ trực tiếp cho mỗi khách hàng một cách tận tình và chu đáo.</p>
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
                                <p className="spText_1">Miễn phí 01 Vorcher cho người thâ<noscript></noscript></p>
                                <p className="spText_2">Bạn sẽ được nhận ngay 01 Vorcher khám tổng quát cho người thân khi đã thanh toán thành công 1 loại Vaccine bên FPro.</p>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="row abc">
                    
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    <img src="https://nhakhoathanhan.vn/uploads/img/item_5.png" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Giữ bảo mật về mặt thông tin</p>
                                <p className="spText_2">Trung tâm y tế FPro sẽ giữ bảo mật 100% các thông tin và hình ảnh điều trị và không sử dụng quảng cáo nếu chưa có sự cho phép của khách hàng.</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-box">
                        <div className="special-box">
                            <div className="wrapImg">
                                <div className="imgPart">
                                    {/* <img src="https://nhakhoathanhan.vn/uploads/img/item_4.png" alt="" /> */}
                                    <img src="https://cdn.bookingcare.vn/fo/2022/07/29/101157-icon-lich-su.jpg" alt="" />
                                </div>
                            </div>
                            <div className="textPart">
                                <p className="spText_1">Bảo hành mắc cài trong suốt quá trình niềng</p>
                                <p className="spText_2">Đội ngũ Y Bác Sĩ của FPro với trên 10 năm kinh nghiệm trong chuyên môn giúp chuẩn đoán và lên phát đồ điều trị một cách khoa học.</p>
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
                                <p className="spText_2">Trung Tâm Y Tế FPro cam kết mang lại kết quả như ý tới khách hàng như đã thoả thuận từ buổi tư vấn đầu tiên bằng văn bản, giúp bạn hoàn toàn yên tâm trong quá trình thăm khám.</p>
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