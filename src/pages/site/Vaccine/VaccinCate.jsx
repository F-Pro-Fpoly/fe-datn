
import { Link } from "react-router-dom";
import { getListCateAPI,getListVaccineCateAPI} from "../../../services/normal/VaccineService";
import Loading from "../../../components/Loading/Loading";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { useParams,useSearchParams} from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import { useRef } from "react";
function VaccineCate () {
    const token = useSelector(state => state.auth.token);
    const [category,getCate] = useState([]);
    const [searchParam] = useSearchParams()
    const [search,setSearch]  = useState();
    const firstRef = useRef(false);
    const searchDebounce = useDebounce(search, 500);
    const [ListCate, getVaccinCate] = useState([]);
    const param = useParams();
    const [loading, getLoading] = useState(false);
    const id =param.id;
    const start = async () => {
        getLoading(true);
        getVaccinCate([]);
        let res = await getListCateAPI(id,{...search});
        let data = res.data;
        let dataArr = data.data;
        let restw = await getListVaccineCateAPI();
        let dataCa = restw.data;
        let datatw = dataCa.data;
        getCate(datatw);
        getLoading(false);
        getVaccinCate(dataArr);
    }
    useEffect(() => {
    
        document.title = "Đặt lịch tiêm vaccine"
        start()
    
    }, [searchDebounce, searchParam])


    const searchVaccine  = (e) => {
        setSearch({...search, name: e.target.value});
      } 
          return (
            <div className="vaccine">
            <section className="vaccine-title">
                <div className="container">
                    <div className="d-flex justify-content-between vaccine-title-row">
                        <div className="d-flex vaccine-title-left">
                            <div className="vaccine-title-item">
                                <div className="vaccine-title-category">
                                    <button type="button">
                                        <i className="fa-solid fa-bars"></i>
                                        <span>DANH MỤC</span>
                                    </button>
                                   
                                    <ul className="vaccine-title-list" >
                                    {category.map((item,index)=>{
                                    return(
                                        <li className="vaccine-title-li"key={index}>
                                            <Link  to={`/danh-muc-vaccine/${item.id}`}>{item.name}</Link>
                                        </li>
                                        )                  
                                    })
                                    }
                                    </ul>
                              
                                </div>
                            </div>
                            <div className="vaccine-title-item">
                                <span className="vaccine-title-h3">
                                    THÔNG TIN SẢN PHẨM VẮC XIN
                                </span>
                            </div>
                        </div>
                        <div className="d-flex vaccine-title-right">
                            <div className="vaccine-title-item" >
                                <form className="vaccine-title-search">
                                    <input type="text" className="" 
                                    onChange={(e) => searchVaccine(e)}
                                    placeholder="Tìm kiếm tên vaccine" />
                                    <button type="button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vaccine-content">
                <div className="container">
                    <div className="row vaccine-row">
                        {ListCate.map((item,index) => {
                            return(
                                <div className="col-xl-3 col-md-6 col-12" key={index}>
                                <div className="vaccine-content-item">
                                    <div className="vaccine-content-header">
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>Nguồn gốc: {item.national_name}.</p>
                                            <p>                                           
                                            {      
                                               item.sick.map((i,v) => {
                                                    return (
                                                        <span key={v}>{i.name} &nbsp;</span> 
                                                    )                                               
                                                })
                                            }
                                          
                                            </p>
    
                                            <div className="vaccine-content-price">
                                                <span>{item.price_formated}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vaccine-content-body">
                                        <span >Phòng bệnh:
                                            <p className="mb-2">
                                            {      
                                                item.sick.map((i,v) => {
                                                    return (
                                                        <span key={v}>{i.name} &nbsp;</span> 
                                                    )                                               
                                                })
                                            }
                                            </p>
                                        </span>
                                        <Link to={`/vaccine/${item.slug}/${item.id}`} className="vaccine-btn" style={{marginTop:"15%"}}>
                                            Xem chi tiết
                                        </Link>
                                    </div>
                                </div>
                            </div>   
                            )
                        })}
                                        
                    </div>
                </div>
            </section>
            </div>
        );
    
}

export default VaccineCate;