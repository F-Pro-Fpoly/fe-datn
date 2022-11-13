
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getInfoDoctor } from "../../../../../services/UserService";
import "./ProfileDoctor.scss";

function ProfileDoctor() {

    const token = useSelector(state => state.auth.token);
    const [infoDoctor, setInfoDoctor] = useState();
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
                    <p className="text_1" style={{textTransform:"uppercase"}}>Bác sĩ { infoDoctor ? infoDoctor.name : ""}</p>
                    <div className="">
                      <ol className="breadcrumb breadcrumbFix">
                        <li className="breadcrumb-item">
                          <Link to="/"><span>Trang chủ</span></Link>
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
                                    <img alt="BÁC SĨ PHAN TRUNG TIỆP" src="https://nhakhoathanhan.vn/uploads/img/background_10.jpg" />
                                </div>
                            </Link>
                            <div className="rightBlock">
                                <div className="basicInfo">
                                    <Link className="namePeople" style={{textTransform:"uppercase", fontWeight: "700"}}>
                                        BÁC SĨ {infoDoctor ? infoDoctor.name : ""}
                                    </Link>
                                    <p className="career">{infoDoctor ? infoDoctor.specailist_name : ""}</p>
                                    <div className="wrapSocialBlock">
                                        <div className="socialBlock_1">
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/faceItem_2.svg" />
                                                </div>
                                            </Link>
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/faceItem_2.svg" />
                                                </div>
                                            </Link>
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/faceItem_2.svg" />
                                                </div>
                                            </Link>
                                            <Link className="wrapSocialPart">
                                                <div className="imgSocialPart">
                                                    <img alt="facebook" src="https://nhakhoathanhan.vn/uploads/img/faceItem_2.svg" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="textInfo"></p>
                                    <p>- Kinh nghiệm: 10 năm </p>
                                    <p>- Kinh nghiệm: 10 năm </p>
                                    <p>- Tu nghiệp tại National University of Russia (Nga) về thiết kế nụ cười, nắn chỉnh răng và mặt dán sứ </p>
                                </div>
                                <div className="wrapOwlSlideTab">
      
                                    
                                    <Link to="#td" className="btn btn-primary" style={{marginRight: "2%"}}>Trình độ</Link>
                                    <Link className="btn btn-primary" style={{marginRight: "2%"}}>Giới thiệu</Link>
                                    <Link className="btn btn-primary" style={{marginRight: "2%"}}>Kinh nghiệm</Link>
                                    <Link className="btn btn-primary" style={{marginRight: "2%"}}>Bài viết</Link>
                        
                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_introduce" id="td">
                <div className="container">
                    <div className="containerFix">
                        <div className="titleBlock_2">
                            <div className="text_1">TRÌNH ĐỘ CHUYÊN MÔN</div>
                        </div>
                        <div className="data_contents">
                        <p></p>
                        <p  dir="ltr" role="presentation">- Tốt nghiệp bác sĩ chuyên ngành nha khoa tại đại học Y khoa Moscow (Moscow State University of Medicine and Dentistry) của Nga.</p>
                        <p  dir="ltr" role="presentation">- Tốt nghiệp bác sĩ chuyên ngành nha khoa tại đại học Y khoa Moscow (Moscow State University of Medicine and Dentistry) của Nga.</p>
                        <p  dir="ltr" role="presentation">- Tốt nghiệp bác sĩ chuyên ngành nha khoa tại đại học Y khoa Moscow (Moscow State University of Medicine and Dentistry) của Nga.</p>
                        </div>
                    </div>
                </div>
            </div>
              
          </div>
    )

}

export default ProfileDoctor;