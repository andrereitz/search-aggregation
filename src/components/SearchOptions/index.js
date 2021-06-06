import { SearchOptionsStyles } from './searchoptions.styles';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../../store/Search/Search.actions';

import { selectSearchService } from '../../store/Search/Search.selectors';

export function SearchOptions(props){
    const { services } = props;
    const dispatch = useDispatch();
    const service = useSelector(selectSearchService);

    const [active, setActive] = useState(false);

    function handleChangeService(service){
        setActive(false)
        dispatch(changeSearch(service))
    }

    return(
        <SearchOptionsStyles active={active}>
            <span onClick={ () => setActive(!active) }>
                { service.title } 
                { !active && 
                    <i className="fas fa-angle-down"></i>
                }
            </span>
            <ul>
                { services.map( (serv) => {
                    return(
                        <li key={`search-option-${serv.title}`} onClick={ () => handleChangeService(serv) }>{serv.title}</li>
                    )
                }) }
            </ul>
        </SearchOptionsStyles>
    )
}