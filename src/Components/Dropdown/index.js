import { useState } from 'react'
import { Wrapper } from './Dropdown.styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function Dropdown({placeHolder}) {
    const [count, setCount] = useState(0);
    const handleChange = (event) => {
        setCount(event.target.value);
    };
    return (
        <Wrapper>
            <Select
                labelId="select_count"
                id="select_count"
                value={count}
                onChange={handleChange}
                renderValue={(selected) => {
                    if (selected === 0) {
                        return <em>{placeHolder}</em>;
                    }

                    return selected;
                }}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </Wrapper>
    )
}

