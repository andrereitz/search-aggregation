import { render, screen } from '@testing-library/react';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { SEARCH_SERVICES } from '../../config/searchServices';

import { SearchOptions } from './';

test('component/SearchOptions - Render', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        search: {
            service: {
                title: 'Google',
                url: 'google.com'
            }
        }
    })

    render(
        <Provider store={store}>
            <SearchOptions services={SEARCH_SERVICES} />
        </Provider>
    )

    const searchOptionsElement = screen.getByTestId('searchOptions');

    expect(searchOptionsElement).toBeInTheDocument();
})