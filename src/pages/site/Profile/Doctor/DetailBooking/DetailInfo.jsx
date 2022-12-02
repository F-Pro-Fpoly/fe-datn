import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getListStatuServiceAPI } from "../../../../../services/BookingService";
import Info from "./Info";

function DetailInfo({data = [], onChange}) {
    const token = useSelector(state => state.auth.token);
    const onChangeInfo = (value) => {
        onChange(value);
    }
    const [status, setStatus] = useState([]);

    const start = async () => {
        try {
            let res = await getListStatuServiceAPI(token, 5);
            let data = res.data.data;
            setStatus(data);
        } catch (error) {
            if(error.response) {
                let message = error.response.data.message;
                toast.error(message);
            }
        }
    }

    useEffect(() => {
        start();
    }, []) 

    return ( 
        <div className="form-group mb-3">
            {
                data.map((item, index) => (
                    <Info
                        key={index} 
                        item={item}
                        index={index}
                        dataStatus={status}
                        onChange={onChangeInfo}
                    />
                ))
            }      
        </div>
     );
}

DetailInfo.propTypes = {
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func,

}

export default DetailInfo;