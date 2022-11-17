import { useEffect, useState } from "react";
import { getChartCovidService } from "../../../services/normal/ChartService";
import "./ChartCovid.scss"

import { Link } from "react-router-dom"

function ChartCovid() {

    const [topInfo, getTopinfo] = useState();

    const start = async () =>{
        try {
            let res =  await getChartCovidService();
            let data = res.data;
            let location = data.total.internal
            let world = data.locations

            getTopinfo(location)

        } catch (error) {
            
        }
    }


    useEffect(() => {
        start()
    

    }, [])
    

    return (  

        <div className="container-fluid pd" id="tb" >

          <div className="specialBlock_19">
            <div className="container containerFix">
              <div className="wrapBox">
                <p className="text_1">Chuyên khoa</p>
                <div className="">
                  <ol className="breadcrumb breadcrumbFix">
                    <li className="breadcrumb-item">
                      <Link to="/"><span style={{color: "white"}}>Trang chủ</span></Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="chuyen-khoa" ><span style={{color: "white"}}>Chuyên khoa</span></Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>



        <div className="container">
            <div className="topinfo">
              <div className="box-top">
                <div className="home__statistical-nav">
                    <ul>
                      <li>
                      <Link to="" id="tabvi" title="" class="active">Việt Nam</Link>
                      </li>
                      <li>
                      <Link to="" id="tabvi" title="">Thế giới</Link>
                      </li>
                    </ul>
                </div>
                <div className="home__statistical-nav-content">
                  <div className="content-tab show">
                      <div className="home__statistical-list">
                         <div className="item">
                            <p className="text">SỐ CA NHIỄM</p>
                            <p className="value">{topInfo.cases}</p>
                         </div>
                         <div className="item">
                            <p className="text">KHỎI BỆNH</p>
                            <p className="value">{topInfo.recovered}</p>
                         </div>
                         <div className="item">
                            <p className="text">TỬ VONG</p>
                            <p className="value">{topInfo.death}</p>
                         </div>
                      </div>
                  </div> 
                </div>
              </div>
            </div>

          <div className="col-md-12">
              <div className="col-md-6" >
        
                <table class="table" >
              <thead class="table-dark">
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                  </tr>
              </tbody>
        </table>
          </div>
          <div className="col-md-6">

          </div>
          </div>
        </div>



        </div>


    )
}



export default ChartCovid;