import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailSettingServiceAPI, putSettingServiceAPI } from "../../../../../services/SettingService";
import { toast,ToastContainer } from 'react-toastify';
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";
import {useParams} from "react-router-dom";
function UpdateConfig() {


    const formRef = useRef();
    const param = useParams();
    const id = param.id;
    const token = useSelector(state => state.auth.token);
    const [loading, getLoading] = useState(false);
    const [getDetailConfig,setDetailConfig] = useState(
      {
        "code":"",
        "description":"",
        "status":"",
      }
    )
    const start = async () => {
       try {
        const res = await getDetailSettingServiceAPI({token, id})
        const data = res.data;
        const dataArr = data.data;
        setDetailConfig(
            {
                ...getDetailConfig,
                "code" : dataArr.code,
                "description": dataArr.description,
                "status": dataArr.status
            }
        )
       } catch (error) {
            console.log(error);
       }
    }

    useEffect(() => {
        start()     

    }, [])
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "code" : getDetailConfig.code,
            "description": getDetailConfig.description,
            "status": getDetailConfig.status
        }

        try {

            let res = await putSettingServiceAPI({token, id , data});
            let message = res.data.message;
            toast.success(message);
        } catch (error) {
            console.log(error);
            let res = error.response;
            let status = res.status;
            console.log(status);
            if(status === 422){
                let data = res.data;
                let message = data.message;
                toast.error(message);
            }
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
            
            <form method="POST" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mã</label>
                    <input type="text"  id="code" name ="code" value={getDetailConfig.code} 
                    onChange={(e) => setDetailConfig({...getDetailConfig, "code": e.target.value})}
                    className="form-control" placeholder="Nhập mã" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mô tả</label>
                    <input type="text" id="description" name ="description" value={getDetailConfig.description} 
                      onChange={(e) => setDetailConfig({...getDetailConfig, "description": e.target.value})}
                    className="form-control" placeholder="Nhập mô tả" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="status" className="form-label">Trạng thái</label>
                    <span>
                        <label className="switch"> 
                            <input type="checkbox" defaultChecked={getDetailConfig.status == 1 ? true : false}  name="status" id="status"
                            onChange={(e) => setDetailConfig({...getDetailConfig, "status": e.target.checked})}
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

export default UpdateConfig;