import "./Footer.scss"
import fb from "../../../image/facebook-square.svg"
import yb from "../../../image/youtube-square.svg"
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png"
function Footer () {

    return (
        <>
            <div className="newsletter">        
                <h3>ĐĂNG KÝ NHẬN TIN MỚI NHẤT TỪ FPRO</h3>
                <div className="send">
                    <input type="text" placeholder="Nhập email để nhận thông báo từ Fro"  className="form-control"/>
                    <button className="btn btn-primary"><i className="fa-solid fa-envelope"></i></button>           
                </div>
            </div>
            <div className="footer1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="cot1">
                                <div className="logo">
                                    <img src={logo} alt="logo" width="100" height="100" />
                                </div>
                                <div className="address">
                                    <div className="row1">
                                        <h3>Công ty Cổ phần Công nghệ Fpro</h3>
                                    </div>
                                    <div className="row2">
                                        <p>310 30/4 Ninh kiều, Cần Thơ</p>
                                    </div>
                                    <div className="row3">
                                        <p>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
                                    </div>              
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="flashlink">
                                <div className="row">
                                    <Link to=""> Liên hệ đối tác</Link>
                                </div>
                                <div className="row">
                                        <Link to="">Gói chuyển đổi số doanh nghiệp</Link>
                                </div>
                                <div className="row">
                                        <Link to="">Tuyển dụng</Link>
                                </div>
                                <div className="row">
                                        <Link to="">Câu hỏi thường gặp</Link>
                                </div>
                                <div className="row">
                                        <Link to="">Điều khoản sử dụng</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="headquarters">
                                <div className="row">
                                    <h3>Trụ sở tại Hà Nội</h3>
                                    <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                                </div>
                                <div className="row">
                                    <h3>Văn phòng tại TP Hồ Chí Minh</h3>
                                    <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                                </div>
                                <div className="row">
                                    <h3>Hỗ trợ khách hàng</h3>
                                    <p>support@fpro-newweb.vn (7h - 18h)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="footer2">
                <div className="container">
                    <div className="coppyright">
                        2022 Fpro.
                    </div>
                    <div className="social">
                        <img src={fb} alt="fb" width={32} height={32} />
                        <img src={yb} alt="yb" width={32} height={32} />
                    </div>
                </div>
            </div>
        </>

    )

}

export default Footer;