import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

import { updateInjectionInfo } from "../../../../../services/InjectionInfo";
import { uploadFileService } from "../../../../../services/normal/FileService";

function Info({item, index, dataStatus = [], onChange}) {
    const [isUpdate, setIsUpdate] = useState(true);
    const [dataItem, setDataItem] = useState(item);
    const [file, setFile] = useState();
    const token = useSelector(state => state.auth.token);
    const check = useSelector(state => state.auth.user.role_id);
    const handleIsUpdate = (is_update) => {
        setIsUpdate(is_update)
    }

    const updateInjection = async () => {
        try {
            // if(!dataItem.description){
            //     throw 'Vui lòng nhập mô tả';
            // }

            let dataReq = {
                'booking_id': dataItem.booking_id,
                'id': dataItem.id,
                'status_id': dataItem.status_id,
                'description': dataItem.description
            };

            if(file) {
                let fromDataFile = new FormData();
                fromDataFile.append('file', file);
                let resFile = await uploadFileService({token, data: fromDataFile});
                let file_name = resFile.data.data.file_name;
                
                dataReq = {...dataReq, file_new: file_name};
            }

            let res = await updateInjectionInfo({token, data: dataReq});
            let message = res.data.message;
            toast.success(message);
            setIsUpdate(true);
            onChange(true);
            return;
        } catch (error) {
            
            if(error.response) {
                let message = error.response.data.message;
                toast.error(message);
                return
            }
            toast.error(error)
        }
    }

    useEffect(() => {
        if(!dataItem){
            setDataItem(item)
        }
    }, [item]);




    return ( 
        isUpdate ? 
        <div className="card shadow p-2 my-2" key={index}>

            <div className="row">
                <div className="col-4">
                    <span className="me-2 fs-5 fw-semibol">
                        {item.type_name}
                    </span>
                </div>
                <div className="col-8">
                    <p>
                        <span className="me-2">Ngày: {item.time_apointment}</span>
                        {
                           ( item.status_code == 'NEWVACCINE') && <span className="text-warning">{item.status_name}</span>
                        }
                        {
                           ( item.status_code == 'COMPLETEDVACCINE') && <span className="text-success">{item.status_name}</span>
                        }
                        {
                           ( item.status_code == 'CANCELEDVACCINE') && <span className="text-danger">{item.status_name}</span>
                        }
                        {/* <span className="text-danger">{item.status_name}</span> */}

                        
                        <Button variant="text" onClick={()=>handleIsUpdate(false)}>Xem chi tiết</Button>
                    </p>
                </div>
            </div>
        </div>
        :
        <div className="card shadow p-2 my-2" key={index}>
            <div className="row">
                <div className="col-12">
                    <span className="me-2 fs-5 fw-semibol">
                        {dataItem.type_name}
                    </span>
                </div>
                <div className="col-12 mt-3">
                   
                    <div className="row align-items-end">
                        <div className="col-4">
                            <span className="me-2">Ngày: {dataItem.time_apointment}</span>
                            <Form.Select defaultValue={dataItem.status_id} onChange={(e) => setDataItem({...dataItem, status_id: e.target.value})}
                            disabled = {check != 2 ? true : false}
                            >
                                <option value="">--Chọn--</option>
                                {
                                    dataStatus.map((item, index) =>(
                                        <option value={item.id} key={index}>{item.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                                

                                {check != 2 ? 

                                <div className="col-4">
                                    {
                                         dataItem.file_id ?   <a href={`${process.env.REACT_APP_BE}${ dataItem.file_link}` }
                                         className="btn btn-primary">Tải file</a>  : ""
                                    }
                           
                                </div>
                                :
                                <div className="col-4">
                                <Form.Control
                                    type="file"
                                    onChange={(e) => {
                                        setFile(e.target.files[0])
                                    }}
                                />
                            </div>
                            }

                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <textarea 
                        name="" 
                        className="form-control" id="" cols="30" rows="10"
                        value={dataItem.description}
                        placeholder="Chú thích"
                        disabled={check != 2 ? true : false}
                        onChange={(e) => {
                            setDataItem({...dataItem, description: e.target.value})
                        }}
                    ></textarea>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                        {check != 2 ? 
                           <Button variant="text" onClick={()=>handleIsUpdate(true)}>Thu gọn</Button> :
                    <Button 
                        variant="contained" color="success" size="small"
                        onClick={updateInjection}
                    >Xác nhận
                    </Button>    
                    }
                </div>
            </div>
        </div>
     );
}
Info.propTypes = {
    onChange: PropTypes.func,
}

export default Info;