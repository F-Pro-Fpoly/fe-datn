import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../../../components/Client/Banner';
import "./HomePage.scss";
import {useDispatch} from "react-redux"
import { setNavb } from '../../../redux/slices/InterfaceSile';
import FormBookIndex from './FormBookIndex';
import Feature from './Feature';
import Introduce from './Introduce';
import WhyChoose from './WhyChoose';
import ListDoctor from './ListDoctor';
import Certificate from './Certificate';
import Policy from './Policy';
import FormBookIndexx from './FormBookIndexx';

function HomePage() {
    const dispatch = useDispatch();
    useEffect( () => {
        document.title = "Trang chủ - fpro.newweb.vn - Đặt lịch khám, tiêm vaccine trực tuyến"
        dispatch(setNavb(false))
    }, [])

    return ( 
        <>
            <Banner/>   
            <FormBookIndex />            
            <Feature/>
            <Introduce/>
            <WhyChoose/>
            {/* <ListDoctor/> */}
            <Certificate/>
            <Policy/>
            <FormBookIndexx/>
           
        </>
     );
}

export default HomePage;