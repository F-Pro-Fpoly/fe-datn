
import "./Box.scss"
import React from "react";
import { Link } from "react-router-dom";

function ListDoctor () {



    return ( 
  
        <div className="container-fluid">  
            <div className="LD">
                <div className="infolistDoctor">
                    <span className="service">ĐỘI NGŨ <span className="outstanding">BÁC SĨ</span></span><br />
                    <span>TU NGHIỆP TẠI NGA VÀ ĐẠI HỌC Y HÀ NỘI</span><br />
                    <div className="line"></div>
                </div>      
            
                <div className="listDoctor">
                    <div className="aaaa">
                        
                    </div> 
                    <div className="bbbb">

                    </div>               
                </div> 
            
                <div className="button_popup">
                    <Link className="btn_type3">
                        <p className="text_1">HẸN LỊCH THĂM KHÁM</p>
                        <p className="text_2">KHÔNG MẤT PHÍ!</p>
                    </Link>
                </div>
            </div>
        </div>
       
         
    )

}
export default ListDoctor;