import { SearchResultsStyles } from './searchresults.styles';

import { useSelector } from 'react-redux';

import { selectSearchService, selectSearchResults, selectSearchQuery } from '../../store/Search/Search.selectors';

import { SearchResultsItem } from '../';

export function SearchResults(){
    const service = useSelector( selectSearchService );
    const results = useSelector( selectSearchResults );
    const query = useSelector( selectSearchQuery );

    return(
        <SearchResultsStyles>
            { 
                results.length > 0
                    ?
                        <div>
                            <h2>Search results for: { query }</h2>
                            <h3>Results from { service.title }</h3>
                            <ul>
                                {results.map( (result, index) => 
                                    <SearchResultsItem key={`rs-${index}`} result={result} />
                                )}
                            </ul>
                        </div>
                    :

                        <div>Select a service and search</div>
            }
        </SearchResultsStyles>
    )
}