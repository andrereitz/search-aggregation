import styled from 'styled-components';

export const SearchBarStyles = styled.div.attrs(props => ({
    'data-testid': 'searchBar'
}))`
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: 40px 20px 30px;
    box-sizing: border-box;

    > div {
        width: 100%;
        max-width: 650px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        border: 1px solid #909090;
        border-radius: 1000px;
        background: #FFFFFF;
        position: relative;

        input {
            border: none;
            padding: 0 15px;
            height: ${props => props.height};
            background: none;
            margin-right: auto;
            flex: 1 1 100%;

            &:focus{
                border: none;
                outline: none;
            }
        }

        button {
            background: #303030;
            border-radius: 50%;
            flex: 0 0 ${props => props.height};
            height: ${props => props.height};
            border: none;
            color: #FFFFFF;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        > span {
            width: 100%;
            max-width: 950px;
            display: inline-block;
            text-align: left;
            font-size: 14px;
            padding: 10px 0 0 0;
            color: red;
            position: absolute;
            bottom: -25px;
            left: 0;
            z-index: 0;
        }
    }

`;