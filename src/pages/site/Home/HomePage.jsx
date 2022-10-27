import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../../../components/Client/Banner';
import BoxPopular from '../../../components/Client/BoxPopular';
import "./HomePage.scss";
import {useDispatch} from "react-redux"
import { setNavb } from '../../../redux/slices/InterfaceSile';

function HomePage() {
    // let user = useSelector((state => state.auth.user));

    const [box, SetBox] = useState();
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(setNavb(false))
        let Arr = [
            {
                "image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6",
                "title":"Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn", 
                "content": "Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân",
                "tag": "Ưu đãi",
            },
            {
                "image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6",
                "title":"Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn", 
                "content": "Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân",
                "tag": "Ưu đãi",
            },
            {
                "image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6",
                "title":"Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn", 
                "content": "Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân",
                "tag": "Ưu đãi",
            },
            {
                "image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA128QGB.img?w=640&h=426&m=6",
                "title":"Chương trình ưu đãi tháng 9 tại Bệnh viện Bảo Sơn", 
                "content": "Khám sức khỏe tổng quát là cách tốt nhất để nắm bắt tình hình sức khỏe của bản thân",
                "tag": "Ưu đãi",
            }
        ];
        SetBox(Arr)
    }, [])

    return ( 
        <>
         <Banner/>   
            <div className="container">                     
                <BoxPopular/>
            </div>        

           
        </>
     );
}

export default HomePage;