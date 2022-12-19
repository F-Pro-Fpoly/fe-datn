
import "./FormBookIndex.scss"
import Container from 'react-bootstrap/Container';
import img from '../../../../image/img_15.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
import { creatContactApi } from "../../../../services/ContactService";
import { toast,ToastContainer } from 'react-toastify';
function FormBookIndex () {

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
            let name = messages.name ?  messages.name[0] : ""
            if(name !="")  {
                toast.error(name)
            }
            let email = messages.email ? messages.email[0] : ""
            if(email !="")  {
                toast.error(email)
            }
          
            let contents = messages.contents?  messages.contents[0] :""
            if(contents !="")  {
                toast.error(contents)
            }
            let phone = messages.phone? messages.phone[0] : ""
            if(phone !="")  {
                toast.error(phone)
            }
     
        }
    }

    return ( 
  
        <Container>
              <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} 
                    newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable pauseOnHover />
            <div className="formindex">
                <div className="itemLeft">
                    <div className="i">
                    <div className="titleleft">
                        <p>Trung Tâm Y Tế FPro</p>
                        <span>"SỨC KHỎE CỦA BẠN LÀ XỨ MỆNH CỦA CHÚNG TÔI"</span>
                    </div>
                    <div className="message">
                        <p><i>Tất cả các khách hàng đến FPro đều được chính tay Bác sĩ nhiều năm kinh nghiệm thăm khám, lên phác đồ cụ thể, “cá nhân hóa” từng ca điều trị để đạt hiệu quả tốt nhất.</i></p>
                    </div>
                    </div>
                </div>
                <div className="itemright">
                    <div className="form">
                        <div className="titleright">
                            <p>ĐĂNG KÝ ĐẶT LỊCH NGAY</p>
                            <span>Bạn cần tư vấn thêm về các dịch vụ Vaccine vui lòng để lại thông tin để Trung Tâm FPro hỗ trợ Bạn nhé!</span>
                            <hr />
                        </div>
                        <div className="forminput">
                            <div className="area_2">
                            <div className="imgPart">
                                <img src={img} alt=""  />
                                {/* <img src={img} alt=""  /> */}
                            </div>
                            <div className="rightArea">
                                <div className="formRegisterBlock_3">
                                    <Form ref = {formRef} method = "Post" onSubmit={handleSubmit}>
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