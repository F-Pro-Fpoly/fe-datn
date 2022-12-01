import { Button, Link as LinkMui } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Vaccine.scss"
import VaccineContent from "./VaccineContent";

function Vaccine() {

    useEffect(() => {
        document.title = "Trang vaccine";
    }, [])


    return ( 
        <div className="vaccine">
            <section className="vaccine-title">
                <div className="container">
                    <div className="d-flex justify-content-between vaccine-title-row">
                        <div className="d-flex vaccine-title-left">
                            <div className="vaccine-title-item">
                                <div className="vaccine-title-category">
                                    <button type="button">
                                        <i className="fa-solid fa-bars"></i>
                                        <span>DANH MỤC</span>
                                    </button>
                                    <ul className="vaccine-title-list">
                                        <li className="vaccine-title-li">
                                            <Link to={`/`}>Vaccine cho trẻ em</Link>
                                        </li>
                                        <li className="vaccine-title-li">
                                            <Link to={`/`}>Vaccine cho trẻ tiền học đường</Link>
                                        </li>
                                        <li className="vaccine-title-li">
                                            <Link to={`/`}>Vaccine cho trẻ vị thành niên</Link>
                                        </li>
                                        <li className="vaccine-title-li">
                                            <Link to={`/`}>Vaccine cho người trưởng thành</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="vaccine-title-item">
                                <span className="vaccine-title-h3">
                                    THÔNG TIN SẢN PHẨM VẮC XIN
                                </span>
                            </div>
                        </div>
                        <div className="d-flex vaccine-title-right">
                            <div className="vaccine-title-item" >
                                <form className="vaccine-title-search">
                                    <input type="text" className="" placeholder="Tìm kiếm tên vaccine" />
                                    <button type="button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <VaccineContent />
        </div>
     );
}

export default Vaccine;