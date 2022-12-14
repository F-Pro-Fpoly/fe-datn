import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Await, Link } from "react-router-dom";
import { postListServiceAPI } from "../../../../services/SpecialistService";
import { get, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date, InferType, ref } from 'yup';
import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../../components/Loading/Loading";
import LoadingBtn from "../../../../components/LoadingBtn/LoadingBtn";
import { FormControlLabel, FormGroup, FormLabel, Input, Switch } from "@mui/material";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const schema = object({
    code: string().required('Mã chuyên khoa không được bỏ trống'),
    name: string().required('Tên chuyên khoa không được bỏ trống'),
    // description: string().required('Mô tả không được bỏ trống'),
 
}).required();

function AddSpecialist() {
    const token = useSelector(state => state.auth.token);
    const [loading, getLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } ,reset, setError, setValue, getValues, trigger } = useForm({
        resolver: yupResolver(schema)
    });
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [textEditer, setTextEditer] = useState('');

    const onSubmit = async data => {
        try {
            getLoading(true);
            let specialist = new FormData();
            specialist.append('name', data.name);
            specialist.append('code', data.code);
            specialist.append('description', textEditer);
            specialist.append('file', data.file[0]);
            specialist.append('slug', data.slug);
            specialist.append('status', data.status);
            specialist.append("short_description", data.short_description);
            let add = await postListServiceAPI(token,specialist);
            getLoading(false);
            reset();
            setTextEditer("");
            toast.success("Thêm chuyên khoa thành công !");
        } catch (error) {
                getLoading(false);
                let data = error.response.data;
                console.log(data);
                setError('code', { type: 'custom', message: data.code[0] });
                setError('name', { type: 'custom', message: data.username[0] });
                setError('description', { type: 'custom', message: data.username[0] });
                // errors.email.message = ;
                errors.username.message = data.username[0];
        }
    }
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    

    useEffect(() => {
        if(!selectedFile){
            setSelectedFile(undefined);
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    },[selectedFile])

    return ( 
        <div className="addSick">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
                {/* Same as */}
            <h2 className="addSick-heading">Thêm chuyên khoa</h2>
           
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập mã chuyên khoa</label>
                    <input type="text" {...register("code")}  className="form-control" placeholder="Mã chuyên khoa" />
                    <p className='text-danger'>{errors.code?.message}</p>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập tên chuyên khoa</label>
                    <input type="text"  {...register("name")} className="form-control" placeholder="Tên chuyên khoa" />
                    <p className='text-danger'>{errors.name?.message}</p>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập mô tả ngắn</label>
                    <input type="text"  {...register("short_description")} className="form-control" placeholder="Mô tả ngắn" />
                    <p className='text-danger'>{errors.name?.short_description}</p>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập mô tả</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={textEditer}
                            onChange={(event, editor) => {
                                setTextEditer(editor.data.get())
                            }}
                        />
                    {/* <p className='text-danger'>{errors.description?.message}</p> */}
                </div>


                <div className="row">
                    <FormGroup className="col-6">
                        <FormControlLabel control={<Switch defaultChecked={true} {...register("status")} />} label="Trạng thái" />
                    </FormGroup>

                    <FormGroup className="col-6">
                        <FormLabel htmlFor="file">Chọn hình ảnh</FormLabel>
                        <input onInput={(e) => onSelectFile(e)} type="file" id="file" {...register("file")} className="form-control" />
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col-6">
                        <FormLabel htmlFor="slug">Slug</FormLabel>
                        <input type="text" id="slug" {...register("slug")} className="form-control" />
                    </FormGroup>

                    <div className="col-6 ">
                        <div className="mt-4" style={{width: "200px",height:"200px", background: "gray", borderRadius: "8px", border: "1px solid black", overflow:"hidden",     }}> 
                            {selectedFile &&  <img src={preview} style={{'width': "100%","height":"100%", "objectFit": "cover"}} /> }
                        </div>
                    </div>
                </div>
                <div className="form-group my-2">
                    <button className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Thêm"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/specialist/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default AddSpecialist;