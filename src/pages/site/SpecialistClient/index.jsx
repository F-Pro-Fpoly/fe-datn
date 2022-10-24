import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux";

import "./SpecialistClient.scss"
import { getListServiceAPI } from "../../../services/normal/SpecialistService";
import Loading from "../../../components/Loading/Loading";

function SpecialistClient () {

    // const token = useSelector(state => state.auth.token); 
    const [ListSpecialist, getSpecialistClient] = useState([]);
    const [loading, getLoading] = useState(false);

    useEffect(() => {
        
        const start = async () => {
            getLoading(true)
            getSpecialistClient([])
            let res = await getListServiceAPI()
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
                <Link to={'/'} > <i className="fa-solid fa-arrow-left-long"> </i></Link>
                  &nbsp;Chuyên khoa
               </h3>
           </div>
           <div className="ListChuyenKhoa">
            {console.table(ListSpecialist)}
            {
                ListSpecialist.forEach((item,index) => {
                    <div>
                      <h1>{item.id}</h1>
                      {/* <div className="rowCate" key={index}>
                      <Link to={item.slug}>
                           <img src={item.thumbnail_name} alt="Cơ xương khớp" />
                      </Link>
                       <p>{item.name}</p> */}
                  {/* </div>    */}
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