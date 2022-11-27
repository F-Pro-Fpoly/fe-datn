
import { Link } from "react-router-dom"
import "./SpecialistClient.scss"

import { getListServiceAPI } from "../../../services/normal/SpecialistService";
import Loading from "../../../components/Loading/Loading";
import { setNavb } from "../../../redux/slices/InterfaceSile";
import {useDispatch} from "react-redux"
import { useEffect, useRef, useState } from "react";

import { toast,ToastContainer } from 'react-toastify';
import { creatContactApi } from "../../../services/ContactService";
function SpecialistClient () {

  const formRef = useRef();
  const [ListSpecialist, getSpecialistClient] = useState([]);
  const [loading, getLoading] = useState(false);
  
  const dispatch = useDispatch();

  
  useEffect(() => {
    document.title = "Chuyên khoa"
    dispatch(setNavb(true))
    const start = async () => {
        getLoading(true)
        getSpecialistClient([])
        let res = await getListServiceAPI({status: 1})
        let data = res.data
        let dataArr = data.data
        getLoading(false)
        getSpecialistClient(dataArr)
      
    }

      start()
  
  }, [])

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
        toast.error(messages);
    }
}


  
    return (
     <>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} 
      newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable pauseOnHover />
          <div className="container-fluid" id="spec">
           
              <div className="specialBlock_19">
                <div className="container containerFix">
                  <div className="wrapBox">
                    <p className="text_1">Chuyên khoa</p>
                    <div className="">
                      <ol className="breadcrumb breadcrumbFix">
                        <li className="breadcrumb-item">
                          <Link to="/"><span>Trang chủ</span></Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="chuyen-khoa" ><span>Chuyên khoa</span></Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="secMainContent">
                  <div className="container">
                    
                    <div className="row">
               
                        <div className="leftBlock">
                             
                        {loading && <Loading />}
                        {
                    ListSpecialist.map((item,index) => {
                    return(
                          <div className="wrapManyNews" key={index}>                          
                                    <div className="specialBlock_20">
                                        <div className="wrapImgPart">
                                            <Link className="imgPart figure1" to={item.slug}>
                                        <img src={ `${process.env.REACT_APP_BE}${item.thumbnail_name}` } alt="" />
                                      </Link>
                                  </div>
                                  <div className="textPart">
                                      <Link className="linkNews">
                                        <p className="titleNews">{item.name}</p>
                                      </Link>
                              
                                      <p className="desNews">
                                      {item.short_description}
                                        </p>
                                        <Link to={item.slug} className="btnType_1">Xem thêm</Link>
                                  </div>
                              </div>
                          </div>
                           )
                                          
                          })
                          }
                        </div>
                        <div className="rightBlock" id="sidebarBlock">
                          <div className="wrapSticky sidebar__inner">
                            <div className="smallBlock">
                              <div className="specialBlock_23">
                                <div className="titleBlock_2">
                                  <p className="text_1">
                                  DỊCH VỤ
                                  </p>
                                </div>
                                <div className="wrapBox">
                                  <Link className="linkSer" to={"/chuyen-khoa"}>
                                  Đặt lịch khám
                                  </Link>
                                  <Link className="linkSer" to={"/vaccine"}>
                                  Đặt lịch tiêm vaccine
                                  </Link>
                                
                                </div>
                              </div>
                            </div>
                            <div className="smallBlock">
                              <div className="formRegisterBlock_4">
                                <div className="titleBlock_2">
                                  <p className="text_1">
                                  ĐĂNG KÝ NGAY
                                  </p>
                                </div>
                                <form  ref = {formRef} method = "Post" onSubmit={handleSubmit}>
                                  <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Họ tên *" />
                                  </div>
                                  <div className="form-group">
                                    <input type="hidden" name="type" value="1" />
                                    <input type="email" name="email" className="form-control" placeholder="Địa chỉ email *" />
                                  </div>
                                  <div className="form-group">
                                    <input type="text" name="phone" className="form-control" placeholder="Nhập số điện thoại *" />
                                  </div>
                                  <div className="form-group">
                                    <input type="text" name="contents" className="form-control" placeholder="Dịch vụ tư vấn *" />
                                  </div>
                                  <div className="btnRegister">
                                    <button type="submit" className="btn-type1 btnSubmit15">ĐĂNG KÝ</button> 
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div> 
                        </div>
                    </div>
                  </div>
              </div>
          </div>
     </>
    )

}
export default SpecialistClient