import "./Footer.scss"
import fb from "../../../image/facebook-square.svg"
import yb from "../../../image/youtube-square.svg"
import logo from "../../../image/logo192.png"
function Footer () {

    return (
        <>
            <div className="footer1">
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <div className="cot1">
                                <div className="logo">
                                    <img src={logo} alt="logo" width="100" height="100" />
                                </div>
                                <div className="address">
                                    <div className="row1">
                                        <h3>Công ty Cổ phần Công nghệ BookingCare</h3>
                                    </div>
                                    <div className="row2">
                                        <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                                    </div>
                                    <div className="row3">
                                        <p>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
                                    </div>              
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="flashlink">
                            <div className="row1">
                                    <a href="">Liên hệ đối tác</a>
                            </div>
                            <div className="row2">
                                    <a href="">Gói chuyển đổi số doanh nghiệp</a>
                            </div>
                            <div className="row3">
                                    <a href="">Tuyển dụng</a>
                            </div>
                            <div className="row4">
                                    <a href="">Câu hỏi thường gặp</a>
                            </div>
                            <div className="row5">
                                    <a href="">Điều khoản sử dụng</a>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="headquarters">
                                <div className="row1">
                                    <h3>Trụ sở tại Hà Nội</h3>
                                    <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                                </div>
                                <div className="row2">
                                    <h3>Văn phòng tại TP Hồ Chí Minh</h3>
                                    <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                                </div>
                                <div className="row3">
                                    <h3>Hỗ trợ khách hàng</h3>
                                    <p>support@bookingcare.vn (7h - 18h)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="footer2">
                <div className="container">
                    <div className="coppyright">
                        2022 BookingCare.
                    </div>
                    <div className="social">
                        <img src={fb} alt="fb" width={32} height={32} />
                        <img src={yb} alt="yb" width={32} height={32} />
                    </div>
                </div>
            </div>
        </>

    )

}

export default Footer;