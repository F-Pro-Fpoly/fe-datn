
import { Link } from "react-router-dom";

function VaccineContent (props) {

        return (
            <section className="vaccine-content">
                <div className="container">
                    <div className="row vaccine-row">
                        {props.list.map((item,index) => {
                            return(
                                <div className="col-xl-3 col-md-6 col-12" key={index}>
                                <div className="vaccine-content-item">
                                    <div className="vaccine-content-header">
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>Nguồn gốc: {item.national_name}.</p>
                                            <p>                                           
                                            {      
                                               item.sick.map((i,v) => {
                                                    return (
                                                        <span key={v}>{i.name} &nbsp;</span> 
                                                    )                                               
                                                })
                                            }
                                          
                                            </p>
    
                                            <div className="vaccine-content-price">
                                                <span>{item.price_formated}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vaccine-content-body">
                                        <span>Phòng bệnh:
                                        <p className="mb-2">
                                        {      
                                            item.sick.map((i,v) => {
                                                return (
                                                    <span key={v}>{i.name} &nbsp;</span> 
                                                )                                               
                                            })
                                        }
                                        </p>
                                        </span>
                                        <Link to={`/vaccine/${item.slug}/${item.id}`} className="vaccine-btn" style={{marginTop:"25%"}}>
                                            Xem chi tiết
                                        </Link>
                                    </div>
                                </div>
                            </div>   
                            )
                        })}
                                        
                    </div>
                </div>
            </section>
        );
    
}

export default VaccineContent;