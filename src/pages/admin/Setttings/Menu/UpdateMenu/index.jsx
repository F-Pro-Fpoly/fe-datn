import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Await, Link } from "react-router-dom";


import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../../../components/Loading/Loading";
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";
import {useParams} from "react-router-dom";
import { getDetailServiceAPI, putDetailServiceAPI } from "../../../../../services/MenuService";

function UpdateMenu() {
    const param = useParams()
    const id = param.id 
    const token = useSelector(state => state.auth.token);
    const [loading, getLoading] = useState(false);
    const [getMenu, setMenu] = useState({
        "name":"",
        "font":"",
        "status":"",
    });



  const start = async () => {
    try {
        
        let res = await getDetailServiceAPI({token,id});
        let data = res.data;
        let dataArr = data.data
        setMenu( 
            dataArr,
    
        )
            

    } catch (error) {
        console.log(error);
    }
  }

  const onSubmit = async (e) => {
    // console.log(data);
    // return;
    e.preventDefault();
    try {
        getLoading(true);
        const data = {
            ...getMenu
        }
        let update = await putDetailServiceAPI({token,id,data});
        getLoading(false);
        toast.success("Cập nhật thành công thành công !");
    } catch (error) {
            getLoading(false);
            let data = error.response.data;
            console.log(data);
            toast.error(data.message);
    }
}


  useEffect(() => {
    start()
   

  }, [])
  

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

            <h2 className="addSick-heading">Chỉnh sửa trang</h2>
           
            <form method="PUT" onSubmit= {onSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Tên trang</label>
                    <input type="text" 
                    onChange={(e) => setMenu({...getMenu, "name": e.target.value})}
                    defaultValue={getMenu.name}
                    className="form-control" placeholder="Nhập tên trang" />
                 
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Font</label>
                    <input type="text"  
                     onChange={(e) => setMenu({...getMenu, "font": e.target.value})}
                      defaultValue={getMenu.font}
                    className="form-control" placeholder="Nhập font" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="status" className="form-label">Trạng thái</label>
                    <span>
                        <label className="switch"> 
                            <input type="checkbox" defaultChecked={getMenu.status == 1 ? true : false}  name="status" id="status"
                            onChange={(e) => setMenu({...getMenu, "status": e.target.checked})}
                            />
                            
                            <span className="slider round"></span>
                        </label>
                    </span> 
                </div>

                <div className="form-group mb-2">
                    <button className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Cập nhật"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/chinh-sua-menu/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default UpdateMenu;