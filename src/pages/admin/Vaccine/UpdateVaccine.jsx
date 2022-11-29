import { Box, Button, Chip, FormControlLabel, FormGroup, FormLabel, Stack, Switch } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import CustomizedHook from "../../../components/Input/CustomizedHook/CustomizedHook";
import { getListServiceV2 } from "../../../services/SicksService";
import { listVaccineCategory } from "../../../services/VaccineCategory";
import { Editor } from '@tinymce/tinymce-react';
import { uploadFileService } from "../../../services/normal/FileService";
import { createVaccineService, getVaccineApi, updateVaccine } from "../../../services/VaccineService";
import AsyncSelect from 'react-select/async';
import { getNationalService } from "../../../services/NationalService";
import { useNavigate, useParams } from "react-router";
import { SearchCheckBox } from "../../../components/Input";

function UpdateVaccine() {
    const token = useSelector(state => state.auth.token);
    const [arraySick, setArraySick] = useState([]);
    const [arrayCate, setArrayCate] = useState([]);
    const [dataVaccine, setDataVaccine] = useState({
        'code': '',
        'name': '',
        'slug': '',
        price: 0,
        sick_ids: [],
        category_ids: [],
        is_active: true,
        description: '',
        'national_id': '',
        national_name: ''
    });
    const [imgAvatar, setImgAvatar] = useState();
    const [selectedImg, setSelectedImg] = useState();
    const [arrayNational, setArrayNational] = useState([]);
    const navigate = useNavigate();
    const param = useParams();
    const id = param.id;
    const [sick, setSick] = useState([]);
    const [category, setCategory] = useState([]);
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

            let resNational = await getNationalService({token});
            let dataNatinal = resNational.data.data;
            let dataNationalHandle = dataNatinal.map((item)=>{
                return {
                    "label": item.name,
                    "value": item.id
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
            setArrayNational(dataNationalHandle);
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

    async function start2 () {
        try {
            let res = await getVaccineApi({token, id});
            let data = res.data.data;
            setDataVaccine({
                ...dataVaccine,
                'code': data.code,
                name: data.name,
                slug: data.slug,
                price: Number(data.price),
                is_active: data.is_active == 1 ? true : false,
                national_id: data.national_id,
                national_name: data.national_name,
                description: data.description,
                sick_ids: data.sick_ids,
                category_ids: data.category_ids
            });
            let sick = data.sick;
            let category = data.category;
            
            sick = sick.map((item)=>{
                return {
                    'title': item.name,
                    'id': item.id
                }
            });
            category = category.map((item) => {
                return {
                    'title': item.name,
                    'id': item.id
                }
            })
            setSick(sick)
            setCategory(category)
            setSelectedImg(data.img_link)
        } catch (error) {
            if(error.response) {
                let message = error.response.data.message;
                toast.error(message);
                return
            }
            toast.error(error);
        }
    }

    function handleImgChange (e) {
        if (e.target.files && e.target.files.length > 0) {
            let imgObj = e.target.files[0];
            setImgAvatar(imgObj);
            const objUrl = URL.createObjectURL(imgObj);
            setSelectedImg(objUrl);
        }
    }

    useEffect(()=>{
        start();
        start2();
    }, [])

    async function handleSubmitForm (e) {
        e.preventDefault();
        // uploadfile
        try {
            let img_name = undefined;
            if(imgAvatar){
                let formData = new FormData();
                formData.append('file', imgAvatar)
                let resUpload = await uploadFileService({token, data: formData});
                img_name = resUpload.data.data.file_name;
            }

            let res = await updateVaccine({token, id, data:{
                ...dataVaccine,
                'img_link': img_name ?? null
            }})

            let message = res.data.message;
            toast.success(message);
            setDataVaccine({
                'code': '',
                'name': '',
                'slug': '',
                price: 0,
                sick_ids: [],
                category_ids: [],
                is_active: true,
                description: ''
            })
            setTimeout(() => {
                navigate("/admin/vaccine/list")
            }, 2000)
        } catch (error) {
            // hadle errr
            if(error.response) {
                toast.error(error.response.data.message)
            }
        }
    }

    return ( 
        <div className="addVaccine">
            <ToastContainer />
            <h3>CẬP NHẬP VACCINE</h3>
            <Form className="adminItem" onSubmit={handleSubmitForm}>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <Form.Control 
                                disabled
                                type="text" 
                                placeholder="Code" 
                                value={dataVaccine.code}
                                onChange={(e) => setDataVaccine({...dataVaccine, code: e.target.value})}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Tên vaccine" 
                                value={dataVaccine.name}
                                onChange={(e) => setDataVaccine({...dataVaccine, name: e.target.value})}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Label>Slug</Form.Label>
                        <Form.Control 
                            placeholder="Nhập slug" 
                            type="text" 
                            value={dataVaccine.slug}
                            onChange={(e) => setDataVaccine({...dataVaccine, slug: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Giá</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Nhập giá"
                                value={dataVaccine.price}
                                onChange={(e) => setDataVaccine({...dataVaccine, price: e.target.value})}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <SearchCheckBox 
                                label="Danh mục bệnh"
                                options={arraySick}
                                onChange={(value) => {
                                    let arrHandle = value.map(item=>{
                                        return item.id
                                    });
                                    setDataVaccine({...dataVaccine, 'sick_ids': arrHandle});
                                    setSick(value)
                                }}
                                value={sick}
                            />
                        </Form.Group>
                        
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <SearchCheckBox 
                                label="Danh mục vaccine"
                                options={arrayCate}
                                onChange={(value) => {
                                    let arrHandle = value.map(item=>{
                                        return item.id
                                    });
                                    setDataVaccine({...dataVaccine, 'category_ids': arrHandle});
                                    setCategory(value)
                                }}
                                value={category}
                            />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={handleImgChange}
                                className="mb-2"
                            />
                            {selectedImg && <img src={selectedImg} alt="" width={`200px`} />}
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <FormGroup className="d-flex justify-content-center align-items-center" style={{height: "100%"}}>
                            <FormControlLabel 
                                label="Kích hoạt"
                                control={<Switch 
                                    checked={dataVaccine.is_active}
                                    onChange={(e) => setDataVaccine({...dataVaccine, is_active: e.target.checked})} 
                                />} 
                            />
                        </FormGroup>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Quốc gia</Form.Label>
                            <AsyncSelect 
                                loadOptions={arrayNational}
                                onChange={(data) => setDataVaccine({...dataVaccine, national_id: data.value})}
                                styles={{
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        zIndex: 9999
                                    })
                                }}
                                value={{
                                    'label': dataVaccine.national_name,
                                    'value': dataVaccine.national_id
                                }}
                            />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <Form.Group className="col-12">
                        <Form.Label className="form-lable-fro">Mô tả</Form.Label>
                        <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            value={dataVaccine.description}
                            onEditorChange={(event, editor) => {
                                setDataVaccine({...dataVaccine, description: editor.getContent()})
                            }}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </Form.Group>
                </div>
                <div className="row my-3" >
                    <div className="col-4">
                        <Form.Group>
                        <Button variant="contained" color="primary" type="submit">Cập nhập Vaccine</Button>
                        </Form.Group>
                    </div>
                </div>
            </Form>
        </div>
     );
};
export default UpdateVaccine;