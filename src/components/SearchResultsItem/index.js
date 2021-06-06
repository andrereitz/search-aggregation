import { SearchResultsItemStyles } from './searchresultsitem.styles';

export function SearchResultsItem(props){
    const { children, result } = props;

    console.log('result', result);

    return(
        <SearchResultsItemStyles>
            <a href={result.link}>{ result.title }</a>
            <span>{ result.displayed_link }</span>
            <p>{ result.snippet }</p>
        </SearchResultsItemStyles>
    )
}