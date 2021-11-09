import { useState } from 'react';
import { Wrapper } from './Textarea.styles'



export default function TextArea({ placeHolder, maxlength }) {

    const [charCount, setcharCount] = useState(0);

    const onChangeHandler = (event) =>{
        setcharCount(event.target.value.length);
    }

    return (
        <Wrapper>
            <textarea placeholder={placeHolder} maxLength={maxlength} onChange={onChangeHandler}>
            </textarea>
            <p>{charCount}/{maxlength}</p>
        </Wrapper>
    )
}
