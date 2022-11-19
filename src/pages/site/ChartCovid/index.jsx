import { useEffect, useState } from "react";
import { getChartCovidService } from "../../../services/normal/ChartService";
import "./ChartCovid.scss"
import { Chart } from 'chart.js/auto'
import { Link } from "react-router-dom"

function ChartCovid() {

    const [topInfo, getTopinfo] = useState();
    const [location, setLocation] = useState([]);


    // (async function() {
    //   const data = [
    //     { year: 2010, count: 10 },
    //     { year: 2011, count: 20 },
    //     { year: 2012, count: 15 },
    //     { year: 2013, count: 25 },
    //     { year: 2014, count: 22 },
    //     { year: 2015, count: 30 },
    //     { year: 2016, count: 28 },
    //   ];
    
    //   new Chart(
    //     document.getElementById('charta'),
    //     {
    //       type: 'bar',
    //       data: {
    //         labels: data.map(row => row.year),
    //         datasets: [
    //           {
    //             label: 'Acquisitions by year',
    //             data: data.map(row => row.count)
    //           }
    //         ]
    //       }
    //     }
    //   );
    // })();



    const start = async () =>{
        try {
            let res =  await getChartCovidService();
            let data = res.data;
            let location = data.total.internal
            let locations = data.locations
            getTopinfo(location)
            setLocation(locations);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        start()
        document.title = "Biểu đồ covid"

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
                      <Link to="" id="tabvi" title="" className="active">Việt Nam</Link>
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
                            <p className="value">{topInfo ? 
                            
                            new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(topInfo.cases)
                            : ''}</p>
                         </div>
                         <div className="item">
                            <p className="text">KHỎI BỆNH</p>
                            <p className="value">{topInfo ? 
                            new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(topInfo.recovered)
                            : ''}</p>
                         </div>
                         <div className="item">
                            <p className="text">TỬ VONG</p>
                            <p className="value">{topInfo ? 
                            new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(topInfo.death)
                            : ''}</p>
                         </div>
                      </div>
                  </div> 
                </div>
              </div>
            </div>

          <div className="col-md-12">
          <div className="home__statistical-nav">
            <ul>
              <li>
              <Link to="" id="tabvi" title="" className="active">Tình hình dịch cả nước</Link>
              </li>
            </ul>
          </div>
              <div className="box-content">
              <div className="col-md-6 border" >        
                <table className="table custom" >
                  <thead className="table-dark">          
                    <tr>                   
                      <th scope="col">Tỉnh/TP</th>
                      <th scope="col">Tổng số ca</th>
                      <th scope="col">24 giờ qua</th>
                      <th scope="col">Tử vong</th>
                    </tr>
                  </thead>
                  
                  <tbody >
                    {
                         location.map((item,index) =>{
                            return (
                              <tr key={index}>
                                <th scope="row">{item.name ?? ""}</th>
                                <td>{
                                  new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(item.cases)
                                ?? ""}</td>
                                <td style={{color:"red"}}>{ item.casesToday  == 0 ? "-" : "+"+
                                  new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(item.casesToday)
                                 }</td>
                                <td>{
                                 new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(item.death)
                                ?? ""}</td>
                              </tr>      
                            )
                        })
                      }
                      
                  </tbody>
                 
                </table>
              </div>
{/*              
              <div className="col-md-5.5 border" >
                <canvas id="charta"></canvas>
              </div> */}
              </div>
          </div>
        </div>



        </div>


    )
}



export default ChartCovid;