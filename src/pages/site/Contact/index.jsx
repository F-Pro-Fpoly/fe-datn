import "./Contact.scss";
import {useDispatch, useSelector} from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import { useEffect, useMemo, useRef } from 'react';
import {creatContactApi} from "../../../services/ContactService"
function Contact(){
    const token = useSelector((state)=>state.auth.token);
    const FormRep = useRef();
    const submitContact = async (event) =>{
      event.preventDefault();
      const formData = new FormData(FormRep.current);
      const req = {
        "token": token,
        "data": formData
      };
      try {
        let res = await creatContactApi(req);
        FormRep.current.reset();
        toast.success(res.data.message) ;     
      } catch (error) {
        let res = error.response;
        let data = res.data;
        let messages = data.message;
        toast.error(messages);
      }
  
    }
    return(
            <main role="main" className="formBooking main2">
                <div className="container mt-2">
                    <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} 
                    newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable pauseOnHover /><ToastContainer />
                    <img src="./img/banner-lienhe001.jpg" alt="đa khoa cần thơ" />
                    <h1 className="text-center loc">Liên hệ với chúng tôi</h1>
                    <div className="row">
                        <div className="col col-md-6">
                            <img src="https://khothietke.net/wp-content/uploads/2021/03/PNG00194-bac-sy-gia-dinh-png.png" />
                        </div>
                        <div className="col col-md-6">
                            <form className="cf form fe" onSubmit={submitContact} ref={FormRep} method="post">
                                <div className="half left cf">
                                    <input type="text" className="input" id="input-name" name="name" placeholder="Họ tên" />
                                    <input type="email" className="input" id="input-email" name="email" placeholder="Email" />
                                </div>
                                <div className="half right cf">
                                    <textarea name="contents" type="text" className="textarea" id="input-message" placeholder="Nội dung gửi đi"></textarea>
                                </div>  
                                <button type="submit" className="input" id="input-submit">Gửi đi</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col col-md-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15731.951090496856!2d105.568023!3d9.682084!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1666955030821!5m2!1svi!2s"
                          className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </main>
    );
};
export default Contact;