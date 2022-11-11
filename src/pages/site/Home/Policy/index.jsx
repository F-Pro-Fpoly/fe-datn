
import "./Box.scss"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Policy () {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Lưu
                        </Button>
                        </Modal.Footer>
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