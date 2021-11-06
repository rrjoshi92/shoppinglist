import styled from 'styled-components';

export const Spinner = styled.div`
    border: 3px solid #4D81B7;
    border-top: 3px solid transparent;
    border-radius: 50%;
    width: 76px;
    height: 76px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`