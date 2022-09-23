import { Link } from "react-router-dom"
import "./Box.scss"
function Box ({boxArr = []}) {

    return ( 
        <>
        {boxArr.map((item,index) => (
            <div className="col">
                <div className="tag">
                    <span>{item.tag}</span>
                </div>
                <Link to="/home">
                    <img src={item.image} alt={item.title} />
                </Link>
                <div className="info">
                    <p>{item.title}</p>
                    <span>{item.content}</span><br/>
                    <Link to="">XEM CHI TIẾT</Link><i className="fa-solid fa-angle-right"></i>
                </div>
            </div> 
        ))}
        </>
        

    )

}
export default Box;