import { render, screen, cleanup } from '@testing-library/react';

import { GoogleMock }  from '../../mocks';

import { SearchResultsItem } from './';

afterEach(() => {
    cleanup();
})

test('component/SearchResults - Render', () => {
    render( <SearchResultsItem result={GoogleMock.results.results.organic[0]} /> )

    const searchResultsItemElement = screen.getByTestId('searchResultsItem');

    expect(searchResultsItemElement).toBeInTheDocument();
})