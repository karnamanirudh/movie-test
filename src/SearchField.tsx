import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

interface FunctionProps {
    inputFieldData( arg: string) : void
}

const SearchField : React.FC<FunctionProps> = (props) => {

    const [userInput, getUserInput] = useState('');

    const getUserData = (e: React.ChangeEvent<HTMLInputElement>)   => {
        getUserInput(e.target.value);
    }

    const searchInputData = () => {
        props.inputFieldData(userInput);
    }

    return(
        <div className='search-field'>
            <Input autoFocus onChange={(e) => getUserData(e)} value={userInput} placeholder='Enter Movie Name' className='user-input'/>
            <Button outline color="primary" onClick={searchInputData} className='btn'>Search</Button>{' '}
        </div>
    )
}

export default SearchField;