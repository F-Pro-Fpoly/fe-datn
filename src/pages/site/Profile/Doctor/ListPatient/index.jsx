import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../../../components/Loading/Loading';
import Paginate from "../../../../../components/Paginate/Paginate";
import { getListPatientServiceAPI } from '../../../../../services/UserService';

function ListPatient() {

    const token = useSelector(state => state.auth.token)
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);

    const start = async () => {
        setLoading(true)
        let res = await getListPatientServiceAPI(token,page);
        let data = res.data
        let dataArr = data.data;
        setLoading(false)
        setList(dataArr)

        // handle paginate
        let pagination = data.meta.pagination ?? null
        setPaginate(pagination)

    }

    const  onChangePage  = (number) => {
        setPage(number)
    }

    useEffect(() => {
        start()
    }, [page])
    

    return (  
        
        <div className="table-responsive">
            <Table  bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Ngày khám gần nhất</th>       
                  <th>Hồ sơ bệnh án</th>
                  <th>Thao tác</th>     
                </tr>
              </thead>
              <tbody>
                {
                  list.length == 0 ? 
                    <tr >
                     <td colSpan="5" style={{textAlign:"center"}}> { loading ? <Loading /> :  "Hiện chưa có người bệnh"} </td>
                  </tr>
                
                  :

                  list.map((val, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.name}</td>
                      <td>{val.lastBooking ?
                       <span style={{color:"green"}}>{val.lastBooking}</span> 
                       :
                        <span className='text-warning'>Chưa đặt lịch khám bao giờ</span>}</td>
                      <td>
                        Xem hồ sơ
                      </td>
                    
                      <td><Link to={`/ho-so-ca-nhan/chi-tiet-danh-sach-lich-kham/${val.id}`}><i className="fas fa-edit"></i></Link></td>
                    </tr>
                  ))
                }
                
              </tbody>
              {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}   
            </Table>      
         
        </div>
    );
}

export default ListPatient;