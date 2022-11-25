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
            <div className="newsletter">        
          
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
                                <span> {getconfig.getconfig.copyright ?getconfig.getconfig.copyright.description  : ""}</span>
                    </div>                 
                </div>
            </div>
        </>

    )

}

export default Footer;