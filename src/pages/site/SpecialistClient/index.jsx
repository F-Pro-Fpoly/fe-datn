import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux";

import "./SpecialistClient.scss"
import { getListServiceAPI } from "../../../services/normal/SpecialistService";
import Loading from "../../../components/Loading/Loading";
import { setNavb } from "../../../redux/slices/InterfaceSile";
import {useDispatch} from "react-redux"

function SpecialistClient () {

    // const token = useSelector(state => state.auth.token); 
    const [ListSpecialist, getSpecialistClient] = useState([]);
    const [loading, getLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setNavb(true))
        const start = async () => {
            getLoading(true)
            getSpecialistClient([])
            let res = await getListServiceAPI({status: 1})
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
            {
                ListSpecialist.map((item,index) => {
                   return(
                 
                      <div className="rowCate" key={item.id}>
                        <div className="image">
                          <Link to={item.slug}>
                              <img src={item.thumbnail_name} alt="Cơ xương khớp" />
                          </Link>
                        </div>
                         <div className="info">
                            <p>{item.name}</p>
                            <span>{item.description}</span>
                         </div>
                      </div>   
                   )
                    
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