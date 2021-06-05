import { SEARCH_SERVICES } from '../../config/searchServices';
import { SearchBarStyles } from './searchbar.styles';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { fetchResults } from '../../store/Search/Search.async';

import { SearchOptions } from '../../components';

export function SearchBar(props){
    const { height } = props;
    const dispatch = useDispatch();

    const queryRef = useRef(null);

    return(
        <SearchBarStyles height={height}>
            <div>
                <input ref={queryRef} type="text" placeholder="Type your search" />
                <SearchOptions services={SEARCH_SERVICES} />
                <button onClick={() => dispatch(fetchResults(queryRef.current.value))}><i className="fas fa-search"></i></button>
            </div>
        </SearchBarStyles>
    )
}