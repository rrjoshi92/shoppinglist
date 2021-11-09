import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    position: relative;

    textarea {
        border: 1px solid #D5DFE9;
        border-radius: 4px;
        min-height: 140px;
        padding: 15px;
        resize: none;
    }
    textarea::placeholder {
        color: #9CA8B4;
    }

    p{
        position: absolute;
        bottom: 5px;
        right: 5px;
        font-size: 12px;
        line-height: 16px;
        color: #5C6269;
    }
`