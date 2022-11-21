import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";   
import { Editor } from '@tinymce/tinymce-react';
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import SearchInput from "../../../../components/admin/SearchInput/SearchInput";
import useDebounce from "../../../../hooks/useDebounce";
import { useEffect } from "react";
import Select from "react-select";
import {createVaccineCategory, listVaccineCategory} from "../../../../services/VaccineCategory"
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function AddCateVaccine({handleHideModel, handleShowModel, startList}) {
    const token = useSelector(state => state.auth.token);
    const [dataVaccine, setDataVaccine] = useState({
        'code': '',
        'name': '',
        'parent': {
            'parent_id': '',
            'parent_name': ''
        },
        'short_description': '',
        'description': '',
        'active': true,
        'slug': ''
    });
    const [optionParentCategory, setOptionParentCategory] = useState([]);

    const editorRef = useRef(null);
    // const [textEditer, setTextEditer] = useState('');



    const onSubmitForm = async (e) =>{
        e.preventDefault();

        try {
            let res = await createVaccineCategory({token, data: dataVaccine});
            let message = res.data.message;
            toast.success(message);
            setDataVaccine({
                ...dataVaccine,
                'code': '',
                'name': '',
                'parent': {
                    'parent_id': '',
                    'parent_name': ''
                },
                'short_description': '',
                'description': '',
                'active': true,
                'slug': ''
            })
            handleHideModel();
            startList();
        } catch (error) {
            
        }
    }
    // const handleOnChangeParentInput = (e) =>{
    //     setDataVaccine(
    //         {
    //             ...dataVaccine, 
    //             parent: {
    //                 ...dataVaccine.parent,
    //                 parent_name: e.target.value
    //             }
    //     })
    // }
    // const handleOnchageSearch = (data) => {
    //     setDataVaccine(
    //         {
    //             ...dataVaccine, 
    //             parent: {
    //                 ...dataVaccine.parent,
    //                 parent_id: data.id ?? null,
    //                 parent_name: data.value ?? null
    //             }
    //     })
    // }
    const handleOnChangeParentCate = async (data) => {
        setDataVaccine({
            ...dataVaccine, 
            parent:{
                ...dataVaccine.parent,
                parent_id: data.value,
                parent_name: data.label
            }
        })
    }
    const getAPIParent = async () =>{
        try {
           let res = await listVaccineCategory({token})
           let data = res.data.data;
           let dataIsHandle = data.map((item, index) => {
            return {
                "label": item.name,
                'value': item.id
            }
           });
           dataIsHandle = [...dataIsHandle, {
            label: "Trống",
            value: 0
           }]
           setOptionParentCategory(dataIsHandle);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getAPIParent()
    }, [])


    return ( 
        <div className="add-cate-vaccine">
            <ToastContainer />
            <Form onSubmit={onSubmitForm}>
                <div className="row">
                    <Form.Group className="col-4">
                        <Form.Label className="form-lable-fro">Code</Form.Label>
                        <Form.Control 
                            required 
                            type="text"
                            value={dataVaccine.code}
                            onChange={(e) => setDataVaccine({...dataVaccine, code: e.target.value})}  
                        />
                    </Form.Group>
                    <Form.Group className="col-4">
                        <Form.Label className="form-lable-fro">Name</Form.Label>
                        <Form.Control 
                            required 
                            type="text" 
                            value={dataVaccine.name}
                            onChange={(e) => setDataVaccine({...dataVaccine, name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="col-4 position-relative">
                        <Form.Label className="form-lable-fro">Danh mục cha</Form.Label>
                        <Select 
                            options={optionParentCategory}
                            value={
                                {
                                    value: dataVaccine.parent.parent_id,
                                    label: dataVaccine.parent.parent_name
                                }
                            }
                            onChange={handleOnChangeParentCate}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="col-12">
                        <Form.Label className="form-lable-fro">Mô tả ngắn</Form.Label>
                        <textarea 
                            name="" 
                            required 
                            id="" 
                            cols="30" 
                            rows="5" 
                            className="form-control"
                            value={dataVaccine.short_description}
                            onChange={(e) => setDataVaccine({...dataVaccine, short_description: e.target.value})}
                        ></textarea>
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="col-12">
                        <Form.Label className="form-lable-fro">Mô tả</Form.Label>
                        <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            onInit={(evt, editor) => editorRef.current = editor}
                            value={dataVaccine.description}
                            onChange={(event, editor) => {
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
                <div className="row">
                    <FormGroup className="col-4">
                        <FormControlLabel
                         control={<Switch
                         checked={dataVaccine.active}
                         onChange={(e) => setDataVaccine({...dataVaccine, active: e.target.checked})}
                        //  inputProps={{ 'aria-label': 'controlled' }}
                        />} label="Kích hoạt" />
                    </FormGroup>
                    <Form.Group className="col-4">
                        <Form.Label className="form-lable-fro">Slug</Form.Label>
                        <Form.Control 
                            type="text"
                            value={dataVaccine.slug}
                            onChange={(e) => setDataVaccine({...dataVaccine, slug:e.target.value})}
                        />
                    </Form.Group>
                </div>
                <div className="row my-3">
                    <Form.Group className="col-12">
                        <Button type="submit">Thêm</Button>
                    </Form.Group>
                </div>
            </Form>
        </div>
     );
}

export default AddCateVaccine;