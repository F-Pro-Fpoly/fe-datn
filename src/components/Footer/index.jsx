import "./Footer.scss"
import fb from "../../image/facebook-square.svg"
import yb from "../../image/youtube-square.svg"
function Footer () {

    return (
        <>
            <div className="footer1">
                đây là footer
            </div>
            <div className="footer2">
                <div className="coppyright">
                    2022 BookingCare.
                </div>
                <div className="social">
                    <img src={fb} alt="fb" />
                </div>
                <div className="social">
                    <img src={yb} alt="yb" />
                </div>
            </div>
        </>

    )

}

export default Footer;