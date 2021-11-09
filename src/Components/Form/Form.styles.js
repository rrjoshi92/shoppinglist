import styled from 'styled-components';

export const Wrapper = styled.div`
    height:99vh;
    top:0;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    border-bottom: 5px solid #4D81B7;
    //margin: 110px auto;
    position: fixed;
    background: white;
    overflow: scroll;

`
export const Content = styled.div`
    min-width: 560px;
    height:100%;
    display: flex;
    flex-flow: column;
    .header{
        min-height: 65px;
        text-align: left;
        padding: 0 30px;
        background-color: #FAFAFA;
        display: flex;
        align-items: center;
        border: 0.5px solid #D5DFE9;
        justify-content: space-between;
        margin-bottom: 28px;
        flex: 0 1 auto;
        .material-icons {
            color: #555F7C;
            cursor: pointer;
        }

        h2 {
            margin: 0;
            font-family: Dosis;
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            color: #5C6269;
            text-transform: uppercase;
        }
    }

    .content {
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        justify-content: space-between;
        p {
            display: block;
            margin: 0;
        }

        p.primary_label {
            font-size: 18px;
            line-height: 24px;
            color: #2A323C;
            margin: 0 0 5px 0;
        }

        p.secondary_label{
            color: #5C6269;
        }

        .action_buttons{
            display: flex;
            flex-flow: row-reverse;
            margin-bottom: 26px;
        }
    }


`
