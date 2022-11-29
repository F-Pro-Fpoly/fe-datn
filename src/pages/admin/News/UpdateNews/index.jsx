import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Await, Link, useParams } from "react-router-dom";
import {updateNewslist,getNewslist} from "../../../../services/NewsService";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date, InferType, ref } from 'yup';
import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../../components/Loading/Loading";
import LoadingBtn from "../../../../components/LoadingBtn/LoadingBtn";
import { FormControlLabel, FormGroup, FormLabel, Input, Switch } from "@mui/material";
import { Button, Form } from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react"
// import { InlineEditor } from "@ckeditor/ckeditor5-build-inline";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { uploadFileService } from "../../../../services/normal/FileService";
import { getListAllNewsCatgory} from "../../../../services/NewsCategory";
const schema = object({
    code: string().required('Mã chuyên khoa không được bỏ trống'),
    name: string().required('Tên chuyên khoa không được bỏ trống'),
}).required();

function UpdateSpecialist() {
    const token = useSelector(state => state.auth.token);
    const param = useParams();
    const id = param.id;
    const [loading, getLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } ,reset, setError, setValue, getValues } = useForm({
        resolver: yupResolver(schema)
    });
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [textEditer, setTextEditer] = useState('');
    const [NewsCategory, setNewsCategory] = useState([]);
    useEffect(()=>{
        const startApi = async () => {
            let res = await getListAllNewsCatgory({token});
            let data = res.data;
            setNewsCategory(data.data);
        }
        startApi();
    }, []);
    const onSubmit = async (data) => {
        try {
            getLoading(true);
            let file = new FormData();
            let fileName = null;
            if(data.file[0]){
                file.append('file', data.file[0]);
                let resFile = await uploadFileService({token, data: file});
                fileName = resFile.data.data.file_name;
            }
            let dataRes = {
                'code': data.code,
                'name': data.name,
                'category_id': data.category_id,
                'content': textEditer ?? null,
                'status': data.status,
                'featured': data.featured,
                'slug': data.slug,
                'file_name': fileName ?? null
            };

            let res = await updateNewslist({token, data: dataRes, id});
            getLoading(false);
            toast.success("Cập nhập chuyên khoa thành công !");
        } catch (error) {
                getLoading(false);
                let data = error.response.data;
                console.log(data);
                setError('code', { type: 'custom', message: data.code[0] });
                setError('name', { type: 'custom', message: data.name[0] });
                setError('description', { type: 'custom', message: data.name[0] });
                // errors.email.message = ;
                errors.username.message = data.name[0];
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
    const start = async () => {
        try {
            let res = await getNewslist({token, id});
            let data = res.data.data;
            setValue('code', data.code);
            setValue('name', data.name);
            setTextEditer(data.content);
            setValue('category_id', data.category_id);
            setValue('status', (data.status == 1) ? true : false );
            setValue('featured', (data.status == 1) ?true : false);
            setValue('slug', data.slug);
            setPreview(`${process.env.REACT_APP_BE}${data.file}`)
            console.log(getValues('status'));
        } catch (error) {
            
        }
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

    useEffect(() => {
        start();
    },[])

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
            <h2 className="addSick-heading">Cập nhập tin tức</h2>
           
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập mã tin tức</label>
                    <input type="text" {...register("code")}  className="form-control" disabled placeholder="Mã tin tức" />
                    <p className='text-danger'>{errors.code?.message}</p>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập tên tin tức</label>
                    <input type="text"  {...register("name")} className="form-control" placeholder="Tên tin tức" />
                    <p className='text-danger'>{errors.name?.message}</p>
                </div>
                <div className="row">
                    <FormGroup className="col-4">
                        <FormControlLabel  control={<Switch defaultChecked {...register("status")}/>} label="Trạng thái" />
                    </FormGroup>
                    <FormGroup className="col-4">
                            <FormLabel>Loại tin</FormLabel>
                            <Form.Select className="" name="category_id" {...register("category_id")}>
                                {NewsCategory.map((val,index) => (
                                    <option value={val.id} key={val.id}>{val.name}</option>
                                ))}
                            </Form.Select>
                     </FormGroup>
            
                     <FormGroup className="col-4">
                        <FormLabel htmlFor="file">Chọn hình ảnh</FormLabel>
                        <input onInput={(e) => onSelectFile(e)} type="file" id="file" {...register("file")} className="form-control" />
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col-4">
                        <FormControlLabel  control={<Switch  defaultChecked {...register("featured")}/>} label="Nổi bật" />
                    </FormGroup>
                    <FormGroup className="col-4">
                        <FormLabel htmlFor="slug">Slug</FormLabel>
                        <input type="text" id="slug" {...register("slug")} className="form-control" />
                    </FormGroup>
                
                    <div className="col-4 ">
                        <div className="mt-4" style={{width: "200px",height:"200px", background: "gray", borderRadius: "8px", border: "1px solid black", overflow:"hidden",     }}> 
                            {preview &&  <img src={preview} style={{'width': "100%","height":"100%", "objectFit": "cover"}} /> }
                        </div>
                    </div>
                </div>

          
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập nội dung</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={textEditer}
                            onChange={(event, editor) => {
                                setTextEditer(editor.data.get())
                            }}
                        />
                    {/* <p className='text-danger'>{errors.description?.message}</p> */}
                </div>

                <div className="form-group my-2">
                    <button className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Cập nhập"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/tin-tuc/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default UpdateSpecialist;