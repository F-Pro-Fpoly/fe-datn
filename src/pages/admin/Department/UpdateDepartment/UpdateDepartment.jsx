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
import { getListUsersAPI, getListUsersV2_1, updateUser, updateUserByName } from "../../../../services/UserService";
import useDebounce from "../../../../hooks/useDebounce";
import { SearchCheckBox } from "../../../../components/Input";
import { Autocomplete, Box, TextField } from "@mui/material";
// import {setLoading} from "../../../../redux/slices/InterfaceSile"

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
    const [listUser, setListUser] = useState([]);

    const SubmitForm =  async (e) => {
        let id = param.id
        if(!department.name || !department.description){
            toast.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            let res = await updateDepartment({token, id, data: department});
            let message = res.data.message;
            dispatch(setLoading(false));
            toast.success(message)
        } catch (error) {
            dispatch(setLoading(false));
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
        try {
            // console.log(123);
            let id = param.id;
            dispatch(setLoading(true))
            // get all specailist
            let res = await getListAllSpecialist({token});
            let resDepartment = await getDepartmentOne({token, id});
    
            let data = res.data;
            setSpecailist(data.data);
            let dataDepartment = resDepartment.data.data;
            // console.log(dataDepartment);

            
            setDepartment(prev => ({ ...prev,
                name: dataDepartment.name,
               code: dataDepartment.code,
               name: dataDepartment.name,
               specialist_id: dataDepartment.specialist_id,
               active: dataDepartment.active ?? 0,
               description: dataDepartment.description,
               docters : dataDepartment.docters }));

            // console.log(department);

            let resListUser = await getListUsersV2_1({token, search: {'role_code': "doctor", 'specailist_id': dataDepartment.id}});
            let dataListUser = resListUser.data.data;
            dataListUser = dataListUser.map(item => {
                return {
                    'id': item.id,
                    'username': item.username,
                    'name': item.name,
                    'email': item.email
                }
            })
            setListUser(dataListUser);
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
            if(error.response) {
                let message = error.response.data.message;
                toast.error(message);
            }
        }
    }
    useEffect(()=>{

        startApi();
    }, []);

    // useEffect(()=>{
    //     const handleSearch = async () => {
    //         let res = await getListUsersAPI(token, {'username': searchDebounce, 'role_code': "doctor", "department_id": "safjdsgjk"});
    //         let data = res.data;
    //         setListSearch(data.data);
    //     }
    //     handleSearch();
    // }, [searchDebounce]);

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
                             placeholder="Mã code" name="code" 
                            readOnly
                            />        
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
                            <Form.Label>Mô tả</Form.Label>
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
                    {/* <div className="col-12">
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
                    </div> */}
                     <div className="col-4">
                        <Form.Group>
                            {/* <Autocomplete 
                                label="Danh sách bác sĩ của phòng"
                                id="grouped-demo"
                                getOptionLabel={(option) => option.name}
                                options={listUser}
                                onChange={(value) => {
                                    // let arrHandle = value.map(item=>{
                                    //     return i
                                    // });
                                    console.log(value);
                                    // setDataVaccine({...dataVaccine, 'sick_ids': arrHandle});
                                    // setSick(value)
                                }}
                                value={department.docters}
                                // getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField {...params} label="Chọn bác sĩ" />}
                            /> */}
                            <Autocomplete
                                multiple
                                id="tags-readOnly"
                                options={listUser}
                                // defaultValue={[top100Films[12].title, top100Films[13].title]}
                                renderInput={(params) => {
                                    // console.log(params)
                                    
                                    return <TextField {...params} label="Bác sĩ" placeholder="Chọn bác sĩ" />
                                }}
                                onChange={(e, value) => {
                                    setDepartment({...department, docters: value});
                                }}
                                renderOption={(props, option) => (
                                    <Box
                                        component="li"
                                        {...props}
                                    >
                                        {option.username} - {option.name}
                                    </Box>
                                )}
                                value={department.docters}
                                // filterOptions={(options, state) => {

                                // }}
                                getOptionLabel={(option) => option.username}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                            />
                        </Form.Group>
                        
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