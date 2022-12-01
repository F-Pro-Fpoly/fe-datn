
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
                                            <Link to={infoDoctor.link} className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/faceItem_2.svg" />
                                                </div>
                                            </Link>
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/icons8-linkedin-2.svg" />
                                                </div>
                                            </Link>
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/twitter_2.svg" />
                                                </div>
                                            </Link>
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/GPlusItem_2.svg" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="textInfo"></p>
                                    <p>{infoDoctor.context } </p>
                                  
                                </div>
                                <div className="wrapOwlSlideTab">
        
                                    
                                    <a href="#td" className="btn btn-primary" style={{marginRight: "2%"}}>Trình độ</a>
                                    <a href="#gt" className="btn btn-primary" style={{marginRight: "2%"}}>Giới thiệu</a>
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
                        <p  dir="ltr" role="presentation"> {infoDoctor.introduce}</p>           
                    </div>
                    </div>
                    <div className="containerFix" id="td">
                        <div className="titleBlock_2">
                            <div className="text_1">TRÌNH ĐỘ CHUYÊN MÔN</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p  dir="ltr" role="presentation"> {infoDoctor.level}</p>           
                        </div>
                    </div>
                
                    <div className="containerFix" id="kn">
                        <div className="titleBlock_2">
                            <div className="text_1">Kinh nghiệm</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p  dir="ltr" role="presentation"> {infoDoctor.experience}</p>           
                        </div>
                    </div>
                    <div className="containerFix" id="lc">
                        <div className="titleBlock_2">
                            <div className="text_1">LÝ DO KHÁCH HÀNG TIN TƯỞNG VÀ LỰA CHỌN BÁC SỸ {infoDoctor.doctor_name}</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p  dir="ltr" role="presentation"> {infoDoctor.level}</p>           
                        </div>
                    </div>
                </div>
            </div>
              
          </div>
    )

}

export default ProfileDoctor;