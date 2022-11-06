import "./Clinic.scss";
import {useEffect, useState} from 'react';
import ClinicUiContent from "./ClinicUiContent";
import ClinicUiHeader from "./ClinicUiHeader";
import { useParams } from "react-router";
import { getListSpecialistClient, getSpecialistClient } from "../../../services/SpecialistService";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
function Clinic () {
    const param = useParams();
    const token = useSelector(state => state.auth.token);
    const [specialist, setSpecialist] = useState(); 
    const [listSpecialists, setListSpecialists] = useState([]);
    const slug = param.slug;

    const start = async () =>{
        try {
            let res = await getSpecialistClient({token, slug});
            let data = res.data.data;
            setSpecialist(data);
            // let resList = await getListSpecialistClient({token, limit: 6});
            // let dataList = resList.data.data;
            // setListSpecialists(dataList);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect (()=>{
        start();
    }, []) ;

    return (
       <>
        <ToastContainer />
        <ClinicUiHeader specialist={specialist} />     
        <ClinicUiContent  />
       </>
    );
}
export default Clinic;