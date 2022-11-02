import { Link } from "react-router-dom";
import "./Clinic.scss";
function Clinic () {
    return (
       <>
        <div className="infoClinic">       
            <div className="text">
                <div className="container">
                    <h3>Cơ xương khớp</h3>
                    <div className="">
                        <p>Bác sĩ Cơ Xương Khớp giỏi</p>
                        <span>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</span>
                        <ul>
                            <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                            <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
                            <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
                            <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
                        </ul>
                    </div>
                </div>
            </div>
           </div>
     
            <div className="content">
                <div className="container">            
                    <div className="boxcontent">
                 
                      
                        <div className="image">
                                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6" alt="" />
                                <Link to="">Xem thêm</Link>
                            </div>
                            <div className="infocontent">                       
                                <h3>Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân</h3>
                                <span>Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
                                    Chủ tịch Hội Thấp khớp học Việt Nam
                                    Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
                                    Bác sĩ khám cho người bệnh từ 14 tuổi trở lên
                                </span>                                              
                      
                
                       </div>

                        <div className="schedule">
                            <select name="" id="">
                                <option value="">Thứ 2 - 26/09</option>                     
                            </select>
                            
                           <div className="title">
                                <i className="fa-solid fa-calendar-days"></i>&nbsp;
                                <span>LỊCH KHÁM</span>
                           </div>
                           <div className="time">
                              <div className="container-fluid">
                                    <div className="row">                     
                                        <div className="col">
                                        <div className="boxtime">
                                                <input type="checkbox" class="btn-check" id="btn-check-outlined-1" autocomplete="off"  />
                                                <label class="btn btn-outline-primary non-border "  for="btn-check-outlined-1"> 09:30 - 10:00</label><br />
                                            </div>
                                        </div>
                                        <div className="col">
                                        <div className="boxtime">
                                                <input type="checkbox" class="btn-check" id="btn-check-outlined-2" autocomplete="off"  />
                                                <label class="btn btn-outline-primary non-border "  for="btn-check-outlined-2"> 09:30 - 10:00</label><br />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="boxtime">
                                                <input type="checkbox" class="btn-check" id="btn-check-outlined-3" autocomplete="off" disabled />
                                                <label class="btn btn-outline-primary non-border "  for="btn-check-outlined-3"> 09:30 - 10:00</label><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">                            
                                        <div className="col">
                                            <div className="boxtime">
                                                09:30 - 10:00
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="boxtime">
                                                09:30 - 10:00
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="boxtime">
                                                09:30 - 10:00
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="collapse" id="collapseExample">
                                        <div className="row">                            
                                            <div className="col">
                                                <div className="boxtime">
                                                    09:30 - 10:00
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="boxtime">
                                                    09:30 - 10:00
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="boxtime">
                                                    09:30 - 10:00
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="row">                            
                                            <div className="col">
                                                <div className="boxtime">
                                                    09:30 - 10:00
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="boxtime">
                                                    09:30 - 10:00
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="boxtime">
                                                    09:30 - 10:00
                                                </div>
                                            </div>
                                        </div>  
                                    </div>     
                                    <p className="showmore">
                                        <Link  data-bs-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Xem thêm <i className="bi bi-caret-down-fill"></i>
                                        </Link>                               
                                    </p>    
                                </div>  
                             
                            </div>
                         
                                       
                                 
                        </div>
                    </div>
                </div>
           </div>
       </>
    );
}
export default Clinic;