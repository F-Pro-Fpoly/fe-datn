import { Autocomplete, TextField } from "@mui/material";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState, memo } from "react";

function SearchCheckBox({
    label,
    options = [],
    value = [],
    onChange,
    id
}) {
    // const [stateValue, setStateValue] = useState(value);
    const onChangeInput = (event, data) => {
        // setStateValue(data)
        onChange(data)
    }

    // useEffect(() => {
    //     setStateValue(value);
    // }, [value])

    return ( 
        <Autocomplete
            onChange={onChangeInput}
            value={value}
            multiple
            id={id}
            options={options}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                label={label}
            />
            )}
        />
     );
}

SearchCheckBox.propTypes = {
    'label': PropTypes.string.isRequired,
    'options': PropTypes.array,
    'value': PropTypes.array,
    'onChange': PropTypes.func,
    'id': PropTypes.string
}

export default memo(SearchCheckBox);