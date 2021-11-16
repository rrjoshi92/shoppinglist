import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 110px auto;
    max-width: 614px;
    border: 1px solid #C6C6C6;
    min-height: 290px;
    text-align: center;

    .form-enter {
        right: -1000px;
    }

    .form-enter-active {
        right: 0;
        transition: all 300ms ease-in;
    }

    .form-enter-done {
        right: 0;
    }

    .form-exit {
        right: 0;
    }

    .form-exit-active {
        right: -1000px;
        transition: all 300ms ease-in;
    }
`

export const Content = styled.div`
    p {
        font-size: 18px;
        line-height: 24px;
        color: #87898C
    }
`