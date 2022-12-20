import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import loadingImg from "../../image/cute-loading.gif" ;

function Img(props) {
    // let {src} = props;
    // const [srcState, setSrcState] = useState(loadingImg);
    // useEffect(() => {
    //     if(src) {
    //         setSrcState(src);
    //     }
    //     console.log(src);
    // }, [src])
    
    return ( 
        <>
        <div  {...props}>
            <img
                style={{width: "100%", height: "100%", objectFit: "cover"}}
                src={loadingImg}
            />
        </div>
        </> 
    );
}


export default Img;