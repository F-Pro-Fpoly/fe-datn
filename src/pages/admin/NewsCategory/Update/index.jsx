import { useEffect, useRef,useState } from 'react';
import {useParams} from "react-router-dom"
import {getNewsCatgorylist} from "../../../../services/NewsCategory";
import Loading from '../../../../components/Loading/Loading';
import { FormControlLabel, FormGroup, FormLabel, Input, Switch } from "@mui/material";
import LoadingBtn from "../../../../components/LoadingBtn/LoadingBtn";
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import { toast,ToastContainer } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date, InferType, ref } from 'yup';

import {updateNewsCatgory} from "../../../../services/NewsCategory"
const schema = object({
  code: string().required('Mã chuyên khoa không được bỏ trống'),
  name: string().required('Tên chuyên khoa không được bỏ trống'),
}).required();

function UpdateNewsCategory() {
  const token = useSelector(state => state.auth.token);
    const param = useParams();
    const id = param.id;
    const [loading, getLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } ,reset, setError, setValue, getValues } = useForm({
        resolver: yupResolver(schema)
    });
    const [textEditer, setTextEditer] = useState('');

    const onSubmit = async (data) => {
        try {
            getLoading(true);
          
            let dataRes = {
                'name': data.name,
                'status': data.status,
                'slug': data.slug,
                'code': data.code,
               
            };

            let res = await updateNewsCatgory({token, data: dataRes, id});
            getLoading(false);
            toast.success("Cập nhập chuyên khoa thành công !");
        } catch (error) {
                getLoading(false);
                let data = error.response.data;
                // console.log(data);
                setError('code', { type: 'custom', message: data.code[0] });
                setError('name', { type: 'custom', message: data.name[0] });
                // errors.email.message = ;
                errors.name.message = data.name[0];
        }
    }
    const start = async () => {
        try {
            let res = await getNewsCatgorylist({token, id});
            let data = res.data.data;
            setValue('code', data.code);
            setValue('name', data.name);
            setValue('status', (data.status == 1) ? true : false);
            setValue('slug', data.slug);
            console.log(getValues('status'));
        } catch (error) {
            
        }
    }

    useEffect(() => {
        start();
    },[])
  

    return ( 
        <div className="addNews">
            <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />
       
            <Form method="post"onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <input type="text" {...register("code")}  className="form-control" placeholder="Mã danh mục" />
                            <p className='text-danger'>{errors.code?.message}</p>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Tên loại tin</Form.Label>
                            <input type="text"  {...register("name")} className="form-control" placeholder="Tên loại tin" />
                          <p className='text-danger'>{errors.name?.message}</p>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Đường dẫn</Form.Label>
                            <input type="text" id="slug" {...register("slug")} className="form-control" />
                        </Form.Group>
                    </div>
                    <FormGroup className="col-6">
                      <FormControlLabel control={<Switch defaultChecked {...register("status")} />} label="Trạng thái" />
                    </FormGroup>
        
                </div>
                <Form.Group className="mt-2">
                <button className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Cập nhập"}</button>
                </Form.Group>
            </Form>
        </div>
     );
}

export default UpdateNewsCategory;