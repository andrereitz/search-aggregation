import styled from 'styled-components';

export const SearchResultsStyles = styled.div.attrs( props => ({
    'data-testid': 'searchResults'
}))`
    background: #FAFAFA;
    text-align: center;

    > div {
        text-align: left;
        width: 100%;
        max-width: 980px;
        box-sizing: border-box;
        padding: 25px 15px;
        display: inline-block;

        h2 {
            color: #252525;
            margin: 0 0 10px 0;
        }

        h3 {
            margin: 0 0 25px 0;
            color: #454545;
        }

        ul {
            margin:0;
            padding: 0;
        }
    }
`;