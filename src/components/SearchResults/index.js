import { SearchResultsStyles } from './searchresults.styles';

import { useSelector } from 'react-redux';

import { selectSearchService, selectSearchResults, selectSearchQuery, selectSearchError } from '../../store/Search/Search.selectors';

import { SearchResultsItem } from '../';

export function SearchResults(){
    const service = useSelector( selectSearchService );
    const results = useSelector( selectSearchResults );
    const error = useSelector( selectSearchError );
    const query = useSelector( selectSearchQuery );

    return(
        <SearchResultsStyles>
            {
                error
                ?
                    <div>There was an error, please search again!</div>
                :
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