import { SEARCH_SERVICES } from '../../config/searchServices';
import { SearchBarStyles } from './searchbar.styles';

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchResults } from '../../store/Search/Search.async';

import { SearchOptions } from '../../components';

export function SearchBar(props){
    const { height } = props;
    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const queryRef = useRef(null);

    function handleSearch(query){
        if(!query) return setError({ msg: 'Please inform a search term' })

        dispatch(fetchResults(query))
        setError(null);
    }

    return(
        <SearchBarStyles height={height}>
            <div>
                <input ref={queryRef} type="text" placeholder="Type your search" />
                <SearchOptions services={SEARCH_SERVICES} />
                <button onClick={ () => handleSearch(queryRef.current.value) }><i className="fas fa-search"></i></button>
            </div>
            {error &&
                <span>{error.msg}</span>
            }
        </SearchBarStyles>
    )
}