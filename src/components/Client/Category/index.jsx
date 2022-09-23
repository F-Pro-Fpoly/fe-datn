import { Link } from "react-router-dom";
import "./Category.scss"
function Category ({Catearr = []} ) {
    return(
        <div className="cate">
            {Catearr.map((item, index) =>(
                <div className="row1" key={index}>  
                   <div className="icon">
                        <Link>
                             <i className={item.icon}></i>
                        </Link>                                    
                    </div>
                    <div className="title">
                        <Link>
                        <p>{item.title}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>    
    )
}

export default Category;