import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function Select({
    value = {
        'value': "",
        'title': "",
    }, data = []
    , onClickS,
    name,
    id,
}) {
    const [search, setSearch] = useState(''); 
    const [select, setSelect] = useState(value);
    const [dataOption, setDataOption] = useState(data);

    const handleOnClickLi = (value, title) => {
        setSelect({...select, value:value, title:title});
        onClickS({value: value, title: title});
    }

    return (
        <div>
            <select name={name ?? null} hidden value={select.value} onChange={(e)=>setSelect({...select, value: e.target.value})}>
                {dataOption.map((item, index) => (
                    <option value={item.id} key={index}>{item.name}</option>
                ))}
            </select>

            <div className="dropdown">
                <button className='form-control' style={{textAlign: "left", minHeight:"40px"}} data-toggle="dropdown" type='button' data-bs-toggle="dropdown">
                    {select.title}
                </button>
                <ul className="dropdown-menu" style={{width: "100%", maxHeight: "200px", overflowY: "auto"}}>
                    <li style={{padding: "0 10px"}}><Form.Control type='text' /></li>
                    {dataOption.map((item, index) => (
                        <li className="dropdown-item" onClick={handleOnClickLi(item.id, item.name)} style={{cursor:"pointer"}} key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Select;