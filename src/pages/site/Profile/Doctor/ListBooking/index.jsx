import { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import { getListBookingDoctorServiceAPI, getListStatuServiceAPI } from "../../../../../services/BookingService";
import Paginate from '../../../../../components/Paginate/Paginate';
import { Link } from "react-router-dom";
import moment from "moment";
function ListBooking() {

    const token = useSelector(state => state.auth.token);
    const id_doctor = useSelector(state => state.auth.user.id);
    const [listbooking, getListbooking] = useState([]);
    const [loading, getLoading] = useState(false);
    const [status, setStatus] = useState([])
    const now = moment().format('YYYY-MM-DD');
    const [search,setSearch] = useState({
      "date" : now,
      "status" : "",
      "code" : "",
      'is_vaccine': ''
    });
 
    const start = async () => {
      getLoading(true)
      getListbooking([])
      let res = await getListBookingDoctorServiceAPI(token,search,id_doctor) 
      let status = await getListStatuServiceAPI(token,1)
      let dataStatus = status.data
      let dataArrStatus = dataStatus.data
      setStatus(dataArrStatus)
      let data = res.data 
      let dataArr = data.data
      getLoading(false)
      getListbooking(dataArr)
  }

    useEffect(() => {
        start();
    }, [])



    const HandleSearch = async (e) => {
        e.preventDefault();
        getLoading(true)
        getListbooking([])
        let res = await getListBookingDoctorServiceAPI(token,search,id_doctor) 
        let data = res.data 
        let dataArr = data.data
        getLoading(false)
        getListbooking(dataArr)
    }
    
    return ( 
        <>
        <div className="row g-3 mb-3 form-group">
        
          <div className="col-md-3">
              <input type="text" name="code" 
              placeholder="Nhập mã lịch khám"
              className="form-control" 
              onChange={(e)=>setSearch({...search, "code": e.target.value})}
              />
          </div>
          <div className="col-md-3">
              <input type="date" name="date" 
              className="form-control" 
              defaultValue={now}
              onChange={(e)=>setSearch({...search, "date": e.target.value})}
              />
          </div>
          <div className="col-md-3">
            <select name="status" className="form-control" id=""
              defaultValue="0" 
              onChange={(e)=>setSearch({...search, "status": e.target.value})}
              >
                  <option value="0" disabled>Chọn Trạng thái</option>
                  {status.map((item,index) => {
                      return(
                        <option key={index} value={item.id}>{item.name}</option>
                      )
                  })}       
            </select>      
          </div>
          <div className="col-md-3">
            <select name="is_vaccine" className="form-control" id=""
              onChange={(e)=>{
                setSearch({...search, "is_vaccine": e.target.value})
                // console.log(search);
              }}
              >
                  <option value="0">Chọn kiểu lịch khám</option>
                  <option value="vaccine">Vaccine</option>   
                  <option value="booking">Booking</option>  
            </select>      
          </div>
          <div className="col-md-2" >
            <button type="submit" onClick={HandleSearch} className="btn btn-primary">Tìm kiếm</button> 
          </div>
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
                  <th>Vaccine</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>     
                </tr>
              </thead>
              <tbody>
                {
                  listbooking.length == 0 ? 
                    <tr >
                     <td colSpan="8" style={{textAlign:"center"}}> { loading ? <Loading /> :  "Hiện chưa có người đặt lịch"} </td>
                  </tr>
                
                  :

                  listbooking.map((val, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.code}</td>
                      <td>{val.customer_name}</td>
                      <td>{val.date}</td>
                      <td>{val.time_start} - {val.time_end}</td>
                      <td>{val.vaccine_name ?? ''}</td>
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

export default ListBooking;