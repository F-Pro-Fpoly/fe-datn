import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getListStatuServiceAPI } from "../../../../../services/BookingService";
import Info from "./Info";
import AddIcon from '@mui/icons-material/Add';
import AddInjection from "./AddInjection";
import { Form, Modal } from "react-bootstrap";

function DetailInfo({data = [], onChange}) {
    const token = useSelector(state => state.auth.token);
    const onChangeInfo = (value) => {
        onChange(value);
    }
    const [status, setStatus] = useState([]);
    const [modalInjection, setModalInjection] = useState(false);
    const [dataInjection, setDataInjection] = useState({
        'type_name': '',
        'time_apointment': "",
    });

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
    const handleCloseInjection = () => {
        setModalInjection(false)
    }
    const handleOpenInjection = () => {
        setModalInjection(true);
    }
    const handleSubmitInjection = async (e) => {
        e.preventDefault();

        try {
            let dateReq = {
                ...dataInjection,
                'type': 're_injection',
                // ''
            };
        } catch (error) {
            if (error.response) {
                let message = error.response.data.message;
                toast(message);
                return
            }
            toast(error);
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
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                size="small"
                onClick={handleOpenInjection}
            >Thêm lịch</Button>
            <Modal
                // open={modalInjection}
                show={modalInjection}
                onHide={handleCloseInjection}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm lịch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitInjection}>
                        <Form.Group>
                            <Form.Label>Tên mũi tiêm</Form.Label>
                            <Form.Control
                                type="text"
                                value={dataInjection.type_name}
                                onChange={(e) => setDataInjection({...dataInjection, type_name: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Chọn thời gian khám</Form.Label>
                            <Form.Control 
                                type="date"
                                value={dataInjection.time_apointment}
                                onChange={(e) => setDataInjection({...dataInjection, time_apointment: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="mt-3">
                            <Button
                                variant="contained"
                                color="success"
                                type="submit"
                            >Thêm</Button>
                        </Form.Group>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
     );
}

DetailInfo.propTypes = {
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func,

}

export default DetailInfo;