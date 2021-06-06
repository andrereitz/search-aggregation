import { render, screen } from '@testing-library/react';

import { Loader } from './';

test('component/Loader - Render', () => {
    render(<Loader />)

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
})