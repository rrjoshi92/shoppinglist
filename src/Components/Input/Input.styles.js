import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 13px;
    display: flex;
    flex-direction: column;

    input {
        border: 1px solid #D5DFE9;
        border-radius: 4px;
        min-height: 52px;
        padding: 0 15px;
    }
    input::placeholder {
        color: #9CA8B4;
    }
`