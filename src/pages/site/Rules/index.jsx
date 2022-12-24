
import "./Rules.scss";
import { Link } from "react-router-dom"



function Rules() {

    document.title = "Điều khoản sử dụng"

    return (
        <div className="Rules">
            <div className="Rules-main">
                <div className="Rules-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>ĐIỀU KHOẢN SỬ DỤNG</h1>
                                <div className="Rules-item">
                                    <ol className="breadcrumb Rules-ol">
                                        <li className="breadcrumb-item">
                                            <Link to="/"><span>Trang chủ</span></Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <span>Điều khoản sử dụng</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conten-Rules">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h4 className="h3-Rules">SỬ DỤNG TRUNG TÂM Y TẾ FPRO</h4>
                        </div>
                        <ul className="padding-li">
                            <h6>Thông tin người cung cấp dịch vụ “Khám chữa bệnh”</h6>
                            <li>Hệ thống Trung tâm y tế FPRO đăng tải thông tin và lịch khám của bác sỹ, dịch vụ y tế và cơ sở y tế. Các thông tin về bác sĩ, dịch vụ y tế, cơ sở y tế (gọi chung là “Người cung cấp dịch vụ Khám chữa bệnh”) được cung cấp bởi chính “Người cung cấp dịch vụ Khám chữa bệnh” và các nguồn thông tin tin cậy khác do chúng tôi lựa chọn biên tập.<br />
                                Chúng tôi cố gắng tìm hiểu và lựa chọn thông tin chính xác để đăng tải trên hệ thống. Tuy nhiên, chúng tôi không đủ điều kiện xác minh sự chính xác tuyệt đối của thông tin đã đăng tải.</li>
                            <h6>Dịch vụ đặt lịch khám trực tuyến</h6>
                            <li>Trung tâm y tế FPRO cung cấp nền tảng công nghệ, phương tiện để kết nối bệnh nhân và bác sĩ, cơ sở y tế. Qua đó cung cấp dịch vụ đặt lịch khám trực tuyến.<br />

                                Bệnh nhân lựa chọn bác sĩ, dịch vụ hoặc cơ sở y tế phù hợp trên hệ thống Trung tâm y tế FPRO để đặt lịch khám. Trung tâm y tế FPRO không phải là người cung cấp dịch vụ y tế và cũng không đại diện cho bất kỳ “Người cung cấp dịch vụ khám chữa bệnh” nào. Vai trò duy nhất của chúng tôi là tạo ra các công cụ, phương tiện để cung cấp “<b>dịch vụ đặt lịch khám trực tuyến</b>”.<br />

                                Nhằm hỗ trợ việc đặt lịch khám hiệu quả cao, chúng tôi có thể kết nối thêm với người có nhu cầu đặt lịch thông qua Website, email.</li>
                            <h6>Sai lệch thời gian & hủy lịch khám</h6>
                            <li>Lịch hẹn khám qua hệ thống Trung tâm y tế FPRO và thời gian khám thực tế có thể sai khác so với lịch hẹn ban đầu do đặc thù của hoạt động khám chữa bệnh. Chúng tôi cố gắng để giảm thiểu sự sai lệch về thời gian và giảm thiểu thời gian chờ đợi của người bệnh.<br />

                                Lịch hẹn khám có thể bị hủy hoặc thay đổi đột xuất vì một lý do nào đó, ví dụ như bác sĩ có công việc đột xuất. Việc này vẫn thỉnh thoảng xảy ra, nhất là với các bác sĩ, chuyên gia giỏi rất bận rộn. Chúng tôi sẽ thông báo sự thay đổi đó trong thời gian sớm nhất bằng một hoặc đồng thời các ứng dụng tin nhắn SMS, Push, email, dịch vụ OTT và cuộc gọi thoại.<br />

                                Tuy nhiên, vì một lý do nào đó, chẳng hạn như lỗi đường truyền hoặc sai lệch thông tin, bạn có thể không nhận được thông báo kịp thời. Trong trường hợp này, Trung tâm y tế FPRO mong nhận được thông tin từ người bệnh để chúng tôi có thể sắp xếp lịch khám bổ sung phù hợp với yêu cầu của bạn.</li>
                            <h6>Trường hợp bệnh nhân Cấp cứu</h6>
                            <li>Trung tâm y tế FPRO <b>không</b> phù hợp trong các trường hợp bệnh nhân cấp cứu. Nếu gặp trường hợp khẩn cấp chúng tôi khuyên bạn (hoặc người thân) không nên sử dụng dịch vụ đặt lịch khám Trung tâm y tế FPRO.<br />
                                Bạn nên gọi số cấp cứu y tế <b>115</b> hoặc đến cơ sở y tế gần nhất để được thăm khám.</li>
                            <h6>Giới hạn trách nhiệm pháp lý</h6>
                            <li>Chúng tôi chịu trách nhiệm pháp lý về những gì không thể bị loại trừ theo quy định của pháp luật Việt Nam.<br />
                                Những phát sinh (nếu có) liên quan tới việc sử dụng dịch vụ đặt lịch khám Trung tâm y tế FPRO sẽ được hỗ trợ như mục “<b>vai trò của Trung tâm y tế FPRO</b>”</li>
                            <h6>Thông báo</h6>
                            <li>Chúng tôi sẽ gửi cho bạn thông báo qua Website email, gọi điện thoại để thông báo cho bạn về vấn đề mà bạn có thể quan tâm. Bạn có thể bỏ đăng ký bằng cách liên hệ với chúng tôi hoặc bằng cách sử dụng lựa chọn hủy bỏ đăng ký trong các bản cập nhật email, hoặc từ chối thông tin mà chúng tôi gửi cho bạn.</li>
                            <h6>Khiếu nại</h6>
                            <li>Nhằm không ngừng nâng cao chất lượng dịch vụ và trải nghiệm tốt hơn cho người dùng, chúng tôi mong nhận được những ý kiến phản hồi hoặc khiếu nại về chất lượng dịch vụ. <br /><br />Xin vui lòng liên hệ.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default Rules;