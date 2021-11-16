import { useState, useEffect } from 'react'
import { Wrapper } from './Dropdown.styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function Dropdown({placeHolder, value, onChange}) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (value){
            setCount(value);
        }
    }, [value])

    const handleChange = (event) => {
        setCount(event.target.value);
        onChange(event.target.value);
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
                <MenuItem sx={{ display: 'none' }} value={0}></MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </Wrapper>
    )
}

