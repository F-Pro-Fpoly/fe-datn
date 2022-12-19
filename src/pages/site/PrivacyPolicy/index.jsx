import { Link } from "react-router-dom"
import "./PrivacyPolicy.scss";


function Policy() {
    return (
        <div className="Policy">
            <div className="policy-main">
                <div className="policy-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Chính sách bảo mật</h1>
                                <div className="policy-item">
                                    <span>Trang chủ</span> / <span>Chính sách bảo mật</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conten-policy">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h3 className="h3-policy"> GIỚI THIỆU</h3>
                        </div>

                        <ul className="padding-li">
                            <li>
                                <span>Chào mừng bạn đến với <strong>phần mềm Fprohopital - Đặt lịch khám bệnh</strong> được vận hành bởi công ty cổ phần ứng dụng.
                                    Chúng tôi nghiêm túc thực hiện trách nhiệm của mình liên quan đến bảo mật thông tin theo các quy định về bảo vệ bí mật thông tin cá
                                    nhân của pháp luật Việt Nam và cam kết tôn trọng quyền riêng tư và sự quan tâm của tất cả người dùng đối với Phần mềm (chúng tôi gọi
                                    các dịch vụ chúng tôi cung cấp trên Phần mềm là “Các Dịch Vụ”). Chúng tôi nhận biết tầm quan trọng của dữ liệu cá nhân mà bạn đã tin tưởng
                                    giao cho chúng tôi và tin rằng chúng tôi có trách nhiệm quản lý, bảo vệ và xử lý dữ liệu cá nhân của bạn một cách thích hợp. Chính Sách
                                    Bảo Mật này (“Chính Sách Bảo Mật” hay “Chính Sách”) được thiết kế - Để giúp bạn hiểu được cách thức chúng tôi thu thập, sử dụng, tiết lộ
                                    và/hoặc xử lý dữ liệu cá nhân mà bạn đã cung cấp cho chúng tôi và/hoặc lưu giữ về bạn, cho dù là hiện nay hoặc trong tương lai, cũng như - Để giúp bạn đưa ra quyết định đúng trước khi cung cấp cho chúng tôi bất kỳ dữ liệu cá nhân nào của bạn. Vui lòng đọc kỹ Chính Sách Bảo Mật này. Nếu bạn có bất kỳ thắc mắc nào về thông tin này hoặc các phương pháp bảo mật thông tin của chúng tôi, vui lòng liên hệ với chúng tôi qua tổng đài <strong>0794248804</strong> hoặc gửi email đến địa chỉ <strong> fprohopital@gmail.com</strong>
                                </span>
                            </li>
                            <li>
                                <span>
                                    “Dữ liệu cá nhân” có nghĩa là dữ liệu, dù đúng hay không về một cá nhân mà thông qua đó có thể được xác định được danh tính, hoặc từ dữ liệu đó và thông tin khác mà một tổ chức có hoặc có khả năng tiếp cận. Các ví dụ thường gặp về dữ liệu cá nhân có thể gồm có tên, số chứng minh nhân dân và thông tin liên hệ.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi, truy cập Phần mềm của chúng tôi, hoặc tiếp cận Các Dịch Vụ, bạn xác nhận và đồng ý rằng bạn chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính Sách Bảo Mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn như mô tả trong đây. NẾU BẠN KHÔNG ĐỒNG Ý CHO PHÉP XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH SÁCH NÀY, VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY TRUY CẬP PHẦN MỀM CỦA CHÚNG TÔI. Nếu chúng tôi thay đổi Chính Sách Bảo Mật của mình, chúng tôi sẽ đăng những thay đổi đó hoặc Chính Sách Bảo Mật sửa đổi trên Phần mềm. Chúng tôi có quyền sửa đổi bổ sung Chính Sách Bảo Mật này vào bất kỳ lúc nào.
                                </span>
                            </li>
                        </ul>
                        <div className="col-md-12 mb-4">
                            <h3 className="h3-policy">CHÚNG TÔI SỬ DỤNG THÔNG TIN BẠN CUNG CẤP CHO CHÚNG TÔI NHƯ THẾ NÀO?</h3>
                        </div>
                        <ul className="padding-li">
                            <li>
                                Chúng tôi có thể thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn vì một hoặc nhiều mục đích sau đây:
                            </li>
                            <li className="padding-lis">
                                - Để xem xét và/hoặc xử lý bảng đăng ký hay giao dịch của bạn với chúng tôi hoặc giao dịch hay thư từ của bạn với các bên thứ ba qua Các Dịch Vụ; <br />
                                - Để quản lý, điều hành, cung cấp, quản lý việc bạn sử dụng Các Dịch Vụ và/hoặc truy cập Phần mềm của chúng tôi, cũng như quan hệ và tài khoản người dùng của bạn với chúng tôi;<br />
                                - Để quản lý, điều hành, quản trị và cung cấp cho bạn cũng như tạo điều kiện cung cấp Các Dịch Vụ của chúng tôi, bao gồm, nhưng không giới hạn ở ghi nhớ ưu tiên của bạn;<br />
                                - Để điều chỉnh trải nghiệm của bạn thông qua các Dịch Vụ bằng cách hiển thị nội dung theo mối quan tâm và ưu tiên của bạn, cung cấp một phương thức nhanh hơn cho bạn truy cập thông tin tài khoản của bạn và gửi thông tin cho chúng tôi và cho phép chúng tôi liên hệ với bạn, nếu cần;<br />
                                - Để đáp ứng, xử lý, giải quyết hoặc hoàn tất một giao dịch và/hoặc đáp ứng các yêu cầu của bạn đối với các tiện ích và dịch vụ nhất định và thông báo cho bạn về các vấn đề dịch vụ và các hoạt động tài khoản bất thường;<br />
                                - Để thực thi các Điều Khoản Dịch Vụ và Quy Định Sử Dụng của chúng tôi hoặc bất kỳ thỏa thuận giấy phép người dùng cuối nào áp dụng;<br />
                                - Để bảo vệ sự an toàn cá nhân và các quyền, tài sản hoặc sự an toàn của người khác;<br />
                                - Để nhận dạng và/hoặc xác minh;<br />
                                - Để duy trì và quản lý bất kỳ bản cập nhật phần mềm nào và/hoặc các bản cập nhật khác và sự hỗ trợ có thể được yêu cầu tùy lúc nhằm đảm bảo các Dịch Vụ của chúng tôi hoạt động suôn sẻ;<br />
                                - Để giải quyết hoặc tạo điều kiện dịch vụ khách hàng, thực hiện các chỉ thị của bạn, giải quyết hoặc trả lời bất kỳ thắc mắc nào được gửi bởi (hoặc nhằm được gửi bởi) bạn hoặc thay mặt bạn;<br />
                                - Để liên hệ với bạn qua điện thoại, tin nhắn văn bản và/hoặc tin nhắn fax, email và/hoặc thư hoặc cách thức khác nhằm mục đích quản trị và/hoặc quản lý quan hệ của bạn với chúng tôi hoặc việc bạn sử dụng các Dịch Vụ của chúng tôi, chẳng hạn như nhưng không giới hạn ở việc truyền đạt thông tin hành chính cho bạn liên quan đến các Dịch Vụ của chúng tôi. Bạn xác nhận và đồng ý rằng sự liên lạc như thế của chúng tôi có thể là theo cách gửi thư qua đường bưu điện, tài liệu hoặc thông báo cho bạn, có thể gồm có tiết lộ dữ liệu cá nhân nhất định về bạn - Để cung cấp các tài liệu đó cũng như trên bao bì/phong bì;<br />
                                - Để thông báo cho bạn khi một người dùng khác đã sử dụng thông tin hoặc tài khoản của bạn - Để đăng ký sử dụng các Dịch Vụ trên Phần mềm của chúng tôi;
                                - Để tiến hành các hoạt động nghiên cứu, phân tích và phát triển (bao gồm nhưng không giới hạn ở phân tích dữ liệu, khảo sát, phát triển và/hoặc lập đặc tính tiện ích và dịch vụ), - Để phân tích cách thức bạn sử dụng các Dịch Vụ của chúng tôi, - Để cải thiện các Dịch Vụ hoặc tiện ích của chúng tôi và/hoặc - Để cải thiện trải nghiệm khách hàng của bạn;<br />
                                - Để cho phép quảng cáo và các đợt kiểm tra và khảo sát khác, ngoài những hoạt động khác, xác thực quy mô và thành phần của đối tượng người dùng, và hiểu được trải nghiệm của họ với các Dịch Vụ của Phần mềm;<br />
                                trường hợp bạn cho phép trước, vì mục đích tiếp thị, gửi cho bạn qua các phương thức liên lạc khác nhau chẳng hạn như đường bưu điện, email, các dịch vụ dựa trên địa điểm hoặc cách khác, thông tin và tài liệu tiếp thị và quảng bá liên quan đến các tiện ích và/hoặc dịch vụ (bao gồm, nhưng không giới hạn ở, các tiện ích và/hoặc dịch vụ của các bên thứ ba mà chúng tôi có thể hợp tác hoặc liên kết) có thể bán, tiếp thị hoặc quảng bá, cho dù các tiện ích hoặc dịch vụ đó tồn tại vào lúc này hoặc được tạo ra trong tương lai.<br />
                                - Để đáp ứng các thủ tục pháp lý hoặc - Để tuân thủ hoặc theo quy định của bất kỳ điều luật hiện hành nào, các yêu cầu của chính phủ hoặc cơ quan quản lý có thẩm quyền của bất kỳ khu vực nào.<br />
                                - Để lập số liệu thống kê và nghiên cứu đáp ứng yêu cầu báo cáo và/hoặc duy trì sổ sách nội bộ hoặc theo quy chế;<br />
                                - Để thực hiện quy trình tìm hiểu và xác minh hoặc các hoạt động sàng lọc khác (bao gồm, nhưng không giới hạn ở, kiểm tra lý lịch) tuân thủ các nghĩa vụ theo quy định pháp luật hoặc quản lý hoặc các thủ tục kiểm soát rủi ro của chúng tôi, có thể được pháp luật yêu cầu hoặc có thể đã được chúng tôi áp dụng;<br />
                                - Để kiểm tra các Dịch Vụ của chúng tôi hoặc hoạt động của Phần mềm;<br />
                                - Để ngăn chặn hoặc điều tra bất kỳ hoạt động gian lận, phi pháp, thiếu sót hay hành vi sai trái nào, cho dù có liên quan đến việc bạn sử dụng các Dịch Vụ của chúng tôi hay không hay bất kỳ vấn đề nào phát sinh từ quan hệ của bạn với chúng tôi, và cho dù có nghi ngờ về những hoạt động bên trên hay không;<br />
                                - Để lưu trữ, lập máy chủ, sao lưu (cho dù là vì mục đích khôi phục sau thảm họa hoặc mục đích khác) đối với dữ liệu cá nhân của bạn, cho dù là trong hay ngoài khu vực của bạn;<br />
                                - Để xử lý và/hoặc tạo thuận tiện cho một giao dịch tài sản kinh doanh hoặc một giao dịch tài sản kinh doanh tiềm năng, trường hợp giao dịch đó liên quan đến chúng tôi như một bên tham gia và/hoặc liên quan đến một đối tác hay công ty liên kết của chúng tôi như một bên tham gia. (“Giao dịch tài sản kinh doanh” là các giao dịch mua, bán, cho thuê, sáp nhập, hợp nhất hoặc bất kỳ hoạt động mua lại, thanh lý hay tài trợ nào của một tổ chức hoặc một phần của một tổ chức hoặc của bất kỳ hoạt động kinh doanh hay tài sản nào của một tổ chức);<br />
                                bất kỳ mục đích nào mà chúng tôi thông báo cho bạn tại thời điểm xin sự cho phép của bạn. (gọi chung là “các Mục Đích”).<br />
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default Policy;