import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

import "./SpecialistClient.scss"
import { getListServiceAPI } from "../../../services/SpecialistService";
import Loading from "../../../components/Loading/Loading";

function SpecialistClient () {

    const token = useSelector(state => state.auth.token); 
    const [Specialist, getSpecialistClient] = useState([]);
    const [loading, getLoading] = useState(false);

    useEffect(() => {
        
        const start = async () => {
            getLoading(true)
            getSpecialistClient([])
            let res = await getListServiceAPI(token)
            let data = res.data
            let dataArr = data.data
            getLoading(false)
            getSpecialistClient(dataArr)
        }

        start()
    
    }, [])
    


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
                {
                    Specialist.map((item,index) => {
                        <div className="rowCate">
                        <Link to={'co-xuong-khop'}>
                             <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="Cơ xương khớp" />
                        </Link>
                         <p>{item.name}</p>
                    </div>      
                    })
                }
               
           </div>
           
        </div>

        {
          loading && <Loading />
        }
        </>
    )

}
export default SpecialistClient