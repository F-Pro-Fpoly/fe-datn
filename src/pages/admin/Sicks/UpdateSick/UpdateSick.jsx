
import {useEffect, useRef, useState} from "react"
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { setLoading } from "../../../../redux/slices/InterfaceSile";

import {updateSicks,getSicks} from "../../../../services/SicksService";

export default function UpdateSick(){
    const param = useParams();
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    let FormRef = useRef();

    const [sick, setSick] = useState({
        "code": "",
        "name":"",
    });

    const SubmitForm =  async (e) => {
        let id = param.id
        e.preventDefault();
        try {
            let res = await updateSicks({token, id, data: sick});
            let message = res.data.message;
            toast.success(message)
        } catch (error) {
            console.log(error);
        }
    }
    const startApi = async () => {
        let id = param.id;
        dispatch(setLoading(true))

        let res = await getSicks({token, id});

        let data = res.data.data;
        setSick({
            ...sick,
            code: data.code ?? null,
            name: data.name ?? null,
        });
        dispatch(setLoading(false))
    }
    useEffect(()=>{

        startApi();
    }, []);

    return(
        <div className="addSick">
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
       
            <Form method="post" onSubmit={SubmitForm}>
                <div className="row">
                    <div className="col-12">
                        <Form.Group>
                            <Form.Label>Mã danh mục bệnh</Form.Label>
                            <input type="text" value={sick.code} 
                             onChange = {(e) => setSick({...sick, code: e.target.value})}  className="form-control" placeholder="Mã danh mục" />
                         
                        </Form.Group>
                    </div>
                    <div className="col-12">
                        <Form.Group>
                            <Form.Label>Tên danh mục bệnh</Form.Label>
                            <input type="text" value={sick.name} onChange = {(e) => setSick({...sick, name: e.target.value})} className="form-control" placeholder="Tên loại tin" />
           
                        </Form.Group>
                    </div>
                </div>
                <Form.Group className="mt-2">
                    <Button variant="primary" type="submit">Cập nhập</Button>
                </Form.Group>
            </Form>
        </div>
    )
}