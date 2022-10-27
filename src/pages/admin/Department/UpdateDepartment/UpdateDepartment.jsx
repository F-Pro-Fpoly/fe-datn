import {useEffect, useRef, useState} from "react"
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { getListAllSpecialist } from "../../../../services/SpecialistService";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { setLoading } from "../../../../redux/slices/InterfaceSile";
import { getDepartmentOne, updateDepartment } from "../../../../services/DepartmentService";

import "./UpdateDepartment.scss";
import { getListUsersAPI, updateUser, updateUserByName } from "../../../../services/UserService";
import useDebounce from "../../../../hooks/useDebounce";

function UpdateDepartment() {
    const param = useParams();
    const [search, setSearch] = useState('');
    const [listSearch, setListSearch] = useState([]);
    const token = useSelector(state => state.auth.token);
    const [doctor, setDoctor] = useState("");
    let searchDebounce = useDebounce(doctor, 500);
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

    const SubmitForm =  async (e) => {
        let id = param.id
        e.preventDefault();
        try {
            let res = await updateDepartment({token, id, data: department});
            let message = res.data.message;
            toast.success(message)
        } catch (error) {
            console.log(error);
        }
    }

    const updateRole = () =>{
        let department_id = param.id;
        let data = {
            "doctor_name": doctor,
        };
        setDepartment({...department, docters: [...department.docters, data]});
        setDoctor("");
    }

    const deleteDoctor = async (name) => {
        // let department_id = param.id;
        // console.log(name);return;
        let docters = department.docters;

        docters = docters.filter((item, index)=>{
            return item.doctor_name != name;
        })

        setDepartment({...department, docters: docters});
    }

    

    

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
    useEffect(()=>{

        startApi();
    }, []);

    useEffect(()=>{
        const handleSearch = async () => {
            let res = await getListUsersAPI(token, {'username': searchDebounce, 'role_code': "doctor", "department_id": "safjdsgjk"});
            let data = res.data;
            setListSearch(data.data);
        }
        handleSearch();
    }, [searchDebounce]);

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
                                <div className="row" key={index}>
                                    <div className="col-8">
                                        <Form.Control 
                                            type="text"
                                            disabled
                                            className="mb-2"
                                            value={val.doctor_name}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <button className="btn" type="button" onClick={()=>deleteDoctor(val.doctor_name)}>
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
                                <Form.Group>
                                    <Form.Control list="data" value={doctor} onChange={(e) => setDoctor(e.target.value)}/>
                                    <datalist id="data" style={{"width": "100%"}}>
                                        {listSearch.map((val,index) => (
                                            <option value={val.username} key={index} />
                                        ))}
                                    </datalist>
                                </Form.Group>
                                
                            </div>
                            <div className="col-6">
                                <Button variant="secondary" onClick={updateRole}>
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