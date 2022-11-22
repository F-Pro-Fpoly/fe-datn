import { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import { getListBookingDoctorServiceAPI } from "../../../../../services/BookingService";
import Paginate from '../../../../../components/Paginate/Paginate';
import { Link } from "react-router-dom";
import moment from "moment";
function ListBooking() {

    const token = useSelector(state => state.auth.token);

    const [listbooking, getListbooking] = useState([]);
    const [loading, getLoading] = useState(false);

    const date = moment().format('YYYY-MM-DD');
    
    useEffect(() => {
      
        const start = async () => {
            getLoading(true)
            getListbooking([])
            let res = await getListBookingDoctorServiceAPI(token,date) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            getListbooking(dataArr)
        }
      
        start();
    }, [])


    const HandleTime = (e) => {
      console.log(e.target.value);
    }

    return ( 
        <>
         <div className="form-group mb-3">
                <select name="timebooking" className="form-control" id=""
                 defaultValue={'homnay'}
                onChange={HandleTime}>
                    <option value="homqua">Lịch khám hôm qua</option>
                    <option value="homnay">Lịch khám hôm nay</option>
                    <option value="ngaymai">Lịch khám ngày mai</option>                 
                </select>
            </div>

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
     
        </>
     );
}

export default ListBooking;