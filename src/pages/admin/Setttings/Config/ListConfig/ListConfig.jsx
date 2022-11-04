
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListConfig.scss";
import { useEffect, useState } from "react";
import { deleteSettingServiceAPI, getListSettingServiceAPI } from "../../../../../services/SettingService";
import Loading from "../../../../../components/Loading/Loading";
import Paginate from "../../../../../components/Paginate/Paginate";

function ListConfig() {

    const token = useSelector(state => state.auth.token )
    const [getListSetting, setListSetting ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
  
    const start = async () => {
        setLoading(true)
        setListSetting([])
        let res = await getListSettingServiceAPI({token,page})
        let data = res.data;
        let dataArr = data.data
        setLoading(false)
        setListSetting(dataArr)

        // handle paginate
        let pagination = data.meta.pagination ?? null;
        setPaginate(pagination);
    }

   const  onChangePage  = (number) => {
        setPage(number)
    }

    const click = (event) => {
        console.log(event.target.checked);
    } 
     useEffect(() => {
        start();
    }, [page])
    
    return ( 
        <div className="adminItem">
               <div className="addConfig">                  
                    <Link  to="/admin/cau-hinh-chung/add" className="btn btn-primary"> Thêm config</Link>                          
                </div>
            <Table striped bordered hover className='table-striped'>            
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã </th>
                        <th>Mô tả</th>
                        <th>Trạng thái</th>
                        <th>Ngày chỉnh sửa</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody> 
                        {                          
                            getListSetting.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.code}</td>
                                        <td>{item.description}</td>
                                        <td>{                                         
                                            <label className="switch">
                                                <input type="checkbox" value={item.status} onChange={click} 
                                                id = {`in_${index}`}
                                                defaultChecked={item.status == 1 ? true : false}  />
                                                <span className="slider round"></span>
                                            </label>                                  
                                        }</td>
                                        <td>{item.created_at}</td>
                                        <td>
                                            <Link to={`/admin/cau-hinh-chung/update/${item.id}`} className="btn">
                                                <i className="fas fa-edit"></i>
                                            </Link> |
                                            <button className="btn" onClick={async () => {
                                                if(window.confirm(`Bạn có muốn xóa ${item.code}`)){
                                                    await deleteSettingServiceAPI(item.id , token )
                                                    start()
                                                }
                                            }}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>    
                                )
                            })
                        }    
                     
                               
                </tbody>
            </Table>
            { loading &&  <Loading/>} 
            {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}   
        </div>
     );
}

export default ListConfig;