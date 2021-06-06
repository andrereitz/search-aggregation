import { render, screen, cleanup } from '@testing-library/react';

import { GoogleMock }  from '../../mocks';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { SearchResults } from './';

afterEach(() => {
    cleanup();
})

const process = jest.fn(() => {
    return GoogleMock.results.results.organic.slice(0, 10)
})

test('component/SearchResults - Render', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        search: {
            service: {
                title: 'Google',
                url: 'google.com'
            },
            loading: false,
            results:  [
                GoogleMock.results.results.organic[0],
                GoogleMock.results.results.organic[1]
            ]
        }
    })

    render(
        <Provider store={store}>
            <SearchResults />
        </Provider>
    )

    const searchResultsElement = screen.getByTestId('searchResults');

    expect(searchResultsElement).toBeInTheDocument();
})