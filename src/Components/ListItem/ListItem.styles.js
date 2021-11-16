import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    align-items: center;
    border: 0.5px solid #D5DFE9;
    border-radius: 4px;
    margin-bottom: 12px;
    padding: 20px 10px;

    &.purchased {
        label, span {
            text-decoration-line: line-through;
        }
    }

    .label {
        flex-grow: 2;
        display: inherit;
        flex-flow: column;

        label {
            color: #000000;
        }

        span {
            font-size: 14px;
            color: #7D7A7A;
        }
    }

    .action_buttons{
        .MuiSvgIcon-root{
            color: #555F7C;
            cursor: pointer;
            margin-right: 10px;
        }
    }
`