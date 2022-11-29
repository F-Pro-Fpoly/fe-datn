import { useState } from "react";
import {ComboBox, SearchCheckBox} from "../../components/Input"

function Test1() {
    const options = [
        {
            label: "option 1",
            value: 1
        },
        {
            label: "option 2",
            value: 2
        },
        {
            label: "option 3",
            value: 3
        },
    ];
    const [value,setValue] = useState([
        {
            label: "option 1",
            value: 1
        },
    ]);
    return ( 
        <div>
            <SearchCheckBox 
                id="test-1"
                options={options}
                value={value}
                label="test 1"
                onChange={(data) => {
                    console.log(data);
                }}
            />
        </div>
     );
}

export default Test1;