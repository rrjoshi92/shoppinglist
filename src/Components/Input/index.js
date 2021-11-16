import { Wrapper } from './Input.styles'

export default function Input({ placeHolder, onChange, itemName}) {
    return (
        <Wrapper>
            <input type="text" defaultValue={itemName} onChange={onChange} placeholder={placeHolder}></input>
        </Wrapper>
    )
}
