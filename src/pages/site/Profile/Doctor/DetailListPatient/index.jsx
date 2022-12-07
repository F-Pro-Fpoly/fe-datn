import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../../../components/Loading/Loading';
import Paginate from "../../../../../components/Paginate/Paginate";
import { getDetailListPatientServiceAPI, getListPatientServiceAPI } from '../../../../../services/UserService';

function DetailListPatient() {

    const token = useSelector(state => state.auth.token)
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const param = useParams();
    const id = param.id
    const [search,setSearch] = useState({
      "is_vaccine" : "",
    });
    const start = async () => {
        setLoading(true)
        let res = await getDetailListPatientServiceAPI(token, id, search);
        let data = res.data
        let dataArr = data.data;
        setLoading(false)
        setList(dataArr)
    }


    useEffect(() => {
        start()
    }, [search])
    


    return (  
        <>
           <div className="row g-3 mb-3 form-group">
        
            <div className="col-md-2">
              <button className='btn btn-primary'
               onClick={(e)=>setSearch({...search, "is_vaccine": 0})}
              >Lịch khám bệnh</button>   
            </div>
            <div className="col-md-2">
            <button className='btn btn-primary'
              onClick={(e)=>setSearch({...search, "is_vaccine": 1})}
              >Lịch tiêm</button>
            </div>
      
        </div>

         <div className="table-responsive">
            <Table  bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã lịch khám</th>
                  <th>Chuyên khoa</th>       
                  <th>Trạng thái</th>
                  <th>Thao tác</th>     
                </tr>
              </thead>
              <tbody>
                {
                  list.length == 0 ? 
                    <tr >
                     <td colSpan="5" style={{textAlign:"center"}}> { loading ? <Loading /> :  "Người dùng chưa đặt lịch"} </td>
                  </tr>
                
                  :

                     list.map((val, index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val.code}</td>
                        <td>{val.specialist_name}</td>
                        <td>{val.status_name}</td>
                        <td><Link to={`/ho-so-ca-nhan/chi-tiet-lich-kham/${val.id}`}><i className="fas fa-edit"></i></Link></td>
                    </tr>
                  ))
                }
                
              </tbody>
   
            </Table>      
         
        </div>
        </>
     
    );
}

export default DetailListPatient;