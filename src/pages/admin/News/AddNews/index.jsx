import { Button, Form } from "react-bootstrap";
import "./News.scss";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getListAllNewsCatgory} from "../../../../services/NewsCategory";
import { ToastContainer, toast } from "react-toastify";
import {createListNewsAPI} from "../../../../services/NewsService";
import { uploadFileService } from "../../../../services/normal/FileService";

function News() {
    const token = useSelector(state => state.auth.token);
    let FormRef = useRef();
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
    const SubmitForm = async (event) => {
        event.preventDefault();
        try {
            let formData = new FormData(FormRef.current);
            formData.append("content", textEditer);
            let FileData = new FormData();
            FileData.append('file', formData.get('file'));
            let resFile = await uploadFileService({data: FileData});
            let file_name = resFile.data.data.file_name;
            formData.append('file_name', file_name);
            // console.log(file_name);
            // return;
            let res = await createListNewsAPI({token, data: formData});
            let data = res.data;
            toast.success(data.message);
        } catch (error) {
        }
    }

    return ( 
        <div className="addNews">
            <ToastContainer />
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
                            <Form.Label>Tên tin tức</Form.Label>
                            <Form.Control type="text" placeholder="Tên tin tức" name="name" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <label htmlFor="" className="form-label">Tin nổi bật</label>
                        <select name="featured" id="" className="form-control">
                            <option>--Chọn--</option>
                            <option value="0">Không nổi bật</option>
                            <option value="1">Nổi bật</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Đường dẫn</Form.Label>
                            <Form.Control type="text" placeholder="Mã code" name="slug" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Hình</Form.Label>
                            <Form.Control type="file" placeholder="Hình" name="file" />
                        </Form.Group>
                    </div>
                    <div className="col-4">
                            <label htmlFor="" className="form-label">Kích hoạt</label>
                            <select name="status" id="" className="form-control">
                                <option>--Chọn--</option>
                                <option value="0">Không kích hoạt</option>
                                <option value="1">Kích hoạt</option>
                            </select>
                    </div>
        
                </div>
                <div className="row">
                <div className="col-12">
                        <Form.Group>
                            <Form.Label>Loại tin</Form.Label>
                            <Form.Select className="" name="category_id" >
                                {NewsCategory.map((val,index) => (
                                    <option value={val.id} key={val.id}>{val.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-12">
                    <Form.Group>
                            <Form.Label>Nội dung</Form.Label>
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
                    <Button variant="primary" type="submit">Thêm tin tức</Button>
                </Form.Group>
            </Form>
        </div>
     );
}

export default News;