import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getMyBookingServiceAPI } from '../../../../services/BookingService';
import { useEffect } from 'react';
import Loading from '../../../../components/Loading/Loading';


function Booking() {

    const token = useSelector(state => state.auth.token )
    const user_id =useSelector(state => state.auth.user.id )

    const [getBooking, setBooking ] = useState();
    const [loading, getLoading] = useState(false);
    const start  =  async () => {
        getLoading(true)
        setBooking([])
        let res = await getMyBookingServiceAPI(token,user_id) 
        let data = res.data
        let dataArr = data.data
        let count =  dataArr.length
        getLoading(false)
        setBooking(dataArr)
    }



    useEffect(() => {
        start()
    

    }, [])
    
    return(


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
                            <h6>Lịch khám đã đặt</h6>
            
                {
                    getBooking &&   getBooking.map((item, index) => {
                        return(
                          
                               item.status_id == 1 &&  <div className="card border mb-4" key={index}>
                                
                               <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                                   
                                   <div className="d-flex align-items-center">
                                       <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                          
                                       <img src="https://booking.webestica.com/assets/images/avatar/01.jpg" alt="" /> 
                                       </div>	
                                       
                                       <div className="ms-2">
                                           <h6 className="card-title mb-0">Cơ xương khớp</h6>
                                           <ul className="nav nav-divider small">
                                               <li className="nav-item">Mã đặt lịch: {item.code && item.code }</li>
                                               <li className="nav-item">Phòng: {item.department_name && item.department_name}</li>
                                           </ul>
                                       </div>
                                   </div>
       
                                   
                                   <div className="mt-2 mt-md-0">
                                        {/* <p className="text-primary text-md-end mb-0">Thanh toán {item.payment_method && item.payment_method}</p> */}
                                        <>
                                        {item.payment_method == "default" ? 
                                            <p className="text-info text-md-end mb-0"> chưa đặt cọc</p>
                                            : 
                                            <p className="text-success text-md-end mb-0">Đã đặt cọc</p>
                                        }
                                        </>
                                   </div>
                               </div>
       
                               
                               <div className="card-body">
                                   <div className="row g-3" style={{textAlign: "center"}}>
                                       <div className="col-sm-6 col-md-4">
                                           <span>Giờ bắt đầu</span>
                                           <h6 className="mb-0">07:00:00</h6>
                                       </div>
       
                                       <div className="col-sm-6 col-md-4">
                                           <span>Giờ kết thúc</span>
                                           <h6 className="mb-0">07:30:00</h6>
                                       </div>
       
                                       <div className="col-md-4">
                                           <span>Ngày khám</span>
                                           <h6 className="mb-0">02/11/2022</h6>
                                       </div>
                                   </div>
                               </div>
                           </div>
                            
                    
                        )
                    })
                }
                {
                loading && <Loading />
                }
                </div>
                

                
                <div className="tab-pane fade" id="tab-2" role="tabpanel">
                    <h6>Lịch khám đã hủy</h6>

                    {
                    getBooking &&   getBooking.map((item, index) => {
                        return(
                            item.status_id == 5 && 
                            <div className="card border" key={index}>
                            
                            <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
                                
                                <div className="d-flex align-items-center">
                                    <div className="p-icon-lg bg-light rounded-circle flex-shrink-0">
                                        <img src="https://booking.webestica.com/assets/images/avatar/01.jpg" alt="" /> 
                                    </div>
                                        
                                    <div className="ms-2">
                                        <h6 className="card-title mb-0">Cơ xương khớp</h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item">Mã đặt lịch: CGDSUAHA12548</li>
                                            <li className="nav-item">Phòng: ABC</li>
                                        </ul>
                                    </div>
                                </div>

                                
                                <div className="mt-2 mt-md-0">
                                    <p className="text-danger text-md-end mb-0">Đã hủy</p>
                                </div>
                            </div>

                            
                            <div className="card-body">
                                <div className="row g-3"  style={{textAlign: "center"}}>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Giờ bắt đầu</span>
                                        <h6 className="mb-0">07:00:00</h6>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <span>Giờ kết thúc</span>
                                        <h6 className="mb-0">07:30:00</h6>
                                    </div>

                                    <div className="col-md-4">
                                        <span>Ngày khám</span>
                                        <h6 className="mb-0">02/11/2022</h6>
                                    </div>
                                </div>
                            </div>
                            </div>
                    
                        )
                        })
                     }
                </div>
                

                
                <div className="tab-pane fade" id="tab-3" role="tabpanel">
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
                    
                </div>
                
            </div>

        </div>
        
    </div>
    
    )
}
export default Booking