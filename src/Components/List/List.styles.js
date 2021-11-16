import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    max-width: 1025px;
    margin: 30px auto;
    padding: 0 20px;
`

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: flex-end;

    h2 {
        color: #000000;
        margin: 0;
        font-weight: 600;
        font-size: 18px;
    }
`