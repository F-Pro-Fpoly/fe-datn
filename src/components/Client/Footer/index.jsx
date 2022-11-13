import "./Footer.scss"
import { Link } from "react-router-dom";
function Footer (getconfig) {

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
                                <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.logo ? getconfig.getconfig.logo.description : ""}`} alt="logo" width="220"  />
                                </div>
                                <div className="address">
                                    <div className="row1">
                                        <h3>{ getconfig.getconfig.NameCompany ? getconfig.getconfig.NameCompany.description : ""}</h3>
                                    </div>
                                    <div className="row2">
                                        <p>{ getconfig.getconfig.address ? getconfig.getconfig.address.description : ""}</p>
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
                        {getconfig.getconfig.copyright ?getconfig.getconfig.copyright.description  : ""}
                    </div>
                    <div className="social">
                        <Link   
                           onClick={()=> window.open(
                            getconfig.getconfig.SocialFaceBook ? getconfig.getconfig.SocialFaceBook.link : ""
                            , "_blank")}
                        >
                        <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialFaceBook ? getconfig.getconfig.SocialFaceBook.description : ""}`} alt="fb" width={32} height={32} />
                        </Link>
                        <Link   
                           onClick={()=> window.open(
                            getconfig.getconfig.SocialYoutube ? getconfig.getconfig.SocialYoutube.link : ""
                            , "_blank")}
                        >
                        <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialYoutube ? getconfig.getconfig.SocialYoutube.description : ""}`} alt="yb" width={32} height={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Footer;