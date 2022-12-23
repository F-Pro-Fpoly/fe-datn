import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { cancelBookingCodeServiceAPI, cancelBookingServiceAPI } from "../../../services/BookingService";
import "./Thanks.scss";
function Thanks() {
    const [searchParam] = useSearchParams();
    const [statusPayment,setStatusPay] =useState("");
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        setStatusPay(searchParam.get("vnp_TransactionStatus"))
        const code = searchParam.get("vnp_TxnRef");
        if(statusPayment =="02"){
            
            const returnBooking = async() => {
                let res =  await  cancelBookingCodeServiceAPI( token , {status_id: 5} , code);     
                console.log(res);  
            }
    
            returnBooking()
        }

    }, [statusPayment])
    
    return ( 
        <>  
        {statusPayment != "02"  ?
        
    
        <section className="thanks">
            <div className="d-flex">
                <div className="box-thanks">
                    <div className="header">
                        <h2>ĐẶT LỊCH THÀNH CÔNG</h2>
                    </div>
                    <div className="noti">
                        <p>
                            Lịch khám của bạn đã được gửi đến hệ thống của chúng tôi. Xin chân thành cảm ơn Quý khách đã đặt lịch.
                            Chúng tôi sẽ liên hệ với Quý khách trong thời gian ngắn nhất để xác nhận lịch khám của Quý khách.
                        </p>
                    </div>
                    <div className="button">
                        <Link className="btn btn-primary" to={"/"}>Trở về trang chủ</Link>
                        <Link className="btn btn-warning" to={"/lien-he"}>Liên hệ</Link>
                    </div>
                </div>
            </div>
        
        </section>
        :
        <section className="cancel">
        <div className="d-flex">
            <div className="box-cancel">
                <div className="header">
                    <h2>ĐẶT LỊCH THẤT BẠI</h2>
                </div>
                <div className="noti">
                    <p>
                        Lịch khám của bạn đã không được đăng ký thành công. Nếu bạn có nhu cầu đặt lịch lại thì hãy tiếp tục đặt lịch nhé!
                    </p>
                </div>
                <div className="button">
                    <Link className="btn btn-primary" to={"/"}>Trở về trang chủ</Link>
                    <Link className="btn btn-warning" to={"/lien-he"}>Liên hệ</Link>
                </div>
            </div>
        </div>
    
    </section>
    }

    
    
        
        </>

     );
}

export default Thanks;