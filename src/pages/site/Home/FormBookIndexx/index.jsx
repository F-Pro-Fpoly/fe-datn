
import { Link } from "@mui/material";
import { Form } from "react-bootstrap";
import "./FormBookIndex2.scss";
function FormBookIndexx () {
    return(
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
                                <p className="spTitle_1"><i className="spFix">ĐẶT LỊCH HẸN</i></p>
                                <div className="spUnderline"></div>
                            </div>
                            <p className="formText_2">Khám cùng Dr. Phan Tiệp để nhận tư vấn cụ thể tình trạng của bạn!</p>
                            <form>
                                
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Họ và tên *" name="name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Điện thoại *" name="name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Vấn đề bạn quan tâm?" name="name" />
                                </div>
                               
                                <div className="btnRegister">
                                <Link className="btnType_1 btnSubmit2">ĐĂNG KÝ</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FormBookIndexx;