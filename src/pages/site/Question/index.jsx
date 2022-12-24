
import "./Question.scss";
import { Link } from "react-router-dom"



function Question() {

    document.title = "Câu hỏi thường gặp"

    return (
        <div className="Question">
            <div className="question-main">
                <div className="question-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>CÂU HỎI THƯỜNG GẶP</h1>
                                <div className="question-item">
                                    <ol className="breadcrumb question-ol">
                                        <li className="breadcrumb-item">
                                            <Link to="/"><span>Trang chủ</span></Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <span>Câu hỏi thường gặp</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conten-question">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h4 className="h3-question">TRUNG TÂM Y TẾ FPRO</h4>
                        </div>
                        <ul className="padding-li">
                            <h6>Trung tâm y tế FPRO nỗ lực vì điều gì?</h6>
                            <li>Trung tâm y tế FPRO nỗ lực xây dựng Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam vươn tầm khu vực Asean, giúp bệnh nhân lựa chọn dịch vụ y tế phù hợp nhằm nâng cao hiệu quả chữa bệnh, tiết kiệm thời gian và chi phí. </li>
                            <h6>Trung tâm y tế FPRO có phải là một bệnh viện, hay phòng khám không?</h6>
                            <li>Không.<br /> Trung tâm y tế FPRO là Nền tảng Y tế Chăm sóc sức khỏe toàn diện kết nối người dùng đến với dịch vụ y tế - chăm sóc sức khỏe chất lượng, hiệu quả và tin cậy.
                                Trung tâm y tế FPRO kết nối mạng lưới bác sĩ giỏi ở nhiều bệnh viện, phòng khám khác nhau. Có thể hình dung, Trung tâm y tế FPRO hoạt động theo mô hình tương tự như Taxi Uber hay Grab trong lĩnh vực Y tế - Chăm sóc sức khỏe.</li>
                            <h6>Mối quan hệ của Trung tâm y tế FPRO với các bệnh viện, phòng khám là gì?</h6>
                            <li>Đối tác hợp tác.<br />
                                Trung tâm y tế FPRO hợp tác với các bệnh viện/phòng khám, cung cấp các thông tin về khám chữa bệnh tại bệnh viện/phòng khám cho người bệnh để người bệnh có thể dễ dàng lựa chọn bác sĩ phù hợp và đặt lịch nhanh chóng.</li>
                            <h6>Mối quan hệ của Trung tâm y tế FPRO với các bệnh viện, phòng khám là gì?</h6>
                            <li>
                                Bệnh không có tính chất cấp cứu<br />
                                Bệnh mãn tính cần khám bác sĩ chuyên khoa<br />
                                Người bệnh biết rõ về tình trạng bệnh của mình<br />
                                Mong muốn chủ động đặt lịch đi khám có kế hoạch</li>
                            <h6>Trung tâm y tế FPRO là gì?</h6>
                            <li>Trung tâm y tế FPRO là Nền tảng Y tế Chăm sóc sức khỏe toàn diện kết nối người dùng đến với dịch vụ y tế - chăm sóc sức khỏe chất lượng, hiệu quả, tin cậy với trên 100 bệnh viện, phòng khám uy tín, hơn 600 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ y tế chất lượng.<br />
                                Trung tâm y tế FPRO kết nối mạng lưới bác sĩ và cơ sở y tế chuyên khoa. Bệnh nhân dễ dàng lựa chọn đúng dịch vụ y tế với thông tin đã xác thực và đặt lịch nhanh chóng.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default Question;