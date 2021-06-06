import { SEARCH_SERVICES } from '../../config/searchServices';
import { SearchBarStyles } from './searchbar.styles';

import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLoading } from '../../store/Search/Search.actions';
import { fetchResults } from '../../store/Search/Search.async';

import { selectSearchLoading } from '../../store/Search/Search.selectors';

import { SearchOptions, Loader } from '../../components';

export function SearchBar(props){
    const { height } = props;
    const dispatch = useDispatch();
    const searchLoading = useSelector(selectSearchLoading);

    const [error, setError] = useState(null);
    const queryRef = useRef(null);

    function handleSearch(){
        const query = queryRef.current.value;
        if(!query) return setError({ msg: 'Please inform a search term' });
        if(searchLoading) return;

        dispatch(setLoading(true))
        dispatch(fetchResults(query))
        setError(null);
    }

    useEffect(() => {
        function handleSearchEnter(e){
            if(e.key === 'Enter') return handleSearch();
        }

        window.addEventListener('keypress', handleSearchEnter);

        return () => {
            window.removeEventListener('keypress', handleSearchEnter);
        }
    })

    return(
        <SearchBarStyles height={height}>
            <div>
                <input ref={queryRef} type="text" placeholder="Type your search" />
                <SearchOptions services={SEARCH_SERVICES} />
                <button onClick={ () => handleSearch() }>
                    { 
                        searchLoading ?
                            <Loader size='20px' /> 
                        :
                            <i className="fas fa-search"></i>
                    }
                </button>
                {error &&
                    <span>{error.msg}</span>
                }
            </div>
        </SearchBarStyles>
    )
}