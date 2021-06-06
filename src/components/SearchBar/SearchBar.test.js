import { render, screen, cleanup } from '@testing-library/react';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { SearchBar } from './';

afterEach(() => {
    cleanup();
})

test('component/SearchBar - Render', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        search: {
            service: {
                title: 'Google',
                url: 'google.com'
            },
            loading: false
        }
    })

    render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    )

    const searchBarElement = screen.getByTestId('searchBar');

    expect(searchBarElement).toBeInTheDocument();
})

test('component/SearchBar - Loading', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        search: {
            service: {
                title: 'Google',
                url: 'google.com'
            },
            loading: true
        }
    })

    render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    )

    const searchBarElement = screen.getByTestId('searchBar');
    const loaderElement = screen.getByTestId('loader');

    expect(searchBarElement).toBeInTheDocument();
    expect(loaderElement).toBeInTheDocument();
})