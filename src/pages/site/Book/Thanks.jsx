import { Link } from "react-router-dom";
import "./Thanks.scss";
function Thanks() {
    return ( 
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

     );
}

export default Thanks;