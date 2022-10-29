import "./GlobalStyle.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function GlobalStyle({children}) {
    return (
        <>
            {children}
        </>
    );  
}

export default GlobalStyle;