import PropTypes from 'prop-types';
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

    function _handleChangeService(e){
        const payload = {
            title: e.currentTarget.getAttribute('data-title'),
            url: e.currentTarget.getAttribute('data-url'),
        }

        setActive(false)
        dispatch(changeSearch(payload))
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
                        <li key={`search-option-${serv.title}`} data-title={serv.title} data-url={serv.url} onClick={ _handleChangeService }>{serv.title}</li>
                    )
                }) }
            </ul>
        </SearchOptionsStyles>
    )
}

SearchOptions.propTypes = {
    services: PropTypes.array
};