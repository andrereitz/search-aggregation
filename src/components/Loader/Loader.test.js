import { render, screen, cleanup } from '@testing-library/react';

import { Loader } from './';

afterEach(() => {
    cleanup();
})

test('component/Loader - Render', () => {
    render(<Loader />)

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
})