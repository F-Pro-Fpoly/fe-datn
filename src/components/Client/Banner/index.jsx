import "./Banner.scss";
import banner from "../../../image/w1920-h960.jfif"
import banner1 from "../../../image/w1920-h961.jfif"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
function Banner () {

    return( 
        <Carousel>
            <Carousel.Item>
                <div className="banner">    
                    <div className="bongmo"></div>
                    <img src={banner} alt="banner" />
                    <div className="text">
                        <h2 className='text1'>NỀN TẢNG Y TẾ</h2>
                        <h2 className='text2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h2>           
                        <Link to={'/dang-ly-lich'}><button className="btn btn-primary">Đăng ký lịch ngay</button></Link>    
                    </div>            
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="banner">    
                    <div className="bongmo"></div>
                    <img src={banner1} alt="banner" />
                    <div className="text">
                        <h2 className='text1'>NỀN TẢNG Y TẾ</h2>
                        <h2 className='text2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h2>           
                        <Link to={'/dang-ly-lich'}><button className="btn btn-primary">Đăng ký lịch ngay</button></Link>     
                    </div>            
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
export default Banner;
