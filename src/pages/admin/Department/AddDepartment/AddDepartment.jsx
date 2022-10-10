
import { Button, Form } from "react-bootstrap";
import "./AddDepartment.scss";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getListServiceAPI} from "../../../../services/SpecialistService";

function AddDepartment() {
    const token = useSelector(state => state.auth.token);
    let FormRef = useRef();

    const [textEditer, setTextEditer] = useState('');
    const [specailist, setSpecailist] = useState([]);

    useEffect(()=>{
        const startApi = async () => {
            // get all specailist
            let res = await getListServiceAPI(token, 0);

            let data = res.data;
            setSpecailist(data.specialist);
        }

        startApi();
    }, []);

    const SubmitForm = (event) => {
        event.preventDefault();
        let formData = new FormData(FormRef.current);
        formData.append("description", textEditer);



    }

    return ( 
        <div className="addDepartment">
            <Form method="post" onSubmit={SubmitForm} ref={FormRef}>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Mã code" name="code" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Tên phòng ban" name="name" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Chuyên khoa</Form.Label>
                            <Form.Select className="selectpicker" name="specialist_id" >
                                {specailist.map((val,index) => (
                                    <option value={val.id} key={val.id}>{val.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={textEditer}
                                onChange={(event, editor) => {
                                    setTextEditer(editor.data.get())
                                }}
                            />
                        </Form.Group>
                    </div>
                </div>
                <Form.Group className="mt-2">
                    <Button variant="primary" type="submit">Thêm chuyên khoa</Button>
                </Form.Group>
            </Form>
        </div>
     );
}

export default AddDepartment;