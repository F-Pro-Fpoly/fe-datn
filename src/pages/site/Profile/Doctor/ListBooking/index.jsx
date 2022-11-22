import { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import { getListServiceAPI } from "../../../../../services/BookingService";
import Paginate from '../../../../../components/Paginate/Paginate';
import { Link } from "react-router-dom";
function ListBooking() {

    const token = useSelector(state => state.auth.token);

    const [listbooking, getListbooking] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
      
        const start = async () => {
            getLoading(true)
            getListbooking([])
            let res = await getListServiceAPI(token,page) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            getListbooking(dataArr)
        }
      
        start();
    }, [page])
    const onChangePage = (number) =>{
      setPage(number);
    }
    console.log(listbooking);
    return ( 
        <>
        <div className="table-responsive">
            <Table  bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã lịch khám</th>
                  <th>Tên người đặt</th>
                  <th>Ngày khám</th>
                  <th>Giờ khám</th>
                  <th>Thao tác</th>     
                </tr>
              </thead>
              <tbody>
                {
                  listbooking.map((val, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.code}</td>
                      <td>{val.customer_name}</td>
                      <td>{val.date}</td>
                      <td>{val.time_start} - {val.time_end}</td>
                      <td><Link to={`/ho-so-ca-nhan/chi-tiet-lich-kham/${val.id}`}><i className="fas fa-edit"></i></Link></td>
                    </tr>
                  ))
                }
                
              </tbody>
              
            </Table>
        </div>
        {
          loading && <Loading />
        }
         {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
        </>
     );
}

export default ListBooking;