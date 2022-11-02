import { Link } from "react-router-dom"
import "./Introduce.scss"
import Container from 'react-bootstrap/Container';
import img from '../../../../image/img_15.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
function Introduce () {
    const [more, setMore] = useState(true);


    return ( 
        
        <div className="container">
        <div className="infoIntroduce">
            <span className="Introduce">GIỚI THIỆU </span><br />
            <span>VÈ PHÒNG KHÁM FPRO</span><br />
            <div className="line"></div>
        </div>
        <div className="flex-Introduce col-12">
            <div className={`pleft col-xl-6 col-md-6 col-12 ${more?"more":''}`} onClick={()=>setMore(false)}>
                <h3>NHA KHOA THÀNH AN - THỰC TÂM VÌ VẺ ĐẸP BỀN VỮNG</h3>
                <p>Thành công của một nha khoa được đo bằng nụ cười của mỗi khách hàng, để giúp một hàm răng có diện mạo đẹp không khó, cái khó là làm sao để người sở hữu hàm răng đó khi bước ra khỏi phòng khám sẽ mang một nụ cười rạng rỡ xuất phát từ bên trong.</p>
                <p>Để làm được điều đó, ở Nha khoa Thành An luôn đặt tiêu chí chất lượng dịch vụ lên hàng đầu, tập trung đầu tư vào công nghệ, đội ngũ bác sĩ không ngừng nâng cao tay nghề, phải tâm niệm mỗi bệnh nhân đều là một đối tượng “ưu tiên đặc biệt” để chăm sóc và đãi ngộ.</p>
                <p>Với bất kỳ ai sử dụng dịch vụ chỉnh nha mục tiêu là nụ cười đẹp thôi chưa đủ, còn phải an toàn và khỏe mạnh bền lâu mới là nguyện vọng của tất cả mọi người. Thành An tin rằng, chỉ có đáp ứng đúng-đủ-đồng điệu với nhu cầu của khách hàng bằng chất lượng dịch vụ tốt nhất, mới đảm bảo có được sự hài lòng tuyệt đối và lòng tin bền vững theo thời gian.</p>

                <Link href="" className="btn_type2">XEM THÊM</Link>
            </div>
            <div className="pright col-xl-5 col-md-5 col-12">
                <div className="ani">
                <div className="imageI figure2">
                    <img src="https://nhakhoathanhan.vn/uploads/img/img_24.jpg" alt="" />
                </div>
                </div>
            </div>
        </div>
        </div>
   
        
    )

}
export default Introduce;