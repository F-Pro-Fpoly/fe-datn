import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClinicUiTime from "./ClinicUiTime";

function ClinicUiContent({listDoctor = []}) {

    // const [isBooking, setIsBooking] = useState(false);

    // useEffect(() => {
    //     listDoctor.forEach((item) => {
    //         if(item.schedule_data.length > 0) {
    //             setIsBooking(true);
    //             return;
    //         }
    //     })
    // },[])

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
                    }    
                })}     
                </div>           
            </div>
        </div>
     );
}

export default ClinicUiContent;