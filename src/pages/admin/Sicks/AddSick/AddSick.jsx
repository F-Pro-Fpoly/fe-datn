import { Link } from "react-router-dom";

function AddSick() {
    return ( 
        <div className="addSick">
            <h2 className="addSick-heading">Thêm danh mục vaccine</h2>
            <form method="post">
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập code danh mục</label>
                    <input type="text" className="form-control" placeholder="Code" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nhập tên danh mục</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group mb-2">
                    <button className="btn btn-primary">Thêm</button>
                    <Link className="btn btn-primary ms-2" to="/admin/danh-muc-vaccine/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default AddSick;