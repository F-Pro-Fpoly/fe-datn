import Pagination from 'react-bootstrap/Pagination';

function Paginate({pagination, onChangePage}) {
    let active = pagination.current_page;

    // console.log(process.env.REACT_APP_BE);
    

    let items = [];
    for (let number = 1; number <= pagination.total_pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>onChangePage(number)} >
            {number}
            </Pagination.Item>,
        );
    }


    return ( 
        <div className="">
            <Pagination>{items}</Pagination>
        </div>
     );
}

export default Paginate;