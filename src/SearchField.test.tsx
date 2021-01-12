import { render, screen, fireEvent } from '@testing-library/react'
import { Button, Input } from 'reactstrap';
import SearchField from './SearchField';

describe('Test SearchField Component', () => {
    test('calls onClick prop when clicked', () => {
        const callBackFunction = jest.fn();
        const handleClick = jest.fn();
        
        render(<SearchField inputFieldData={callBackFunction} />);
            <Button onClick={handleClick}></Button>
        fireEvent.click(screen.getByText("Search"));
    })

    test('change the value of input text when user enters the input in the search box', () =>{
        const handleChange = jest.fn();
        let query='Avengers'
        const { getByPlaceholderText } = render(<Input onChange={handleChange} value='' placeholder='Enter Movie Name'/>);
        let input = getByPlaceholderText("Enter Movie Name");
        fireEvent.change(input, {target: { value: query }})
    })

})