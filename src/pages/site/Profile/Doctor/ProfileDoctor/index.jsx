
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getInfoDoctor } from "../../../../../services/UserService";
import "./ProfileDoctor.scss";

function ProfileDoctor() {

    const token = useSelector(state => state.auth.token);
    const [infoDoctor, setInfoDoctor] = useState([]);
    const pram = useParams();
    const id = pram.id

    const start = async () =>{
        const  res =  await getInfoDoctor({token,id})
        let data = res.data 
        let dataArr = data.data
        setInfoDoctor(dataArr)
    }

    useEffect(() => {
        start()
        document.title = "Thông tin bác sĩ"
    }, [])



    return ( 

       
            <div className="container-fluid" id="spec">  
            { infoDoctor != "none"  ?
        <>
             <div className="specialBlock_19">
              <div className="container containerFix">
                <div className="wrapBox">
                  <p className="text_1" style={{textTransform:"uppercase"}}>Bác sĩ { infoDoctor.doctor_name }</p>
                  <div className="">
                    <ol className="breadcrumb breadcrumbFix">
                      <li className="breadcrumb-item">
                        <Link to="/"><span style={{fontWeight: "700"}}>Trang chủ</span></Link>
                      </li>
                      <li className="breadcrumb-item">
                        <span style={{fontWeight: "700"}}>Đội ngũ bác sĩ</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="section_1">
                <div className="container">
                    <div className="wrapPeopleBlock">
                        <div className="peopleBlock">
                            <Link className="wrapImg">
                                <div className="imgPart figure1">
                                    <img alt="BÁC SĨ PHAN TRUNG TIỆP" src={`${process.env.REACT_APP_BE}${infoDoctor.doctor_avatar}`}           />
                                </div>
                            </Link>
                            <div className="rightBlock">
                                <div className="basicInfo">
                                    <Link className="namePeople" style={{textTransform:"uppercase", fontWeight: "700"}}>
                                        BÁC SĨ { infoDoctor.doctor_name }
                                    </Link>
                                    <p className="career">{infoDoctor.specialists_name }</p>
                                    <div className="wrapSocialBlock">
                                        <div className="socialBlock_1">
                                                <div className="imgSocialPart">
                                            <Link to={infoDoctor.link} >
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/faceItem_2.svg" />
                                            </Link>
                                                </div>
                                        
                                        </div>
                                    </div>
                                    <p className="textInfo"></p>
                                    
                                    <p  dangerouslySetInnerHTML={{__html: infoDoctor.context}} /> 
                                </div>
                                <div className="wrapOwlSlideTab">
        
                                    
                                    <a href="#gt" className="btn btn-primary" style={{marginRight: "2%"}}>Giới thiệu</a>
                                    <a href="#td" className="btn btn-primary" style={{marginRight: "2%"}}>Trình độ</a>
                                    <a href="#kn" className="btn btn-primary" style={{marginRight: "2%"}}>Kinh nghiệm</a>
            
                        
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_introduce" >
                <div className="container">
                    <div className="containerFix" id="gt">
                        <div className="titleBlock_2">
                            <div className="text_1">Giới thiệu</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p dir="ltr" role="presentation" dangerouslySetInnerHTML={{__html: infoDoctor.introduce}} /> 
                        
                    </div>
                    </div>
                    <div className="containerFix" id="td">
                        <div className="titleBlock_2">
                            <div className="text_1">TRÌNH ĐỘ CHUYÊN MÔN</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p dir="ltr" role="presentation" dangerouslySetInnerHTML={{__html: infoDoctor.level}} /> 
        
                        </div>
                    </div>
                
                    <div className="containerFix" id="kn">
                        <div className="titleBlock_2">
                            <div className="text_1">Kinh nghiệm</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p dir="ltr" role="presentation" dangerouslySetInnerHTML={{__html: infoDoctor.experience}} /> 
                        
                        </div>
                    </div>

                </div>
            </div>
        </>
               : 
            <div className="aibietgidau">
                <div class="site">
                <div class="sketch">
                    <div class="bee-sketch red"></div>
                    <div class="bee-sketch blue"></div>
            </div>

           <span className="font">
           <h1>Bác sĩ
                <small>Hiện tại chưa có thông tin</small></h1>
           </span>
            </div>
            </div>
                  }
            </div>
    )

}

export default ProfileDoctor;