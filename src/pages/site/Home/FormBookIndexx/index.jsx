
import { Link } from "@mui/material";
import { useRef } from "react";
import "./FormBookIndex2.scss";
import { creatContactApi } from "../../../../services/ContactService";
import { toast,ToastContainer } from 'react-toastify';
function FormBookIndexx () {

 const formRef2 = useRef();
 
    const handleSubmit2 = async (e) => {
     
        e.preventDefault();
        const formData = new FormData(formRef2.current)
        const req  = {
            "data" : formData
        }
        try {
            const res =  await creatContactApi(req) 
            formRef2.current.reset();
            toast.success(res.data.message) ; 
        } catch (error) {       
            toast.error("Không được bỏ trống thông tin");
        }
    }

    return(
<>


        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} 
              newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable pauseOnHover />

        <div className="specialBlock_18">
            <div className="container"> 
                <div className="row">
                    <div className="leftBox">
                        <div className="imgPart">
                            <img src="https://nhakhoathanhan.vn/uploads/img/Bs.png" alt="" />
                        </div>
                    </div>
                    <div className="rightBox">
                        <div className="formRegisterBlock_2">
                            <div className="titleBlock_1">
                                <p className="spTitle_2">ĐĂNG KÝ</p>
                                <p className="spTitle_1"><i className="spFix">ĐẶT LỊCH HẸN NGAY</i></p>
                                <div className="spUnderline"></div>
                            </div>
                            <p className="formText_2">Khám cùng FPro để nhận tư vấn cụ thể tình trạng của bạn!</p>
                            <form ref={formRef2} onSubmit={handleSubmit2} method="Post">

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Họ và tên *" name="name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Địa chỉ email *" name="email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Điện thoại *" name="phone" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Vấn đề bạn quan tâm?" name="contents" />
                                    <input type="hidden" name="type" value="1" />
                                </div>
                               
                                <div className="btnRegister">
                                <button type="submit" className="btnType_1 btnSubmit2">ĐẶT LỊCH</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</>
    )
}

export default FormBookIndexx;