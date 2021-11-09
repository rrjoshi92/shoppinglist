import { Wrapper } from './Input.styles'

export default function Input({placeHolder}) {
    return (
        <Wrapper>
            <input type="text" placeholder={placeHolder}></input>
        </Wrapper>
    )
}
