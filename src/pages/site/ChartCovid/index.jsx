import { useEffect, useState } from "react";
import { getChartCovidService } from "../../../services/normal/ChartService";
import "./ChartCovid.scss"
import { Link } from "react-router-dom"
import BarChart from "./chart";



function ChartCovid() {

    const [topInfo, getTopinfo] = useState([]);
    const [location, setLocation] = useState([]);
    const [overview, setOverview] = useState([]);


    const start = async () =>{
        try {
            let res =  await getChartCovidService();
            let data = res.data;
            let location = data.total.internal
            let locations = data.locations
            let overview = data.overview
          
            getTopinfo(location)
            setLocation(locations);
            setOverview(overview);
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
                <p className="text_1">BIỀU ĐỒ COVID</p>
                <div className="">
                  <ol className="breadcrumb breadcrumbFix">
                    <li className="breadcrumb-item">
                      <Link to="/"><span style={{color: "white"}}>Trang chủ</span></Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="chuyen-khoa" ><span style={{color: "white"}}>Biểu đồ covid</span></Link>
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
                      <Link to="" id="tabvi" title="" className="active">Tình hình dịch thế giới</Link>
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
            <div className="home__juncture-flex">
              <div className="box-juncture">
                <div className="table-left">
                  <div className="row head">
                    <span className="city">Tỉnh/TP</span>
                    <span className="total">Tổng số ca</span>
                    <span className="daynow">24 giờ qua</span>
                    <span className="die">Tử vong</span>
                  </div> 
                  <div className="tbody">
                    {
                         location.map((item,index) =>{
                            return (
                            <div className="row" key={index}>                    
                              <span className="city">{item.name ?? ""}</span>
                              <span className="total">{ new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(item.cases)
                                ?? ""}</span>
                              <span className="daynow" style={{color:"red"}}>{item.casesToday  == 0 ? "-" : "+"+
                                  new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(item.casesToday)}</span>
                              <span className="die">{new Intl.NumberFormat({ maximumSignificantDigits: 3}).format(item.death)
                                ?? ""}</span>                                   
                            </div>
                       )
                      })
                    }
                  </div>
                </div>
                



              </div>
              <div className="box-juncture">
                    <BarChart overview={overview}/>
                  
                </div>
              </div>
            </div>
                            



          </div>
        </div>




    )
}



export default ChartCovid;