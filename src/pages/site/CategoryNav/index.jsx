import { Link } from "react-router-dom"
import "./CategoryNav.scss"

function CategoryNav () {

    return (
        <>
        <div className="container">
            <div className="navCate">       
               <h3>
                <Link to={'/'} > <i className="fa-solid fa-arrow-left-long">  </i></Link>
                  &nbsp;Chuyên khoa
               </h3>
           </div>
           <div className="ListChuyenKhoa">
               <div className="rowCate">
                   <Link to={'co-xuong-khop'}> <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="Cơ xương khớp" /></Link>
                    <p>Cơ xương khớp</p>
               </div>
               <div className="rowCate">
                   <Link to={'co-xuong-khop'}> <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="Cơ xương khớp" /></Link>
                    <p>Cơ xương khớp</p>
               </div>
               <div className="rowCate">
                    <Link to={'co-xuong-khop'}>
                        <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="Cơ xương khớp" />
                    </Link>
                   <p>Cơ xương khớp</p>
               </div>
               
           </div>
           
        </div>


        </>
    )

}
export default CategoryNav