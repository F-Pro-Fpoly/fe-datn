import "./Contact.scss";
import { useSelector} from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import {  useEffect, useRef,useState} from 'react';
import {creatContactApi} from "../../../services/ContactService";
import { ListConfigService } from '../../../services/normal/ConfigService';
import { getDatabase, ref, set } from "firebase/database";
import { Link } from "react-router-dom";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Contact(){
    const token = useSelector((state)=>state.auth.token);
    const FormRep = useRef();
    const [getconfig, setConfig] = useState([])
    const submitContact = async (event) =>{
      event.preventDefault();
      const formData = new FormData(FormRep.current);
      const req = {
        "data": formData,
        "type":0
      };
  
      try {
        let res = await creatContactApi(req,token);
        writeUserData(formData.get("name"), formData.get("contents"), "contact_"+getRandomInt(1000000000))
        FormRep.current.reset();
        toast.success(res.data.message) ;     
      } catch (error) {
        let res = error.response;
        let data = res.data;
        let messages = data.message;
        toast.error(messages);
      }
  
    }
    const start = async () => {
  
      let respon = await ListConfigService()
      let dataa = respon.data;
      let dataArrr = dataa.data;
      setConfig(dataArrr)
 }
 useEffect(() => {
  document.title = "Trang liên hệ"
  start()

}, []);


    return(
      <div className="contact">
            <div className="page-title">
                            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} 
                              newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable pauseOnHover />
                          <div className="content-contact">
                            <div className="contact-contact ">
                              <div className="other-contact">
                                <div className="info-contact">
                                  <h2>{getconfig.NameCompany ? getconfig.NameCompany.description : ""}</h2>
                                  <h3>Email</h3>
                                  <div className="svg-wrap-contact">
                                    <a href="fpro.info@gmail.com">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.211 485.211">
                                        <path d="M485.21 363.906c0 10.637-2.99 20.498-7.784 29.174l-153.2-171.41 151.54-132.584c5.894 9.355 9.445 20.344 9.445 32.22v242.6zM242.607 252.793l210.863-184.5c-8.654-4.737-18.398-7.642-28.91-7.642H60.65c-10.523 0-20.27 2.906-28.888 7.643l210.844 184.5zm58.787-11.162l-48.81 42.735c-2.854 2.487-6.41 3.73-9.977 3.73-3.57 0-7.125-1.243-9.98-3.73l-48.82-42.736-155.14 173.6c9.3 5.834 20.198 9.33 31.984 9.33h363.91c11.785 0 22.688-3.496 31.984-9.33l-155.15-173.6zM9.448 89.086C3.554 98.44 0 109.43 0 121.305v242.602c0 10.637 2.978 20.498 7.79 29.174L160.97 221.64 9.448 89.086z"/>
                                        
                                      </svg>
                                      {getconfig.email ? getconfig.email.description : ""}
                                    </a>
                                  </div>
                                  <h3>Liên hệ</h3>
                                  <div className="svg-wrap-contact">
                                    <Link>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M373.66 0H138.34C62.06 0 0 62.06 0 138.34v235.32C0 449.94 62.06 512 138.34 512h235.32C449.94 512 512 449.94 512 373.66V138.34C512 62.06 449.94 0 373.66 0zm96.976 373.66c0 53.472-43.503 96.976-96.977 96.976H138.34c-53.472 0-96.976-43.503-96.976-96.977V138.34c0-53.472 43.503-96.976 96.977-96.976h235.32c53.472 0 96.976 43.503 96.976 96.977v235.32z"/>
                                          <path d="M370.586 238.14c-3.64-24.546-14.84-46.794-32.386-64.34-17.547-17.547-39.795-28.747-64.34-32.386-11.177-1.657-22.508-1.657-33.683 0-30.336 4.5-57.103 20.54-75.372 45.172-18.27 24.63-25.854 54.903-21.355 85.237 4.5 30.335 20.54 57.102 45.172 75.372 19.996 14.83 43.706 22.62 68.153 22.62 5.667 0 11.375-.42 17.083-1.266 30.336-4.5 57.103-20.542 75.372-45.173 18.27-24.63 25.855-54.9 21.356-85.236zM267.79 327.633c-19.404 2.882-38.77-1.973-54.526-13.66-15.757-11.687-26.02-28.81-28.896-48.216-2.878-19.405 1.973-38.77 13.66-54.527 11.688-15.758 28.81-26.02 48.217-28.898 3.574-.53 7.173-.795 10.772-.795s7.2.265 10.773.796c32.23 4.78 57.098 29.645 61.878 61.877 5.94 40.058-21.817 77.482-61.877 83.422zM400.05 111.95c-3.853-3.85-9.184-6.057-14.626-6.057S374.65 108.1 370.8 111.95c-3.852 3.853-6.06 9.175-6.06 14.626 0 5.45 2.208 10.773 6.06 14.625 3.85 3.852 9.182 6.06 14.624 6.06s10.773-2.207 14.625-6.06c3.85-3.85 6.057-9.182 6.057-14.624 0-5.443-2.207-10.774-6.058-14.625z"/>
                                      </svg>
                                    </Link>
                                    
                                    <Link><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772 25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87 163.525 595.21 141.42 612 116.257z"/></svg></Link>
                                    
                                    <Link><svg xmlns="http://www.w3.org/2000/svg" width="60.734" height="60.733" viewBox="0 0 60.734 60.733"><path d="M57.378 0H3.352C1.502 0 0 1.5 0 3.354V57.38c0 1.852 1.502 3.353 3.352 3.353h29.086v-23.52h-7.914v-9.166h7.914v-6.76c0-7.843 4.79-12.116 11.787-12.116 3.355 0 6.232.252 7.07.36v8.2h-4.853c-3.805 0-4.54 1.81-4.54 4.463v5.85h9.08l-1.188 9.167h-7.892v23.52h15.475c1.852 0 3.355-1.503 3.355-3.35V3.35C60.732 1.5 59.23 0 57.378 0z"/></svg></Link>
                                    
                                    <Link><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.165 478.165"><path d="M442.78 0H35.424C15.86 0 0 15.4 0 34.288v409.688c0 18.828 15.86 34.19 35.424 34.19H442.76c19.586 0 35.405-15.362 35.405-34.19V34.288C478.165 15.4 462.345 0 442.78 0zM145.003 400.244H72.78V184.412h72.224v215.832zm-36.16-245.28h-.48c-24.246 0-39.926-16.695-39.926-37.336 0-21.22 16.158-37.337 40.863-37.337 24.725 0 39.927 16.12 40.385 37.338.02 20.64-15.64 37.337-40.843 37.337zm296.54 245.28h-72.082V284.807c0-29.01-10.598-48.952-36.738-48.952-20.063 0-31.798 13.428-36.958 26.458-1.893 4.423-2.39 10.898-2.39 17.393v120.537H184.95s.916-195.63 0-215.832h72.263v30.604c9.484-14.684 26.658-35.703 65.01-35.703 47.577 0 83.16 30.863 83.16 97.168v123.766zm-148.61-184.532c.06-.22.16-.438.42-.677v.677h-.42z"/></svg></Link>
                                  </div>
                                </div>
                              </div>
                              <div className="form-contact">
                                <h1>Liên hệ</h1>
                                <form  onSubmit={submitContact} ref={FormRep} method="post" className="was-validated">
                                  <div className="flex-rev-contact">
                                    <input  type="text" placeholder="VD: Nguyễn Văn A" name="name"required />
                                    <div className="invalid-feedback">Họ tên không đuọc bỏ trống.</div>
                                    <label>Họ tên</label>
                                    
                                  </div>
                                  <div className="flex-rev-contact">
                                    <input  type="email" placeholder="VD: fpro.info@gmail.com" name="email"required />
                                    <div className="invalid-feedback">Email không đuọc bỏ trống.</div>
                                    <label> Email</label> 
                                  </div>
                                  <div className="flex-rev-contact">
                                    <input  type="text" placeholder="VD: 0794248804" name="phone" required/>
                                    <div className="invalid-feedback">Số điện thoại không đuọc bỏ trống.</div>
                                    <label>Số điện thoại</label>
                                  </div>
                                  <div className="flex-rev-contact">
                                    <textarea placeholder="Nhập nội dung vào ô này !...." name="contents" required></textarea>
                                    <label >Nội dung</label>
                                  </div>
                                  <button className="button-contact">Gửi Email</button>
                                </form>
                              </div>
                            </div>
                          </div>
            </div>
          </div>
    );
};

function writeUserData(name,content, userId) {
  const db = getDatabase();
  set(ref(db, 'contact/' + userId), {
    username: name,
    content: content,
    status: "A"
  });
}
export default Contact;