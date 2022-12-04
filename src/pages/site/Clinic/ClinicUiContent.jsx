import { Link } from "react-router-dom";
import ClinicUiTime from "./ClinicUiTime";

function ClinicUiContent({listDoctor = []}) {

    return ( 
        <div className="content">
            <div className="container">
                <div className="content-wrapper">
                {listDoctor.map((item, index) => {
                    if(item.schedule_data.length > 0){
                        return(
                            <div className="boxcontent" key={index}>
                                 <ClinicUiTime dataItem={item} />
                             </div>
                         )
                    }else{
                        return(
                            <div className="boxcontent" >
                                <h3>Hiện tại chuyên khoa chưa có lịch khám cho hôm nay</h3>
                            </div>
                        )
                    }
                })}     
                </div>           
            </div>
        </div>
     );
}

export default ClinicUiContent;