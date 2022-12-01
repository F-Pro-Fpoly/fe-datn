import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetailSereiceAPI } from "../../../services/normal/VaccineService";
import "./Detail.scss"
function Detail() {

    const [detail, setDetail] = useState([]);
    const param = useParams();
    const id = param.id;
    const navigate = useNavigate();

    const start  = async () => {

        let res =  await getDetailSereiceAPI(id);
        let data = res.data;
        let dataArr = data.data
        setDetail(dataArr)
    }

    const handleDatLich = () => {
      sessionStorage['vaccine'] = detail.code;
      navigate('/dang-ky-tiem')
    }
    useEffect(() => {
        start()

    }, [])


    return ( 

        <div className="container-fluid" id="spec">  
        <div className="specialBlock_19">
          <div className="container containerFix">
            <div className="wrapBox">
              <p className="text_1" style={{textTransform:"uppercase"}}>Chi tiết vaccine</p>
              <div className="">
                <ol className="breadcrumb breadcrumbFix">
                  <li className="breadcrumb-item">
                    <Link to="/"><span style={{fontWeight: "700"}}>Trang chủ</span></Link>
                  </li>
                  <li className="breadcrumb-item">
                     <Link to="/vaccine"><span style={{fontWeight: "700"}}>Vaccine</span></Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span style={{fontWeight: "700"}}>Chi tiết</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      <div className="section_1">
          <div className="container">
              <div className="row pt-md-5 pt-3 px-0">
              <div className="pb-4 pt-0 d-flex flex-column px-0 pr-4 col-md-12 col-lg-5 col-xl-4 col-12 ">
                        <div className="bg-primary-1 vaccine-info-detail" style={{
                            position: "sticky",
                            top: "150px"
                        }}>
                            <h3>{detail.name}</h3>
                            <h5>Nguồn gốc: {detail.national_name}</h5>
                            <h5>Phòng bệnh</h5>
                            <h5>
                                {      
                                 detail.sick ?       detail.sick.map((i,v) => {
                                        return (
                                            <span key={v}>{i.name} &nbsp;</span> 
                                        )                                               
                                    })
                                    : ""
                                }
                            </h5>
                            <h2>
                                <svg data-v-c5682c36="" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.982 8.5c0-.838.68-1.518 1.518-1.518h7.494c.402 0 .789.16 1.073.445l10.929 10.928a1.518 1.518 0 010 2.147l-7.494 7.494a1.518 1.518 0 01-2.147 0L7.427 17.067a1.518 1.518 0 01-.445-1.073V8.5zM8.5 5.16A3.34 3.34 0 005.16 8.5v7.494c0 .886.352 1.735.979 2.361l10.928 10.929a3.34 3.34 0 004.723 0l7.494-7.494a3.34 3.34 0 000-4.723L18.355 6.14a3.34 3.34 0 00-2.361-.978H8.5zm3.34 8.197a1.518 1.518 0 113.035 0 1.518 1.518 0 01-3.036 0zm1.517-3.34a3.34 3.34 0 100 6.68 3.34 3.34 0 000-6.68z" fill="#fff" stroke="#fff" stroke-width=".5"></path>
                                </svg>
                                <span>                           
                                    {detail.price_formated}
                                </span>
                            </h2>
                            <div className="d-fex" style={{display:"flex", paddingTop: "15%"}}>
                                <button 
                                  onClick={handleDatLich}
                                  className="btn btn-primary" style={{width: "100%",
                                  height: "50px"}}>Đặt lịch</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className="px-4 pt-3 col-md-12 col-lg-7 col-xl-8 col-12">
                        <div className="box-right">
                          <h3 className="namePeople" style={{textTransform:"uppercase",textAlign:"center" ,fontWeight: "700"}}>
                          MÔ TẢ THÔNG TIN VẮC XIN : {detail.name}
                          </h3>       
                          <div className="image_vaccsin">              
                              <div className="info">
                                  <p dangerouslySetInnerHTML={{__html: detail.description}} /> 
                              </div>
                          </div>
                      </div>
                   
                    </div>
                   
              </div>
                   
                
          </div>
      </div>
     
        
    </div>

     );
}

export default Detail;