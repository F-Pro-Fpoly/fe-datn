import PropTypes from 'prop-types';
import "./SearchInput.scss";

function SearchInput({listData = [], onChange}) {
    const handleOnClickLi = (item) => {
        onChange(item)
    }

    return ( 
        listData.length > 0 && (
        <div className="searchInput">
            <ul className="searchInput-list">
                {
                    listData.map((item, index) => (
                        <li className="searchInput-item" onClick={()=>handleOnClickLi(item)} key={item.id}>
                            <span className="searchInput-text">{item.value}</span>
                        </li>
                    ))
                }   
            </ul>
        </div>
        )
     );
}

SearchInput.propTypes = {
    listData: PropTypes.array,
    onChange: PropTypes.func
}

export default SearchInput;