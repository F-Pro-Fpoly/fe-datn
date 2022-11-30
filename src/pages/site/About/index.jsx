import "./About.scss";
// import useWindowSize  from "../../../services/ResponsiveAbout"
import {  useEffect, useRef,useState} from 'react';
import { ListConfigService } from '../../../services/normal/ConfigService';
function About(){
    document.title = "Về chúng tôi";
    const [getconfig, setConfig] = useState([])
    const start = async () => {
  
        let respon = await ListConfigService()
        let dataa = respon.data;
        let dataArrr = dataa.data;
        setConfig(dataArrr)
   }
   useEffect(() => {
    start()
  
  }, []);
    return(
        <div>
   
        <div className="about-box-main formBooking">
         
               
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Về chúng tôi</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br className="top-0"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-frame"> <img className="img-fluid" src="../img/lienhe_06.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="noo-sh-title-top">Giới thiệu <span>{getconfig.NameCompany ? getconfig.NameCompany.description : ""}</span></h2>
                        <br />
                        <p className="tp"><b>{getconfig.NameCompany ? getconfig.NameCompany.description : ""} </b> xin gửi đến Quý khách lời chúc sức khỏe, an lành và hạnh phúc.</p>
                        <p>Chúng tôi hiểu rằng, sức khỏe là vốn quý nhất của con người. Nhưng hiện nay, khi chất lượng cuộc sống ngày một nâng cao, thì bệnh tật lại ngày càng trẻ hóa và trở nên rất đa dạng, vì vậy nhu cầu khám, chữa bệnh đang gia tăng rất nhanh.</p>
                        <p>Nhằm đáp ứng nhu cầu khám chữa bệnh cho người dân thành phố,<b>{getconfig.NameCompany ? getconfig.NameCompany.description : ""} </b> đã tạo ra trang web này để mang lại những dịch vụ chăm sóc sức khỏe tốt nhất và nhanh chóng nhất đến với Quý khách hàng.</p>
                        <p>Với phương châm hoạt động <b> “Luôn đáp ứng nhu cầu khám chữa bệnh chất lượng cao và tiết kiệm thời gian, chi phí tối thiểu cho khách hàng”</b>, chúng tôi đã nhận được sự tin tưởng và những phản hồi rất tốt từ khách hàng. Đến nay, tổng số bệnh nhân đăng ký khám chữa bệnh ban đầu tại {getconfig.NameCompany ? getconfig.NameCompany.description : ""} đã lên đến hơn <b> 137.000 người</b>.</p>
                        <p> <b>{getconfig.NameCompany ? getconfig.NameCompany.description : ""} </b>  vinh dự được đón tiếp Quý khách.</p>
                        <p><b>Trân trọng,</b></p>
                        {/* <a className="btn btn-info" href="#">Read More</a> */}
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-block-inner">
                            <h3>PHƯƠNG CHÂM HOẠT ĐỘNG</h3>
                            <p><b>Luôn đáp ứng nhu cầu khám chữa bệnh chất lượng cao và tiết kiệm chi phí tối đa cho khách hàng.</b></p>
                            <p>Song song với đầu tư trang thiết bị kỷ thuật cao thì phòng khám cũng nâng cao y đức, thái độ phục vụ người dân với phương châm “LƯƠNG Y NHƯ TỪ MẪU”, vì thế số lượng đăng ký tham gia khám chữa bệnh ban đầu tại {getconfig.NameCompany ? getconfig.NameCompany.description : ""} hiện nay là 137.000/người( một trăm ba mươi bảy ngàn người). </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-block-inner">
                            <h3>ĐỘI NGŨ Y BÁC SĨ CÓ CHUYÊN MÔN CAO</h3>
                            <p>– Không giống như các  phòng khám khác, {getconfig.NameCompany ? getconfig.NameCompany.description : ""} hội tụ một đội ngũ bác sĩ ưu tú trong và ngoài nước, trên 20 năm kinh nghiệm, có bằng cấp được Bộ Y tế công nhận, nên mọi người có thể an tâm thăm khám. </p>
                            <p>– Tất cả các bác sĩ tại đây đều đã có thâm niên công tác lâu năm tại nhiều bệnh viện lớn trong cả nước trước khi về làm việc tại {getconfig.address ? getconfig.address.description : ""}. Chính vì thế bệnh nhân có thể an tâm về chất lượng hỗ trợ khám chữa bệnh của chúng tôi không hề thua kém các đơn vị y tế công lập khác </p>
                            <p>Mỗi bác sĩ sẽ có thế mạnh chuyên về một bệnh lý riêng, do đó, bạn có thể an tâm được thăm khám, hỗ trợ điều trị hiệu quả, an toàn tại đây.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-block-inner">
                            <h3>ÁP DỤNG NHIỀU PHƯƠNG PHÁP HỖ TRỢ ĐIỀU TRỊ BỆNH TIÊN TIẾN</h3>
                            <p>–  {getconfig.NameCompany ? getconfig.NameCompany.description : ""} có tốt không? là câu hỏi của rất nhiều người. Trong số tất cả các Phòng khám tư hiện nay tại  {getconfig.address ? getconfig.address.description : ""}, {getconfig.NameCompany ? getconfig.NameCompany.description : ""} có ưu thế hơn hẳn nhờ việc áp dụng rất nhiều kỹ thuật tiên tiến hiện nay để hỗ trợ điều trị các bệnh lý về sức khỏe sinh sản, thẩm mỹ bộ phận sinh dục, điển hình như: </p>
                            <p><b className="b"><i className="fa fa-hand-o-right i"></i>  Kỹ thuật xâm lấn tối thiểu 3D của Hàn Quốc </b> </p>
                            <p><b className="b"><i className="fa fa-hand-o-right i"></i>  Liệu trình kháng sinh đồ nhập ngoại </b> </p>
                            <p><b className="b"><i className="fa fa-hand-o-right i"></i>  Tiểu phẫu công nghệ Vi phẫu thuật của Đức </b></p>
                            <p><b className="b"><i className="fa fa-hand-o-right i"></i>  Kỹ thuật DHA trong hỗ trợ điều trị bệnh hạn chế tối đa nguy cơ tái phát.</b>  </p>
                            <p><b className="b"><i className="fa fa-hand-o-right i"></i>  Kỹ thuật Oxygen, phương pháp Dao Leep, liệu pháp Ozone công nghệ Ý,… đối với các bệnh viêm nhiễm.</b>  </p>
                        </div>
                    </div>
                </div>

            </div>
           

    </div>   
          </div>
    );
};
export default About;