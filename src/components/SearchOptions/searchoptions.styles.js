import styled from 'styled-components';

const LOCAL = {
    height: '35px'
}

export const SearchOptionsStyles = styled.div`
    font-size: 12px;
    position: relative;
    height: ${LOCAL.height};

    > span{
        height: ${LOCAL.height};
        line-height: ${LOCAL.height};
        display: block;
        padding: 0 10px;
        cursor: pointer;

        i{
            margin: 0 5px;
        }
    }

    ul{
        list-style: none;
        padding: 0;
        background: #F0F0F0;
        border-radius: 5px;
        padding: 5px 8px;
        margin: -3px 0 0;
        display: none;

        li{
            padding: 5px 0;
            cursor: pointer;
        }
    }

    ${props => !props.active}{
        ul{
            display: block;
        }
    }
`;