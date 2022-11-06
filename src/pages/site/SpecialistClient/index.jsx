
import { Link } from "react-router-dom"
import "./SpecialistClient.scss"

import { getListServiceAPI } from "../../../services/normal/SpecialistService";
import Loading from "../../../components/Loading/Loading";
import { setNavb } from "../../../redux/slices/InterfaceSile";
import {useDispatch} from "react-redux"
import { useEffect, useState } from "react";
function SpecialistClient () {

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
    return (
      
          <div className="container-fluid" id="spec">
           
              <div className="specialBlock_19">
                <div className="container containerFix">
                  <div className="wrapBox">
                    <p className="text_1">Chuyên khoa</p>
                    <div className="">
                      <ol className="breadcrumb breadcrumbFix">
                        <li className="breadcrumb-item">
                          <Link href="/"><span>Trang chủ</span></Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="chuyen-khoa" ><span>Chuyên khoa</span></Link>
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
                                              <img src={`${process.env.REACT_APP_BE}${item.thumbnail_name}`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="textPart">
                                            <Link className="linkNews">
                                              <p className="titleNews">{item.name}</p>
                                            </Link>
                                    
                                            <p className="desNews">
                                            {item.description}
                                              </p>
                                              <a href="" className="btnType_1">Xem thêm</a>
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
                                  <Link className="linkSer">
                                  Đặt lịch khám
                                  </Link>
                                  <Link className="linkSer">
                                  Đặt lịch tiêm vaccine
                                  </Link>
                                  <Link className="linkSer">
                                  Mua dụng cụ y tế
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
                                <form action="">
                                  <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Họ tên *" />
                                  </div>
                                  <div className="form-group">
                                    <input type="text" className="form-control" placeholder="điện thoại *" />
                                  </div>
                                  <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Dịch vụ tư vấn *" />
                                  </div>
                                  <div className="btnRegister">
                                    <Link className="btn-type1 btnSubmit15">ĐĂNG KÝ</Link> 
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
    )

}
export default SpecialistClient