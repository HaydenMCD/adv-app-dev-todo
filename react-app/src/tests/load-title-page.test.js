import { render } from '@testing-library/react';
import App from '../App';

it("renders the page correctly", ()=> {
    const { getByTestId } = render(<App />);
    expect(getByTestId('page-title')).toHaveTextContent("Order of the day")
    expect(getByTestId('add-item-button')).toBeInTheDocument
    expect(getByTestId('add-item-input')).toBeInTheDocument
})