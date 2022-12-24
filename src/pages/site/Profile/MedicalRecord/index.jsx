import "./MedicalRecord.scss"
import logo from "../../../../image/logo.png"
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetailListPatientServiceAPI, getUser } from "../../../../services/UserService";
import Loading from "../../../../components/Loading/Loading";
import "./MedicalRecord.scss"
import CollapsibleTable from "./Collape";
import {setLoading as setLoadingG} from "../../../../redux/slices/InterfaceSile"
import Paginate from "../../../../components/Paginate/Paginate";

function MedicalRecord() {

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [infoUser, setInfoUser] = useState({});
    const param = useParams();
    const id = param.id
    const [search,setSearch] = useState({
      "is_vaccine" : 0,
    });
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);


    const start = async () => {
        dispatch(setLoadingG(true))
        let res = await getDetailListPatientServiceAPI(token, id, {
            "is_vaccine" : 0
        }, page);
        let data = res.data
        let dataArr = data.data;

        let infoUser = await getUser({token,id,page});
        let dataUser = infoUser.data.data
        setInfoUser(dataUser)
        dispatch(setLoadingG(false))
        setList(dataArr)
        
        // handle paginate
        let pagination = data.meta.pagination ?? null;
        setPaginate(pagination);
    }

    useEffect(() => {
        start()
    }, [page]);

    const onChangePage = (number) =>{
        setPage(number);
      }
  

    const handleHistoryBtn = async () => {
        try {
            dispatch(setLoadingG(true))
            let res = await getDetailListPatientServiceAPI(token, id, {
                "is_vaccine" : 0
            },page);
            let data = res.data
            let dataArr = data.data;

            let infoUser = await getUser({token,id});
            let dataUser = infoUser.data.data
            setInfoUser(dataUser)
            dispatch(setLoadingG(false))
            setList(dataArr)
            setSearch({
                "is_vaccine" : 0,
            })
        } catch (error) {
            
        }
    }

    const handleVaccineBtn = async () => {
        try {
            dispatch(setLoadingG(true))
            let res = await getDetailListPatientServiceAPI(token, id, {
                "is_vaccine" : 1
            });
            let data = res.data
            let dataArr = data.data;

            let infoUser = await getUser({token,id});
            let dataUser = infoUser.data.data
            setInfoUser(dataUser)
            dispatch(setLoadingG(false))
            setList(dataArr)
            setSearch({
                "is_vaccine" : 1,
            })
        } catch (error) {
            
        }
    }
    
   
    return ( 
        <div className="vstack gap-4">
            <div className="card border">
            
            <div className="card-header border-bottom">
                <h4 className="card-header-title">HỒ SƠ BỆNH ÁN</h4>
            </div>
            
             
            <div className="card-body">

                <div className="header-box">
                    <h3>Thông tin cá nhân</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="image">
                                <img
                                src={`${process.env.REACT_APP_BE}${infoUser.thumbnail_name}`}
                                alt="ảnh đại điện" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="info">
                                <p>Họ và tên: {infoUser.name}</p>
                                <p>Ngày sinh: {infoUser.date}</p>
                                <p>Địa chỉ email: {infoUser.email}</p>
                                <p>Số điện thoại: {infoUser.phone}</p>
                                <p>Giới tính: {infoUser.gender == 1 ? "Nam" :infoUser.gender ==  2 ? "Nữ" : "Khác" }</p>

                            </div>
                        </div>
                    </div>                 
                </div>
                <div className="body-box">          
                    <>
                    <h3>Lịch sử khám</h3>
                        <div className="row g-3 mb-3 form-group">                   
                            <div className="col-md-2" style={{minWidth: "20%"}}>
                                <button className='btn btn-primary'
                                //    onClick={(e)=>setSearch({...search, "is_vaccine": 0})}
                                onClick={handleHistoryBtn}
                                >Lịch sử khám bệnh</button>   
                            </div>
                            <div className="col-md-2" style={{minWidth: "20%"}}>
                                <button className='btn btn-primary'
                                style={{width: "100%"}}
                                //   onClick={(e)=>setSearch({...search, "is_vaccine": 1})}
                                onClick={handleVaccineBtn}
                                >Lịch sử tiêm</button>
                            </div>               
                        </div>
                        
                        {
                            search.is_vaccine == 0 ?
                            <div className="table-responsive">
                            <Table  bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>               
                                    <th>Chuyên khoa</th>       
                                    <th>Nội dung khám</th>       
                                    <th>Kết quả sau khám</th>       
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>     
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ? <Loading /> :
                                    list.map((val, index)=>(
                                                     
                                    val.is_vaccine == 0 ?
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{val.specialist_name}</td>
                                        <td>{val.description}</td>
                                        <td>{val.infoAfterExamination}</td>
                                        <td>{val.status_name}</td>
                                        <td><Link to={`/ho-so-ca-nhan/chi-tiet-lich-kham/${val.id}`}><i className="fas fa-edit"></i></Link></td>
                                    </tr>
                                    : ""
                                  
                                ))
                                } 
                                                            
                            </tbody>
                
                            </Table>     
                            {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}          
                        </div>
                        :
                 
                        <CollapsibleTable list = {list} />
 
                 
           
                        }


                    
                    </>
                </div>
   
        
            </div>
        </div>
        </div>
     ); 
}

export default MedicalRecord;