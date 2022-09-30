import { Link } from "react-router-dom";
import "./NavBarItem.scss";

function NavBarItem({name, dropdownArr = [], id, icon, countTitle, to}) {
    let aAttributes = dropdownArr.length > 0 ? {
        'data-bs-toggle': "collapse", href: `#${id}`, role: "button", "aria-expanded": "false", "aria-controls": `${id}`
    } : '';
    return ( 
        <div className="navBarItem">
            {to ? <Link to={to} className="navBarItem-head">
                <div className="navBarItem-left">
                {icon && <i className={icon}></i>} <span>{name}</span>
                </div>
                {countTitle && 
                <div className="navBarItem-count">
                    {countTitle}
                </div>}
            </Link>: (
                <a className="navBarItem-head"
                {...aAttributes}
                >
                <div className="navBarItem-left">
                    {icon && <i className={icon}></i>} <span>{name}</span>
                </div>
                {countTitle && 
                <div className="navBarItem-count">
                    {countTitle}
                </div>}</a>
            )}
            
            {
                dropdownArr.length > 0 && 
                <ul className="navBarItem-dropdown collapse" id={id}>
                    {dropdownArr.map((item, index)=> 
                    <li key={index} className="navBarItem-dropdown-item">
                        <Link to={item.to} className="navBarItem-dropdown-link">{item.name}</Link>
                    </li>)}
                </ul>
            }
        </div>
     );
}

export default NavBarItem;