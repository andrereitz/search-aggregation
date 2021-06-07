import PropTypes from 'prop-types';
import { SearchResultsItemStyles } from './searchresultsitem.styles';

export function SearchResultsItem(props){
    const { result } = props;

    return(
        <SearchResultsItemStyles>
            <a href={result.link}>{ result.title }</a>
            <span>{ result.displayed_link }</span>
            <p dangerouslySetInnerHTML={ {__html: result.snippet} }></p>
        </SearchResultsItemStyles>
    )
}

SearchResultsItem.propTypes = {
    result: PropTypes.object
};