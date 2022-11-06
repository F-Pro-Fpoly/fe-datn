import { Link } from "react-router-dom";

function ClinicUiContent({listDoctor = []}) {
    return ( 
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
                                            <input type="checkbox" className="btn-check" id="btn-check-outlined-1" autoComplete="off"  />
                                            <label className="btn btn-outline-primary non-border "  htmlFor="btn-check-outlined-1"> 09:30 - 10:00</label><br />
                                        </div>
                                    </div>
                                    <div className="col">
                                    <div className="boxtime">
                                            <input type="checkbox" className="btn-check" id="btn-check-outlined-2" autoComplete="off"  />
                                            <label className="btn btn-outline-primary non-border "  htmlFor="btn-check-outlined-2"> 09:30 - 10:00</label><br />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="boxtime">
                                            <input type="checkbox" className="btn-check" id="btn-check-outlined-3" autoComplete="off" disabled />
                                            <label className="btn btn-outline-primary non-border "  htmlFor="btn-check-outlined-3"> 09:30 - 10:00</label><br />
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
     );
}

export default ClinicUiContent;