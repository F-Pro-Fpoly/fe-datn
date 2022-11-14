import "./Vaccine.scss"

function Vaccine() {
    return ( 
        <div className="vaccine">
            <section className="vaccine-title">
                <div className="container">
                    <div className="row">
                        <div className="vaccine-title-item">
                            <div className="vaccine-title-category">
                                <button>
                                    <i className="fa-solid fa-bars"></i>
                                    <span>DANH MỤC</span>
                                </button>
                            </div>
                        </div>
                        <div className="vaccine-title-item">
                            <h3 className="vaccine-title-h3">
                                THÔNG TIN SẢN PHẨM VẮC XIN
                            </h3>
                        </div>
                        <div className="vaccine-title-item">
                            <form className="vaccine-title-search">
                                <input type="text" className="" />
                                <button type="button">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vaccine-content">

            </section>
        </div>
     );
}

export default Vaccine;