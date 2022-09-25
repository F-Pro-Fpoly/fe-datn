import { Link } from "react-router-dom"
import "./Box.scss"
function Box () {

    return ( 
        <div className="rowList">
        <h3>Bác sĩ từ xa qua Video</h3>
            <div className="container">              
                <div className="col">
                    {/* <div className="tag">
                        <span>{item.tag}</span>
                    </div> */}
                    <Link to="/home">
                        <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="" />
                    </Link>
                    <div className="info">
                        <p>Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn</p>
                        <span>Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân</span><br/>
                        <Link to="">XEM CHI TIẾT</Link><i className="fa-solid fa-angle-right"></i>
                    </div>
                </div> 
                <div className="col">
                    {/* <div className="tag">
                        <span>{item.tag}</span>
                    </div> */}
                    <Link to="/home">
                        <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="" />
                    </Link>
                    <div className="info">
                        <p>Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn</p>
                        <span>Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân</span><br/>
                        <Link to="">XEM CHI TIẾT</Link><i className="fa-solid fa-angle-right"></i>
                    </div>
                </div> 
                <div className="col">
                    {/* <div className="tag">
                        <span>{item.tag}</span>
                    </div> */}
                    <Link to="/home">
                        <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="" />
                    </Link>
                    <div className="info">
                        <p>Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn</p>
                        <span>Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân</span><br/>
                        <Link to="">XEM CHI TIẾT</Link><i className="fa-solid fa-angle-right"></i>
                    </div>
                </div> 
                <div className="col">
                    {/* <div className="tag">
                        <span>{item.tag}</span>
                    </div> */}
                    <Link to="/home">
                        <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="" />
                    </Link>
                    <div className="info">
                        <p>Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn</p>
                        <span>Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân</span><br/>
                        <Link to="">XEM CHI TIẾT</Link><i className="fa-solid fa-angle-right"></i>
                    </div>
                </div> 
            </div>
        </div>
        

    )

}
export default Box;