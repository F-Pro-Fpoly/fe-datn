import { Table } from "react-bootstrap";

function ScheduleTime({listDetail = []}) {
    return ( 
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {listDetail.map((item, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.time_start}</td>
                            <td>{item.time_end}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
     );
}

export default ScheduleTime;