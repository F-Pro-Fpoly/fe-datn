import "./Contact.scss";
function Contact(){
    return(
            <main role="main">
                <div className="container mt-2">
                    <img src="./img/banner-lienhe001.jpg" alt="đa khoa cần thơ" />
                    <h1 className="text-center">Liên hệ với chúng tôi</h1>
                    <div className="row">
                        <div className="col col-md-6">
                            <img src="https://khothietke.net/wp-content/uploads/2021/03/PNG00194-bac-sy-gia-dinh-png.png" />
                        </div>
                        <div className="col col-md-6 ">
                        <form className="cf form fe">
                            <div className="half left cf">
                                <input type="text" className="input" id="input-name" placeholder="Họ tên" />
                                <input type="email" className="input" id="input-email" placeholder="Email" />
                                <input type="text" className="input" id="input-subject" placeholder="Chủ đề" />
                            </div>
                            <div className="half right cf">
                                <textarea name="message" type="text" className="textarea" id="input-message" placeholder="Nội dung gửi đi"></textarea>
                            </div>  
                            <input type="submit" className="input" value="Gửi" id="input-submit" />
                            </form>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col col-md-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15731.951090496856!2d105.568023!3d9.682084!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1666955030821!5m2!1svi!2s"
                         width="1300" height="400" className="iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </main>
    );
};
export default Contact;