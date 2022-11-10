import { Link } from "react-router-dom"
import "./FormBookIndex.scss"
import Container from 'react-bootstrap/Container';
import img from '../../../../image/img_15.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";

function FormBookIndex () {

    const formRef = useRef();
 
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(formRef.current)
            console.log(formData);
        } catch (error) {
            
        }
    }

    return ( 
  
        <Container>
            <div className="formindex">
                <div className="itemLeft">
                    <div className="i">
                    <div className="titleleft">
                        <p>Bệnh viện đa khoa Fpro</p>
                        <span>"THỰC TÂM VÌ VẺ ĐẸP BỀN VỮNG"</span>
                    </div>
                    <div className="message">
                        <p><i>Tất cả các khách hàng đến bệnh viện đều được chính tay Bác sĩ Phan Tiệp thăm khám, lên phác đồ cụ thể, “cá nhân hóa” từng ca điều trị để đạt hiệu quả tốt nhất.</i></p>
                    </div>
                    </div>
                </div>
                <div className="itemright">
                    <div className="form">
                        <div className="titleright">
                            <p>ĐĂNG KÝ ĐẶT LỊCH HẸN</p>
                            <span>Bạn cần tư vấn thêm về các dịch vụ nha khoa vui lòng để lại thông tin để Phòng khám hỗ trợ Bạn nhé!</span>
                            <hr />
                        </div>
                        <div className="forminput">
                            <div className="area_2">
                            <div className="imgPart">
                                <img src={img} alt=""  />
                            </div>
                            <div className="rightArea">
                                <div className="formRegisterBlock_3">
                                    <Form ref = {formRef} method = "Post" onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                         
                                            <Form.Control type="text" className="form-control" placeholder="Nhập họ tên" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                                         
                                            <Form.Control type="text" className="form-control" placeholder="Nhập số điện thoại" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                      
                                            <Form.Control type="email" className="form-control" placeholder="Nhập vấn đề quan tâm" />
                                            
                                        </Form.Group>

                                        
                                        <Button variant="primary" type="submit" >
                                            Xác nhận
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </Container>        
    )

}
export default FormBookIndex;