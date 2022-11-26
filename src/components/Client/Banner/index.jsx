import "./Banner.scss";
import banner1 from "../../../image/banner-1.jpg"

import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { getListBannerNormal } from "../../../services/BannerService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Banner () {

    const [banner, setBanner]  = useState([])
    const token = useSelector(state=> state.auth.token)
    const start = async () => {
        let res = await getListBannerNormal({token})
        let data = res.data
        let dataArr = data.data
        setBanner(dataArr)
    }

    useEffect(() => {
        start()
    }, [])

    return( 
        <Carousel>

            {
                banner.map((item,index) => {
                    return(
                        <Carousel.Item key={index}>
                            <div className="banner">    
                                <div className="bongmo"></div>
                                <img src={`${process.env.REACT_APP_BE}${item.image}`}           alt="banner" />
                                <div className="text">                       
                                    <h2 className='text1' dangerouslySetInnerHTML={{__html: item.description}}></h2>           
                                    {item.button ?
                                         <Link to={item.link}><button className="btn btn-primary">{item.button}</button></Link> 
                                    : ""}
                                </div>            
                            </div>
                        </Carousel.Item>
                    )
                })
            }

 

        </Carousel>
    )
}
export default Banner;
