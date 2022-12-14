import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Await, Link } from "react-router-dom";
import { postListServiceAPI } from "../../../../../services/SpecialistService";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date, InferType, ref } from 'yup';
import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../../../components/Loading/Loading";
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";


const schema = object({
    code: string().required('Mã chuyên khoa không được bỏ trống'),
    name: string().required('Tên chuyên khoa không được bỏ trống'),
    description: string().required('Mô tả không được bỏ trống'),
 
}).required();

function AddMenu() {

    const token = useSelector(state => state.auth.token);
    const [loading, getLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } ,reset, setError } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async data => {
        try {
            getLoading(true);
                let add = await postListServiceAPI(token,data);
                getLoading(false);
                reset();
                toast.success("Thêm chuyên khoa thành công !");
        } catch (error) {
                getLoading(false);
                let data = error.response.data.data;
                console.log(data);
                setError('code', { type: 'custom', message: data.code[0] });
                setError('name', { type: 'custom', message: data.username[0] });
                setError('description', { type: 'custom', message: data.username[0] });
                // errors.email.message = ;
                errors.username.message = data.username[0];
        }
    }

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
            <ToastContainer />
            <h2 className="addSick-heading">Thêm trang mới</h2>
           
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Tên trang</label>
                    <input type="text" {...register("code")}  className="form-control" placeholder="Nhập tên trang" />
                    <p className='text-danger'>{errors.code?.message}</p>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Font</label>
                    <input type="text"  {...register("name")} className="form-control" placeholder="Nhập font" />
                    <p className='text-danger'>{errors.name?.message}</p>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Kích hoạt</label>
                    <select name="active" id="" className="form-control">
                        <option>--Chọn--</option>
                        <option value="0">Không kích hoạt</option>
                        <option value="1">Kích hoạt</option>
                    </select>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Sắp xếp</label>
                    <select name="active" id="" className="form-control">
                        <option>--Chọn--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>

                <div className="form-group mb-2">
                    <button className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Thêm"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/chinh-sua-menu/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default AddMenu;