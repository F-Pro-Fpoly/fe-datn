import "./Clinic.scss";
import {useEffect, useState} from 'react';
import ClinicUiContent from "./ClinicUiContent";
import ClinicUiHeader from "./ClinicUiHeader";
import { useParams } from "react-router";
import { getListSpecialistClient, getSpecialistClient } from "../../../services/SpecialistService";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { getListUsersV2 } from "../../../services/UserService";
import {setLoading} from "../../../redux/slices/InterfaceSile";

function Clinic () {
    const param = useParams();
    const token = useSelector(state => state.auth.token);
    const [specialist, setSpecialist] = useState(); 
    const [listDoctor, setListDoctor] = useState([]);
    const slug = param.slug;
    const dispatch = useDispatch();
    const start = async () =>{
        try {
            dispatch(setLoading(true));
         
            let res = await getSpecialistClient({token, slug});
            let data = res.data.data;
            setSpecialist(data);
            let resDoctor = await getListUsersV2({token, search:{
                'role_code' : 'doctor',
                'specailist_slug': slug,
                'add_time_slot': 1,
                'interval': "M"
            }});
            let dataDoctor = resDoctor.data.data;
            setListDoctor(dataDoctor);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            toast.error(error.response.data.message)
        }
    }

    useEffect (()=>{
        start();
    }, []);
    return (
       <>

    
        <ToastContainer />
        <ClinicUiHeader specialist={specialist} />     
        <ClinicUiContent listDoctor={listDoctor} />
       </>
    );
}
export default Clinic;