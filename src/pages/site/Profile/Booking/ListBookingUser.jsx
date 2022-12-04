import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { cancelBookingServiceAPI, getMyBookingServiceAPI } from '../../../../services/BookingService';
import { useEffect } from 'react';
import Loading from '../../../../components/Loading/Loading';
import { ToastContainer, toast } from "react-toastify";

function ListBookingUser() {

    const token = useSelector(state => state.auth.token )
    const user_id =useSelector(state => state.auth.user.id )

    const [getNewBooking, setNewBooking ] = useState([]);
    const [getCancelBooking, setCancelBooking ] = useState([]);
    const [getComBooking, setComBooking ] = useState([]);
    const [loading, getLoading] = useState(false);
    const start  =  async () => {
        getLoading(true)
        setNewBooking([])
        setCancelBooking([])
        setComBooking([])
        let res1 = await getMyBookingServiceAPI(token,user_id,  [1,2,3]) 
        let data1 = res1.data
        let dataArr1 = data1.data
        let res2 = await getMyBookingServiceAPI(token,user_id,4) 
        let data2 = res2.data
        let dataArr2 = data2.data
        let res3 = await getMyBookingServiceAPI(token,user_id,5) 
        let data3 = res3.data
        let dataArr3 = data3.data
        getLoading(false)
        setNewBooking(dataArr1)
        setComBooking(dataArr2)
        setCancelBooking(dataArr3)
    }

    useEffect(() => {
        start()
    
    }, [])
    

    return(

      <>
        <ToastContainer />
    <div className="card border bg-transparent">
        
        <div className="card-header bg-transparent border-bottom">
            <h4 className="card-header-title">Lịch khám của tôi</h4>
        </div>

        
        <div className="card-body p-0">


            <ul className="nav nav-tabs nav-bottom-line nav-responsive nav-justified" role="tablist">
                <li className="nav-item" role="presentation"> 
                    <a className="nav-link mb-0 active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab"><i className="bi bi-briefcase-fill fa-fw me-1"></i>Lịch khám đã đặt</a> 
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabIndex="-1"><i className="bi bi-x-octagon fa-fw me-1"></i>Lịch khám đã hủy</a> 
                    </li>
                <li className="nav-item" role="presentation"> 
                    <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabIndex="-1"><i className="bi bi-patch-check fa-fw me-1"></i>Lịch khám đã hoàn thành</a> 
                </li>
            </ul>

            
            <div className="tab-content p-2 p-sm-4" id="nav-tabContent">

            <div className="tab-pane fade active show" id="tab-1" role="tabpanel">
                            <h6>Lịch khám đã đặt ({getNewBooking.length})</h6>

                {
                    getNewBooking.length > 0 ?
                    
                    
                    getNewBooking.map((item, index) => {
                    
                        return(

                      <>
                        {item.is_vaccine == 0 ? 
                        
                        <div className="card border mb-4" key={index}>
                      
                        <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                            
                            <div className="d-flex align-items-center">
                                <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                   
                                <img src={`${process.env.REACT_APP_BE}${item.specialist_image}`} alt="" /> 
                                </div>	
                                
                                <div className="ms-2">
                                    <h6 className="card-title mb-0">{item.specialist_name}</h6>
                                    <ul className="nav nav-divider small">
                                        <li className="nav-item"><b>Mã đặt lịch</b>: {item.code }</li>
                                        <li className="nav-item"><b>Phòng</b>: {item.department_name}</li>
                                    </ul>
                                    <ul className="nav nav-divider small">
                                         <li className="nav-item"><b>Trạng thái</b>:                                    
                                             {
                                                 item.status_id == 1 ? 
                                                 <span className="text-warning"> {item.status_name}</span>  
                                                 :
                                                 <span className="text-primary"> {item.status_name}</span> 
                                             }
                                         </li>
                                    </ul>
                                </div>
                            </div>

                            
                            <div className="mt-2 mt-md-0" style={{
                                display: "flex",
                                flexFlow:" column wrap",
                                placeContent: "center",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                               
                                 {/* <>
                                 {item.payment_method == "default" ? 
                                     <p className="text-info text-md-end mb-0"> Thanh toán tại cơ sở y tế</p>
                                     : 
                                     <p className="text-success text-md-end mb-0">Thanh toán qua momo</p>
                                 }
                                 </> */}
                                 <Link className='btn btn-primary' to={`/ho-so-ca-nhan/chi-tiet-lich-dat/${item.id}`}>Xem chi tiết</Link>
                                 <button className="btn btn-warning" 
                                 onClick={async () => {
                                     if(window.confirm(`Bạn có muốn hủy lịch ${item.code}`)){
                                      const cancel =  await cancelBookingServiceAPI( token , {status_id: 5} , item.id )
                                        const mess =  cancel.data.message
                                        toast.success(mess);
                                         start()
                                     }
                                 }}
                                 >Hủy lịch</button>
                            </div>
                        </div>

                        
                        <div className="card-body">
                            <div className="row g-3" style={{textAlign: "center"}}>
                                <div className="col-sm-6 col-md-4">
                                    <span>Giờ bắt đầu</span>
                                    <h6 className="mb-0">{item.time_start}</h6>
                                </div>

                                <div className="col-sm-6 col-md-4">
                                    <span>Giờ kết thúc</span>
                                    <h6 className="mb-0">{item.time_end}</h6>
                                </div>

                                <div className="col-md-4">
                                    <span>Ngày khám</span>
                                    <h6 className="mb-0">{item.date}</h6>
                                </div>
                            </div>
                        </div>
                        </div>

                        : 
                        <div className="card border mb-4" key={index}>
                      
                        <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                            
                            <div className="d-flex align-items-center">
                                <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                   
                                <img src={`${process.env.REACT_APP_BE}${item.specialist_image}`} alt="" /> 
                                </div>	
                                
                                <div className="ms-2">
                                    <h6 className="card-title mb-0">{item.vaccine_name}</h6>
                                    <ul className="nav nav-divider small">
                                        <li className="nav-item"><b>Mã đặt lịch</b>: {item.code }</li>
                                        <li className="nav-item"><b>Phòng</b>: {item.department_name}</li>
                                    </ul>
                                    <ul className="nav nav-divider small">
                                         <li className="nav-item"><b>Trạng thái</b>:                                    
                                             {
                                                 item.status_id == 1 ? 
                                                 <span className="text-warning"> {item.status_name}</span>  
                                                 :
                                                 <span className="text-primary"> {item.status_name}</span> 
                                             }
                                         </li>
                                    </ul>
                                </div>
                            </div>

                            
                            <div className="mt-2 mt-md-0" style={{
                                display: "flex",
                                flexFlow:" column wrap",
                                placeContent: "center",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                               
                                 {/* <>
                                 {item.payment_method == "default" ? 
                                     <p className="text-info text-md-end mb-0"> Thanh toán tại cơ sở y tế</p>
                                     : 
                                     <p className="text-success text-md-end mb-0">Thanh toán qua momo</p>
                                 }
                                 </> */}
                                 <Link className='btn btn-primary' to={`/ho-so-ca-nhan/chi-tiet-lich-tiem/${item.id}`}>Xem chi tiết</Link>
                                 <button className="btn btn-warning" 
                                 onClick={async () => {
                                     if(window.confirm(`Bạn có muốn hủy lịch ${item.code}`)){
                                      const cancel =  await cancelBookingServiceAPI( token , {status_id: 5} , item.id )
                                        const mess =  cancel.data.message
                                        toast.success(mess);
                                         start()
                                     }
                                 }}
                                 >Hủy lịch</button>
                            </div>
                        </div>

                        
                        <div className="card-body">
                            <div className="row g-3" style={{textAlign: "center"}}>
                            <div className="col-md-4">
                                   
                             </div>
                            <div className="col-md-4">
                     
                                 
                                {item.type_Injection_info == "screening_test" ? 
                                <span>  
                                   {item.type_Injection_info_name}
                                </span>  
                                :
                                <span>  
                                  {item.type_Injection_info_name}
                                </span>  
                                }
                            
                                    <h6 className="mb-0">{item.time_apointment}</h6>
                                </div>

                                <div className="col-md-4">
                                   
                                </div>
                               
                            </div>
                        </div>
                        </div>                       
                        }                         
                      </>
                            
                    
                        )
                    })
                    :
                   
                        loading ? <Loading /> :
                        <div className="bg-mode shadow p-4 rounded overflow-hidden">
                        <div className="row g-4 align-items-center">
                            
                            <div className="col-md-9">
                                <h6>Có vẻ như bạn chưa từng đặt lịch với FPRO</h6>
                                <h4 className="mb-2">Hãy đặt lịch ngay để nhận được nhiều ưu đãi.</h4>
                                <Link href="hotel-list.html" className="btn btn-primary-soft mb-0">Đặt lịch ngay</Link>
                            </div>
                            
                            <div className="col-md-3 text-end">
                                <img src="https://booking.webestica.com/assets/images/element/17.svg" className="mb-n5" alt="" />
                            </div>
                        </div>
                    </div>
                }
              
                </div>
                

                
                <div className="tab-pane fade" id="tab-2" role="tabpanel">
                    <h6>Lịch khám đã hủy ({getCancelBooking.length})</h6>

                    {
                    
                    getCancelBooking.length > 0 ?

                      getCancelBooking.map((item, index) => {
                       return(
                        <>
                        {item.is_vaccine == 0 ? 
                        
                        <div className="card border mb-4" key={index}>
                      
                        <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                            
                            <div className="d-flex align-items-center">
                                <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                   
                                <img src={`${process.env.REACT_APP_BE}${item.specialist_image}`} alt="" /> 
                                </div>	
                                
                                <div className="ms-2">
                                    <h6 className="card-title mb-0">{item.specialist_name}</h6>
                                    <ul className="nav nav-divider small">
                                        <li className="nav-item"><b>Mã đặt lịch</b>: {item.code }</li>
                                        <li className="nav-item"><b>Phòng</b>: {item.department_name}</li>
                                    </ul>
                                    <ul className="nav nav-divider small">
                                         <li className="nav-item"><b>Trạng thái</b>:                                    
                                             {
                                                 item.status_id == 1 ? 
                                                 <span className="text-warning"> {item.status_name}</span>  
                                                 :
                                                 <span className="text-primary"> {item.status_name}</span> 
                                             }
                                         </li>
                                    </ul>
                                </div>
                            </div>

                            
                            <div className="mt-2 mt-md-0" style={{
                                display: "flex",
                                flexFlow:" column wrap",
                                placeContent: "center",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                               
                                 {/* <>
                                 {item.payment_method == "default" ? 
                                     <p className="text-info text-md-end mb-0"> Thanh toán tại cơ sở y tế</p>
                                     : 
                                     <p className="text-success text-md-end mb-0">Thanh toán qua momo</p>
                                 }
                                 </> */}
                                 <Link className='btn btn-primary' to={`/ho-so-ca-nhan/chi-tiet-lich-dat/${item.id}`}>Xem chi tiết</Link>
                                 
                            </div>
                        </div>

                        
                        <div className="card-body">
                            <div className="row g-3" style={{textAlign: "center"}}>
                                <div className="col-sm-6 col-md-4">
                                    <span>Giờ bắt đầu</span>
                                    <h6 className="mb-0">{item.time_start}</h6>
                                </div>

                                <div className="col-sm-6 col-md-4">
                                    <span>Giờ kết thúc</span>
                                    <h6 className="mb-0">{item.time_end}</h6>
                                </div>

                                <div className="col-md-4">
                                    <span>Ngày khám</span>
                                    <h6 className="mb-0">{item.date}</h6>
                                </div>
                            </div>
                        </div>
                        </div>

                        : 
                        <div className="card border mb-4" key={index}>
                      
                        <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                            
                            <div className="d-flex align-items-center">
                                <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                   
                                <img src={`${process.env.REACT_APP_BE}${item.specialist_image}`} alt="" /> 
                                </div>	
                                
                                <div className="ms-2">
                                    <h6 className="card-title mb-0">{item.vaccine_name}</h6>
                                    <ul className="nav nav-divider small">
                                        <li className="nav-item"><b>Mã đặt lịch</b>: {item.code }</li>
                                        <li className="nav-item"><b>Phòng</b>: {item.department_name}</li>
                                    </ul>
                                    <ul className="nav nav-divider small">
                                         <li className="nav-item"><b>Trạng thái</b>:                                    
                                             {
                                                 item.status_id == 1 ? 
                                                 <span className="text-warning"> {item.status_name}</span>  
                                                 :
                                                 <span className="text-primary"> {item.status_name}</span> 
                                             }
                                         </li>
                                    </ul>
                                </div>
                            </div>

                            
                            <div className="mt-2 mt-md-0" style={{
                                display: "flex",
                                flexFlow:" column wrap",
                                placeContent: "center",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                               
                                 {/* <>
                                 {item.payment_method == "default" ? 
                                     <p className="text-info text-md-end mb-0"> Thanh toán tại cơ sở y tế</p>
                                     : 
                                     <p className="text-success text-md-end mb-0">Thanh toán qua momo</p>
                                 }
                                 </> */}
                                 <Link className='btn btn-primary' to={`/ho-so-ca-nhan/chi-tiet-lich-tiem/${item.id}`}>Xem chi tiết</Link>
                            
                            </div>
                        </div>

                        
                        <div className="card-body">
                            <div className="row g-3" style={{textAlign: "center"}}>
                            <div className="col-md-4">
                                   
                                </div>

                                <div className="col-md-4">
                                    <span>Ngày khám</span>
                                    <h6 className="mb-0">{item.time_apointment}</h6>
                                </div>
                                <div className="col-md-4">
                               
                                </div>
                            </div>
                        </div>
                        </div>                       
                        }                         
                      </>
                            
                    
                        )
                        })
                        :
                        <div className="col-md-9">
                            <h6>Hiện chưa có lịch khám hủy</h6>    
                        </div>
                       
                     }
                </div>
                

                
                <div className="tab-pane fade" id="tab-3" role="tabpanel">
                     
                <h6>Lịch khám đã hoàn thành  ({getComBooking.length})</h6>

                {
                    getComBooking.length > 0 ?

                      getComBooking.map((item, index) => {
                        return(
                          
                            <>
                            {item.is_vaccine == 0 ? 
                            
                            <div className="card border mb-4" key={index}>
                          
                            <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                                
                                <div className="d-flex align-items-center">
                                    <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                       
                                    <img src={`${process.env.REACT_APP_BE}${item.specialist_image}`} alt="" /> 
                                    </div>	
                                    
                                    <div className="ms-2">
                                        <h6 className="card-title mb-0">{item.specialist_name}</h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item"><b>Mã đặt lịch</b>: {item.code }</li>
                                            <li className="nav-item"><b>Phòng</b>: {item.department_name}</li>
                                        </ul>
                                        <ul className="nav nav-divider small">
                                             <li className="nav-item"><b>Trạng thái</b>:                                    
                                                 {
                                                     item.status_id == 1 ? 
                                                     <span className="text-warning"> {item.status_name}</span>  
                                                     :
                                                     <span className="text-primary"> {item.status_name}</span> 
                                                 }
                                             </li>
                                        </ul>
                                    </div>
                                </div>
    
                                
                                <div className="mt-2 mt-md-0" style={{
                                    display: "flex",
                                    flexFlow:" column wrap",
                                    placeContent: "center",
                                    flexDirection: "row",
                                    flexWrap: "nowrap",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                   
                                     {/* <>
                                     {item.payment_method == "default" ? 
                                         <p className="text-info text-md-end mb-0"> Thanh toán tại cơ sở y tế</p>
                                         : 
                                         <p className="text-success text-md-end mb-0">Thanh toán qua momo</p>
                                     }
                                     </> */}
                                     <Link className='btn btn-primary' to={`/ho-so-ca-nhan/chi-tiet-lich-dat/${item.id}`}>Xem chi tiết</Link>
                                   
                                </div>
                            </div>
    
                            
                            <div className="card-body">
                                <div className="row g-3" style={{textAlign: "center"}}>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Giờ bắt đầu</span>
                                        <h6 className="mb-0">{item.time_start}</h6>
                                    </div>
    
                                    <div className="col-sm-6 col-md-4">
                                        <span>Giờ kết thúc</span>
                                        <h6 className="mb-0">{item.time_end}</h6>
                                    </div>
    
                                    <div className="col-md-4">
                                        <span>Ngày khám</span>
                                        <h6 className="mb-0">{item.date}</h6>
                                    </div>
                                </div>
                            </div>
                            </div>
    
                            : 
                            <div className="card border mb-4" key={index}>
                          
                            <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                                
                                <div className="d-flex align-items-center">
                                    <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                       
                                    <img src={`${process.env.REACT_APP_BE}${item.specialist_image}`} alt="" /> 
                                    </div>	
                                    
                                    <div className="ms-2">
                                        <h6 className="card-title mb-0">{item.vaccine_name}</h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item"><b>Mã đặt lịch</b>: {item.code }</li>
                                            <li className="nav-item"><b>Phòng</b>: {item.department_name}</li>
                                        </ul>
                                        <ul className="nav nav-divider small">
                                             <li className="nav-item"><b>Trạng thái</b>:                                    
                                                 {
                                                     item.status_id == 1 ? 
                                                     <span className="text-warning"> {item.status_name}</span>  
                                                     :
                                                     <span className="text-primary"> {item.status_name}</span> 
                                                 }
                                             </li>
                                        </ul>
                                    </div>
                                </div>
    
                                
                                <div className="mt-2 mt-md-0" style={{
                                    display: "flex",
                                    flexFlow:" column wrap",
                                    placeContent: "center",
                                    flexDirection: "row",
                                    flexWrap: "nowrap",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                   
                                     {/* <>
                                     {item.payment_method == "default" ? 
                                         <p className="text-info text-md-end mb-0"> Thanh toán tại cơ sở y tế</p>
                                         : 
                                         <p className="text-success text-md-end mb-0">Thanh toán qua momo</p>
                                     }
                                     </> */}
                                     <Link className='btn btn-primary' to={`/ho-so-ca-nhan/chi-tiet-lich-tiem/${item.id}`}>Xem chi tiết</Link>
                                    
                                </div>
                            </div>
    
                            
                            <div className="card-body">
                                <div className="row g-3" style={{textAlign: "center"}}>
                                <div className="col-md-4">
                                       
                                    </div>
    
                                    <div className="col-md-4">
                                        <span>Ngày khám</span>
                                        <h6 className="mb-0">{item.time_apointment}</h6>
                                    </div>
                                    <div className="col-md-4">
                                   
                                    </div>
                                </div>
                            </div>
                            </div>                       
                            }                         
                          </>
                            
                    
                        )
                    })
                    :
                    loading ? <Loading /> :
                    <div className="bg-mode shadow p-4 rounded overflow-hidden">
                    <div className="row g-4 align-items-center">
                            <div className="col-md-9">
                                <h6>Có vẻ như bạn chưa từng đặt lịch với FPRO</h6>
                                <h4 className="mb-2">Hãy đặt lịch ngay để nhận được nhiều ưu đãi.</h4>
                                <Link href="hotel-list.html" className="btn btn-primary-soft mb-0">Đặt lịch ngay</Link>
                            </div>
                            
                            <div className="col-md-3 text-end">
                                <img src="https://booking.webestica.com/assets/images/element/17.svg" className="mb-n5" alt="" />
                            </div>
                    </div>
                    </div>
                        }
                        
                  
                    
                </div>
                
            </div>

        </div>
        
    </div>
      </>
    
    )
}
export default ListBookingUser