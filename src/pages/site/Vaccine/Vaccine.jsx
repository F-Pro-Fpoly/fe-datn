import { Button, Link as LinkMui } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Vaccine.scss"
import VaccineContent from "./VaccineContent";
import { getListServiceAPI,getListVaccineCateAPI} from "../../../services/normal/VaccineService";
import Loading from "../../../components/Loading/Loading";
import  {  useState } from "react";
import {useSelector} from "react-redux";
import { useParams,useSearchParams  } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import { useRef } from "react";
function Vaccine() {
    const token = useSelector(state => state.auth.token);
    const [list, setList] = useState([]);
    const [loading, getLoading] = useState(false);
    const [category,getCate] = useState([]);
    const param = useParams();
    const [searchParam] = useSearchParams()
    const [search,setSearch]  = useState({
        limit: 12,
    });
    const firstRef = useRef(false);
    const searchDebounce = useDebounce(search, 500);
    const [panigateVaccine, setPanigateVaccine] = useState();

    const start = async (page) => {
        getLoading(true);
        setList([]);
        let restw = await getListVaccineCateAPI({token});
        let dataCa = restw.data;
        let datatw = dataCa.data;
        getCate(datatw);
        let res = await getListServiceAPI( 1,{...search, page: page ?? 1});
        let data = res.data;
        let dataArr = data.data;
        getLoading(false)
        setList(dataArr);
        setPanigateVaccine(data.meta.pagination);
    }


    useEffect(() => {
        let page = searchParam.get('page')
        document.title = "Đặt lịch tiêm vaccine"
        start(page)
    
    }, [searchDebounce])

    // useEffect(() => {
    //     let page = searchParam.get('page');
    //     if(firstRef){
    //         start(page);
    //     }
    //     firstRef = true;
    // }, [searchParam])


  const searchVaccine  = (e) => {
    setSearch({...search, name: e.target.value});
  } 

  const handleOnChangePageContent = async (page) => {
    await start(page);
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

            <VaccineContent  
                paginate={panigateVaccine}
                list={list}
                onchangePage={handleOnChangePageContent}
            />
        </div>
     );
}

export default Vaccine;