import "./Footer.scss"
import { Link } from "react-router-dom";
import { PostNewsletter } from "../../../services/NewsletterService";
import { useSelector} from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import {  useRef } from 'react';
function Footer (getconfig) {

    const token = useSelector((state)=>state.auth.token);
    const formRef = useRef();

    const submitNewsletter = async (event) =>{
      event.preventDefault();
      const formData = new FormData(formRef.current);
      const req = {
        "data": formData,
      };
      try {
        let res = await PostNewsletter(req,token);
        formRef.current.reset();
        toast.success(res.data.message) ;     
      } catch (error) {
        let res = error.response;
        let data = res.data;
        let messages = data.message;
        console.log(data);
        toast.error(messages);
      }
  
    }
    




    return (
        <>
          <form action="" onSubmit={submitNewsletter} ref={formRef}>
            <div className="newsletter repon-newslt">        
          
                <h3>ĐĂNG KÝ NHẬN TIN MỚI NHẤT TỪ FPRO</h3>
              
                <div className="send">           
                        <input type="text" name="email" placeholder="Nhập email để nhận thông báo từ Fro"  className="form-control"/>
                        <button type="submit"  className="btn btn-primary"><i className="fa-solid fa-envelope"></i></button>                      
                </div>
               
            </div>
            </form>
            
            <div className="footer1">
                <div className="container">
                    <div className="row fix-flex">
                    
                    <div className="col-xl-3 col-md-4 col-12">         
                    <div className="logo">
                        <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.logo ? getconfig.getconfig.logo.description : ""}`} alt="logo" width="150"  />
                    </div>                                
                        <div className="address">
                            <div className="row">
                                <h3
                                    style={{fontSize: "25px"}}
                                >{ getconfig.getconfig.NameCompany ? getconfig.getconfig.NameCompany.description : ""}</h3>                   
                                <p
                                     style={{fontSize: "18px"}}
                                >Số điện thoại: { getconfig.getconfig.phone ? getconfig.getconfig.phone.description : ""}</p>    
                                <h3
                                     style={{fontSize: "25px"}}
                                >Văn phòng</h3>
                                <p
                                     style={{fontSize: "18px"}}
                                >Địa chỉ: { getconfig.getconfig.address ? getconfig.getconfig.address.description : ""}</p>
                            </div>                                   
                        </div>
                    </div>
                        <div className="col-xl-3 col-md-4 col-12">
                            <div className="flashlink">
                                <div className="row">
                                    <h3>GIỚI THIỆU</h3>
                                    <Link to="/ve-chung-toi">Về chúng tôi</Link>                            
                                    <Link to="/tin-tuc">Tin tức</Link>                        
                                    <Link to="#">Liên hệ hợp tác</Link>                        
                                    <Link to="#">Câu hỏi thường gặp</Link>                        
                                    <Link to="#">Tuyển dụng</Link>                        
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-12">
                            <div className="headquarters">
                                <div className="row">
                                    <h3>DỊCH VỤ</h3>
                                    <Link to="/chuyen-khoa">Đăng ký lịch khám</Link>                            
                                    <Link to="/vaccine">Đăng ký tiêm vaccsine</Link>                        
                                    <Link to="/bieu-do-covid">Biểu đồ Covid</Link>                             
                                    <Link to="#">Điều khoản sử dụng</Link>                             
                                    <Link to="/chinh-sach-bao-mat">Chính sách Bảo mật</Link>                             
                               
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-12" style={{ alignSelf: "start"}}>
                      
                            <div className="social" style={{paddingTop: "10%"}}>
                            <div className="sf-social">
                                        <div className="sf-social__wrapper">
                                            <div className="sf-social--header">
                                                <h2>Kết nối với chúng tôi</h2>
                                            </div>
                                <div className="sf-social-icons">
                                    <div className="sf-social-icon--container">
                                        <Link   
                                            onClick={()=> window.open(
                                                getconfig.getconfig.SocialFaceBook ? getconfig.getconfig.SocialFaceBook.link : ""
                                                , "_blank")}
                                            >
                                            <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialFaceBook ? getconfig.getconfig.SocialFaceBook.description : ""}`} alt="fb"className="img-icon" />
                                        </Link>    
                                    </div>   
                                    <div className="sf-social-icon--container">        
                                        <Link   
                                            onClick={()=> window.open(
                                                getconfig.getconfig.SocialYoutube ? getconfig.getconfig.SocialYoutube.link : ""
                                                , "_blank")}
                                            >
                                            <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialYoutube ? getconfig.getconfig.SocialYoutube.description : ""}`} alt="fb"className="img-icon" />
                                        </Link>                  
                                    </div>   
                                    <div className="sf-social-icon--container">        
                                        <Link   
                                            onClick={()=> window.open(
                                                getconfig.getconfig.SocialGroup ? getconfig.getconfig.SocialGroup.link : ""
                                                , "_blank")}
                                            >
                                            <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialGroup ? getconfig.getconfig.SocialGroup.description : ""}`} alt="Group"className="img-icon" />
                                        </Link>                  
                                    </div> 
                                    <div className="sf-social-icon--container">        
                                        <Link   
                                            onClick={()=> window.open(
                                                getconfig.getconfig.SocialTiktok ? getconfig.getconfig.SocialTiktok.link : ""
                                                , "_blank")}
                                            >
                                            <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.SocialTiktok ? getconfig.getconfig.SocialTiktok.description : ""}`} alt="tt" className="img-icon" />
                                        </Link>                  
                                    </div> 
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="footer2">
                <div className="container">
                    <div className="coppyright">
                                <span> {getconfig.getconfig.copyright ?getconfig.getconfig.copyright.description  : ""}</span>
                    </div>                 
                </div>
            </div>
        </>

    )

}

export default Footer;