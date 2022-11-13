import "./DropdownMenu.scss";

function DropdownMenu({children, id, className = ""}) {
    return ( 
        <div className={"navBarTop-dropdown dropdown-menu " + className} aria-labelledby={id}>
            {children}
        </div>
     );
}

export default DropdownMenu;