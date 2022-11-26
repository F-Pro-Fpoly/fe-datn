import { Box, Button, Chip, Stack } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import CustomizedHook from "../../../components/Input/CustomizedHook/CustomizedHook";
import { getListServiceV2 } from "../../../services/SicksService";
import { listVaccineCategory } from "../../../services/VaccineCategory";

function AddVaccine() {
    const token = useSelector(state => state.auth.token);
    const [arraySick, setArraySick] = useState([]);
    const [arrayCate, setArrayCate] = useState([]);
    const [dataVaccine, setDataVaccine] = useState({
        'code': '',
        'name': '',
        'slug': '',
        price: 0,
        sick_ids: [],
        category_ids: []
    });

    async function start () {
        try {
            let res = await getListServiceV2({token, search:{
                is_active: 1
            }});
            let data = res.data.data;
            let dataHandle = data.map((item) => {
                return{
                    'title': item.name,
                    'id': item.id
                }
            })
            let resCate = await listVaccineCategory({token})
            let dataCate = resCate.data.data;
            let datCateHandle = dataCate.map((item=>{
                return {
                    'title': item.name,
                    id: item.id
                }
            }))
            setArraySick(dataHandle);
            setArrayCate(datCateHandle);
        } catch (error) {
            if(error.response){
                let message = error.response.data.message;
                toast.error(message)
                return;
            }
            toast.error(error);
            return;
        }
    }

    useEffect(()=>{
        start();
    }, [])

    return ( 
        <div className="addVaccine">
            <ToastContainer />
            <h3>THÊM VACCINE</h3>
            <Form className="adminItem">
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Code" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Tên vaccine" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Label>Slug</Form.Label>
                        <Form.Control placeholder="Nhập slug" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Giá</Form.Label>
                            <Form.Control type="number" placeholder="Nhập giá" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <CustomizedHook 
                                label="Danh mục bệnh"
                                options={arraySick}
                                onChangeInput={(value) => {
                                    let arrHandle = value.map(item=>{
                                        return item.id
                                    });
                                    setDataVaccine({...dataVaccine, 'sick_ids': arrHandle});
                                }}
                            />
                        </Form.Group>
                        
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <CustomizedHook 
                                label="Danh mục vaccine"
                                options={arrayCate}
                                onChangeInput={(value) => {
                                    let arrHandle = value.map(item=>{
                                        return item.id
                                    });
                                    setDataVaccine({...dataVaccine, 'category_ids': arrHandle});
                                }}
                            />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Hình ảnh</Form.Label>
                            
                        </Form.Group>
                    </div>
                </div>
            </Form>
        </div>
     );
}

export default AddVaccine;