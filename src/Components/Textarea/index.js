import { useState } from 'react';
import { Wrapper } from './Textarea.styles'



export default function TextArea({ placeHolder, maxlength, itemInfo, onChange }) {

    const [charCount, setcharCount] = useState(itemInfo ? itemInfo.length : 0);

    const onChangeHandler = (event) =>{
        setcharCount(event.target.value.length);
        onChange(event);
    }

    return (
        <Wrapper>
            <textarea placeholder={placeHolder} defaultValue={itemInfo} maxLength={maxlength} onChange={onChangeHandler}>
            </textarea>
            <p>{charCount}/{maxlength}</p>
        </Wrapper>
    )
}
