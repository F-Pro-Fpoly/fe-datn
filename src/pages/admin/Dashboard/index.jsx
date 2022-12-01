import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChartServiceAPI, getListServiceAPI } from "../../../services/ChartAdmin";
import BarChartAdmin from "./Chart";


function Dashboard () {
  const [list,setList] = useState([]);
  const [overview, setOverview] = useState([])
  const token = useSelector(state=> state.auth.token);

  const start = async () => {
      let res = await getListServiceAPI(token)
      let data = res.data.data
      let resChart = await getChartServiceAPI(token)
      let dataChartt = resChart.data.data;

      setOverview(dataChartt)
      setList(data)
  }

  useEffect(() => {
    start()
  }, [])
  


    return (
      <div className="body flex-grow-1 px-3">
         <div className="container-lg">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <Link to="/admin/list-user">
                <div className="card mb-4 text-white bg-primary">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">{list.user} 
                      </div>
                      <div>Người dùng</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            
              <div className="col-sm-6 col-lg-3">
              <Link to="#"> 
                <div className="card mb-4 text-white bg-info">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">{list.priceBooking_format}

                       </div> 
                      <div>Tổng doanh thu</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            
              <div className="col-sm-6 col-lg-3">
             <Link to="#">
             <div className="card mb-4 text-white bg-warning">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">{list.booking}
                          
                      </div>
                      <div>Tổng lịch đặt</div>
                    </div>
                  </div>
                </div>
             </Link>
              </div>
            
              <div className="col-sm-6 col-lg-3">
             <Link to="/admin/lien-he/danh-sach-lien-he">
             <div className="card mb-4 text-white bg-danger">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div className="row">
                      <div className="fs-4 fw-semibold col-md-8">{list.noReplyContact}
                      
                      </div>
                      <div className="clo-md-4">Số liên hệ</div>
                    </div>
                  </div>
                </div>
             </Link>
              </div>
            </div>
          
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title mb-0">Biểu đồ doanh thu của từng chuyên khoa (VNĐ)</h4>

                  </div>
                </div>
                <div className="c-chart-wrapper" >
                    <BarChartAdmin overview={overview}/>
                </div>
              </div>
            
            </div>
          </div>
      </div>
    
            );
}

export default Dashboard ;