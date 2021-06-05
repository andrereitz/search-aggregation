import styled from 'styled-components';

export const SearchBarStyles = styled.div`
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: 40px 20px 30px;
    box-sizing: border-box;

    > div{
        width: 100%;
        max-width: 650px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        border: 1px solid #909090;
        border-radius: 1000px;
        background: #FFF;

        input{
            border: none;
            padding: 0 15px;
            height: ${props => props.height};
            background: none;
            margin-right: auto;

            &:focus{
                border: none;
                outline: none;
            }
        }

        button{
            background: #303030;
            border-radius: 50%;
            width: ${props => props.height};
            height: ${props => props.height};
            border: none;
            color: #CCC;
        }
    }
`;