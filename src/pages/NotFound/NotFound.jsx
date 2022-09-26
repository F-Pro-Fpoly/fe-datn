import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"
function NotFound() {
    useEffect(()=>{
        document.title = "Not found";
    }, []);
    return ( 
        <section className="page_404">
            {/* <div className="container"> */}
                <div className=""> 
                    <div className="col-sm-12 ">
                        <div className="col-sm-12 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>                  
                            </div>
                            
                            <div className="contant_box_404">
                            <h3 className="h2"> Có vẻ như bạn đang bị lạc </h3>
                            
                            <p>Trang bạn tìm kiếm không tồn tại!</p>
                            <Link to="/"  className="link_404">Về trang chủ</Link>          
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
      </section>
     );
}

export default NotFound;