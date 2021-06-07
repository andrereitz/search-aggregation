import styled from 'styled-components';

export const SearchResultsItemStyles = styled.li.attrs( props => ({
    'data-testid': 'searchResultsItem'
}))`
    list-style: none;
    margin: 15px 0;

    a {
        margin: 0;
        color: #404040;
        font-size: 18px;
        font-weight: bold;
        width: 100%;
        display: block;
    }
    span {
        font-size: 12px;
        color: #606060; 
    }
    p {
        margin: 5px 0 0 0;
        font-size: 14px;
    }
`;