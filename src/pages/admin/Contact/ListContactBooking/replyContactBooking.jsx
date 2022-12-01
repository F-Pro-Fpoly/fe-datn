import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDetailContact } from "../../../../services/ContactService";
function ReplyContactBooking() {
   
    // const token = useSelector(state => state.auth.token);
    const token = useSelector(state => state.auth.token)
    const param = useParams();
    const id = param.id;

    const [listContact, setListContact] = useState({});

    const start = async () => {
       
        setListContact([])
        let res = await getDetailContact({token,id}) 
        let data = res.data 
        let dataArr = data.data
       
        setListContact(dataArr)
    }

    useEffect(() => {
      
        start();
    }, [])


    return ( 
        <>
              <div className="adminItem">
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Họ và tên người đăng ký</label>
                    <input type="text" 
                    defaultValue={listContact.name}
                    disabled
                    className="form-control" placeholder="Nhập tên trang" />
                 
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"      
                      defaultValue={listContact.email}
                      disabled
                    className="form-control" placeholder="Nhập font" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Số điện thoại</label>
                    <input type="text"      
                      defaultValue={listContact.phone}
                      disabled
                    className="form-control" placeholder="Nhập font" />
                </div>
                <div className="form-group mb-2">
                    <Link className="btn btn-primary ms-2" to="/chuyen-khoa">Tạo lịch</Link>
                </div>
                
         
         </div>
        </>
     );
}

export default ReplyContactBooking;