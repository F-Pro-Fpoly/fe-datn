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
                    <div className="row fix-flex">
                    
                    <div className="col-xl-3 col-md-4 col-12">         
                    <div className="logo">
                        <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.logo ? getconfig.getconfig.logo.description : ""}`} alt="logo" width="150"  />
                    </div>                                
                        <div className="address">
                            <div className="row">
                                <h3>{ getconfig.getconfig.NameCompany ? getconfig.getconfig.NameCompany.description : ""}</h3>                   
                                <p>{ getconfig.getconfig.phone ? getconfig.getconfig.phone.description : ""}</p>    
                                <h3>Văn phòng</h3>
                                <p>{ getconfig.getconfig.address ? getconfig.getconfig.address.description : ""}</p>
                            </div>                                   
                        </div>
                    </div>
                        <div className="col-xl-3 col-md-4 col-12">
                            <div className="flashlink">
                                <div className="row">
                                    <h3>GIỚI THIỆU</h3>
                                    <Link to=""> Liên hệ đối tác</Link>                            
                                    <Link to="">Gói chuyển đổi số doanh nghiệp</Link>                        
                                    <Link to="">Tuyển dụng</Link>                             
                                    <Link to="">Câu hỏi thường gặp</Link>                             
                                    <Link to="">Điều khoản sử dụng</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-12">
                            <div className="headquarters">
                                <div className="row">
                                    <h3>DỊCH VỤ</h3>
                                    <Link to=""> Liên hệ đối tác</Link>                            
                                    <Link to="">Gói chuyển đổi số doanh nghiệp</Link>                        
                                    <Link to="">Tuyển dụng</Link>                             
                                    <Link to="">Câu hỏi thường gặp</Link>                             
                                    <Link to="">Điều khoản sử dụng</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-12">
                            <div className="social">
                            <div className="row">
                                <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                                <Link   
                                    onClick={()=> window.open(
                                        getconfig.getconfig.SocialFaceBook ? getconfig.getconfig.SocialFaceBook.link : ""
                                        , "_blank")}
                                    >
                                    <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialFaceBook ? getconfig.getconfig.SocialFaceBook.description : ""}`} alt="fb" />
                                    </Link>                  
                                  
                                </div>

                            {/* <div className="row">
                                    
                                   
                                    
                                    <Link   
                                    onClick={()=> window.open(
                                        getconfig.getconfig.SocialYoutube ? getconfig.getconfig.SocialYoutube.link : ""
                                        , "_blank")}
                                    >
                                    <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialYoutube ? getconfig.getconfig.SocialYoutube.description : ""}`} alt="yb" width={32} height={32} />
                                    </Link>

                                 
                                </div> */}
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
                </div>
            </div>
        </>

    )

}

export default Footer;