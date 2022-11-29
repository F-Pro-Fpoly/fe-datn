import "./MailContact.scss";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';





function Mail() {
    return(
        <div className="mail">
            <ToastContainer />
            <div className="row">
                <div className="col-12">
                    <Form.Group>
                        <Form.Label>Email đến</Form.Label>
                        <Form.Control type="email" placeholder="Email đến" name="email" />
                    </Form.Group>
                </div>
                <div className="col-12">
                    <Form.Group>
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control type="text" placeholder="Tiêu đề" name="" />
                    </Form.Group>
                </div>
                <div className="col-12">
                    <Form.Group>
                            <Form.Label>Nội dung</Form.Label>
                            <CKEditor
                                editor={ ClassicEditor }
                               
                            />
                    </Form.Group>
                </div>
            </div>
            <Form.Group className="mt-2">
                    <Button variant="primary" type="submit">Gửi Email</Button>
                </Form.Group>
        </div>
    );

}

export default Mail;