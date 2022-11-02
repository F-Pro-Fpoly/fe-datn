import {  useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postSettingServiceAPI } from "../../../../../services/SettingService";
import { toast,ToastContainer } from 'react-toastify';
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";

function AddConfig() {

    const token = useSelector(state => state.auth.token);
    const [loading] = useState(false);
    const [config, setConfig] = useState({
        "code" : "",
        "description": "",
        "status": ""
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "code" : config.code,
            "description": config.description,
            "status": config.status
        }
        try {
            let res = await postSettingServiceAPI({token,data});
            console.log(res);
            toast.success("Thêm config thành công !");
        } catch (error) {
            let res = error.response;
            let data = res.data;
            let messages = data.message;
            toast.error(messages);
        }
    }

    return ( 
        <div className="addsetting">
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
            <h2 className="addSick-heading">Thêm cofig</h2>         
            <form method="POST" onSubmit={handleSubmit} >
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mã </label>
                    <input type="text" name ="code"  className="form-control" placeholder="Nhập mã"
                     onChange={(e) => setConfig({...config, "code": e.target.value})}
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mô tả</label>
                    <input type="text"  name ="description" className="form-control" placeholder="Nhập mô tả"
                       onChange={(e) => setConfig({...config, "description": e.target.value})}
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="status" className="form-label">Trạng thái</label>
                    <span>
                        <label className="switch"> 
                            <input type="checkbox" name="status" id="status"
                             onChange={(e) => setConfig({...config, "status": e.target.checked})}
                            />
                            <span className="slider round"></span>
                        </label>
                    </span> 
                </div>

                <div className="form-group mb-2">
                    <button className="btn btn-primary" type="submit" >{loading ?  (<LoadingBtn />) : "Thêm"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/cau-hinh-chung/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default AddConfig;