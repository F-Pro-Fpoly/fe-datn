import { Link } from "react-router-dom"
import "./Introduce.scss"
import Container from 'react-bootstrap/Container';
import img from '../../../../image/img_15.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imga from "../../../../image/rsz_dt1.jpg"
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
                <h3>TRUNG TÂM Y TẾ FPRO - SỨC KHỎE CỦA BẠN LÀ XỨ MỆNH CUẨ CHÚNG TÔI</h3>
                <p>Vắc xin là một thành tựu y học vĩ đại của nhân loại. Mỗi năm, vắc xin cứu sống gần 3 triệu người trước những dịch bệnh nguy hiểm,
                 gần một nửa trẻ em trên toàn thế giới được bảo vệ bởi vắc xin khỏi bệnh tật, khuyết tật và tử vong. Tại Việt Nam, trong 25 năm qua, 
                 vắc xin đã bảo vệ hơn 6,7 triệu trẻ em và ngăn chặn hàng trăm ngàn ca tử vong do các bệnh truyền nhiễm chết người.</p>
                 <p>Trong bối cảnh dịch bệnh có nhiều biến đổi phức tạp, vấn đề tiêm chủng vắc xin còn gặp nhiều khó khăn về điều kiện
                 cơ sở vật chất, với mong muốn ngày càng nhiều trẻ em và người lớn được tiêm vắc xin phòng bệnh, giảm tối đa những tổn thất
                 về con người, tiền bạc và sức khỏe, tháng 10/2021, Trung Tâm Y Tế FPro được thành lập, trở thành hệ thống trung
                 tâm tiêm chủng tại Việt Nam, góp thêm sức mạnh cùng ngành y tế dự phòng trong việc cung cấp đầy đủ vắc xin 
                 phòng bệnh với chất lượng cao cấp và giá thành bình ổn.</p>
                
                <Link to="/ve-chung-toi" className="btn_type2">XEM THÊM</Link>
            </div>
            <div className="pright col-xl-5 col-md-5 col-12">
                <div className="ani">
                <div className="imageI figure2">
                    <img src={imga} alt="" />
                </div>
                </div>
            </div>
        </div>
        </div>
   
        
    )

}
export default Introduce;