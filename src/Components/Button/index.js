import { Wrapper } from './Button.styles'

function Button({ text, clickHandler}) {

    return (
        <Wrapper>
            <button onClick={clickHandler}>{text}</button>
        </Wrapper>
    )
}

export default Button;