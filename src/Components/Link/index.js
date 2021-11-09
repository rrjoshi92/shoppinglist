import { Wrapper } from './Link.styles'

import React from 'react'

export default function Link({text, href, clickHandler}) {
    return (
        <Wrapper>
            <a href={href || '#'} onClick={clickHandler}> {text} </a>
        </Wrapper>
    )
}
