import {useEffect, useRef, useState} from "react"
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { getListAllSpecialist } from "../../../../services/SpecialistService";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { setLoading } from "../../../../redux/slices/InterfaceSile";
import { getDepartmentOne } from "../../../../services/DepartmentService";

import "./UpdateDepartment.scss";

function UpdateDepartment() {
    const param = useParams();

    const SubmitForm = () => {
        alert("hello");
    }

    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    let FormRef = useRef();

    const [specailist, setSpecailist] = useState([]);
    const [department, setDepartment] = useState({
        "code": "",
        "name":"",
        "specialist_id": null,
        "description": "", 
        "active" : null,
        "docters": []
    });

    useEffect(()=>{
        const startApi = async () => {
            let id = param.id;
            dispatch(setLoading(true))
            // get all specailist
            let res = await getListAllSpecialist({token});
            let resDepartment = await getDepartmentOne({token, id});

            let data = res.data;
            setSpecailist(data.data);
            let dataDepartment = resDepartment.data.data;
            setDepartment({
                ...department,
                code: dataDepartment.code ?? null,
                name: dataDepartment.name ?? null,
                specialist_id: dataDepartment.specialist_id ?? null,
                active: dataDepartment.active ?? 0,
                description: dataDepartment.description ?? "",
                docters : dataDepartment.docters ?? []
            });
            dispatch(setLoading(false))
        }

        startApi();
    }, []);

    return ( 
        <div className="adminItem">
            <ToastContainer />
            <Form method="post" onSubmit={SubmitForm}>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" 
                             value={department.code} 
                             onChange = {(e) => setDepartment({...department, code: e.target.value})}
                             placeholder="Mã code" name="code" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={department.name} onChange = {(e) => setDepartment({...department, name: e.target.value})} placeholder="Tên phòng ban" name="name" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Chuyên khoa</Form.Label>
                            <Form.Select className="selectpicker" name="specialist_id"
                             onChange = {(e) => setDepartment({...department, specialist_id: e.target.value})}
                             value={department.specialist_id}>
                                {specailist.map((val,index) => (
                                    <option value={val.id} key={val.id}>{val.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={department.description}
                                onChange={(event, editor) => {
                                    setDepartment({...department, "description": editor.data.get()})
                                }}
                            />
                        </Form.Group>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h4>Danh sách bác sĩ</h4>
                    </div>
                    <div className="col-12">
                        {
                            department.docters.map((val,index) => (
                                <div className="row">
                                    <div className="col-8">
                                        <Form.Control 
                                            type="text"
                                            disabled
                                            className="mb-2"
                                            value={val.name}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <button className="btn">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        
                        
                    </div>
                    <div className="col-12 mt-2">
                        <div className="row">
                            <div className="col-6">
                                <Form.Control 
                                    type="text"
                                    placeholder="Nhập tên bác sĩ"
                                    className="mb-1"
                                    id="docters"
                                    name="docters"
                                    list = "docters"
                                />
                                <ul className="adminSearchWrapper"> 
                                    <li></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <Button variant="secondary">
                                    <i className="fa-solid fa-plus me-3"></i>
                                    <span>Thêm bác sĩ</span>
                                </Button>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <Form.Group className="mt-2">
                    <Button variant="primary" type="submit">Cập nhập chuyên khoa</Button>
                </Form.Group>
            </Form>
        </div>
     );
}

export default UpdateDepartment;