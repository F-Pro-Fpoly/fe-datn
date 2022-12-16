
import { useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

function VaccineContent (props) {
    const navigate = useNavigate();
    const is_first_render = useRef(false);
    const handlePageClick =  (page1) => {
        page1 = page1.selected
        page1 = page1 + 1 ;
        props.onchangePage(page1);
    }


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
                                    <span >Phòng bệnh:
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
                                    <Link to={`/vaccine/${item.slug}/${item.id}`} className="vaccine-btn" style={{marginTop:"15%"}}>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        </div>   
                        )
                    })}
                                    
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        {props.paginate && (
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                onClick={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={props.paginate.total_pages ?? 0}
                                previousLabel="<"
                                className="pagination"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                activeClassName="active"
                                previousClassName="page-item"
                                nextClassName="page-item"
                                previousLinkClassName="page-link"
                                nextLinkClassName="page-link"
                                // initialPage={props.paginate.current_page ?? 1}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
    
}

VaccineContent.propTypes = {
    paginate: PropTypes.array,
    list: PropTypes.array,
    onchangePage: PropTypes.func
};

export default VaccineContent;