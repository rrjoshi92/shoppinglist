import { Wrapper } from './Button.styles'

function Button({ text, clickHandler, itemid}) {

    return (
        <Wrapper>
            <button itemID={itemid} onClick={clickHandler}>{text}</button>
        </Wrapper>
    )
}

export default Button;