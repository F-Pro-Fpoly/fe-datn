import { Link } from "react-router-dom"
import "./Box.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';

import { getlistSpecialistFeatureAPI } from "../../../../services/normal/SpecialistService";
import Loading from "../../../../components/Loading/Loading";
import { setNavb } from "../../../../redux/slices/InterfaceSile";
import {useDispatch} from "react-redux"
import { useEffect, useState } from "react";
import React, { Component } from "react";
import Slider from "react-slick";

function Feature () {

    const [ListFeature, getFeatureClient] = useState([]);
    const [loading, getLoading] = useState(false);
    const dispatch = useDispatch();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }
        ]
      };

    useEffect(() => {
      dispatch(setNavb(true))
        const start = async () => {
            getLoading(true)
            getFeatureClient([])
            let res = await getlistSpecialistFeatureAPI()
            let data = res.data
            let dataArr = data.data

            getLoading(false)
            getFeatureClient(dataArr)
         
        }

        start()
    
    }, [])
    

    return ( 
  
        <Container>
            <Row>
                <Col>
                    <div className="infoOutstanding">
                        <span className="service">DỊCH VỤ <span className="outstanding">NỔI BẬT</span></span><br />
                        <span>TẠI PHÒNG KHÁM FPRO</span><br />
                       <div className="line"></div>
                    </div>
                </Col>        
            </Row>
            <Row>
            <Slider {...settings}>  
                {       
                    ListFeature.map((item,index) => {
                        return (
                            <div className="col-3"  key = {index}>       
                                           
                                <div className="image">
                                    <Figure.Image
                                        alt={item.name}
                                        src={item.thumbnail_name}
                                    />
                                </div>
                                <div className="infoSpecial">
                                    <Figure.Caption>
                                        <b><p className="infoSpecial-title">{item.name}</p></b>
                                        <p className="des">{item.description} </p>
                                    </Figure.Caption>
                                </div>
                               
                            </div>
                        )
                    })
                    
                }
                 </Slider>  
                
              
            </Row>
            {
            loading && <Loading />
            }
        </Container>        
    )

}
export default Feature;