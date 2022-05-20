
import React from "react";
import { useState } from "react";
import { Form,FormControl  } from 'react-bootstrap';

function Searchbar(props) {
  const { 
    onSearch 
  } = props;

  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      onSearch(searchText)
    }
  }

  return (
   
        <div className='control'>
            <input
                className="form-control"
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                type="text"
                value={searchText}
                placeholder="Search your movies"
                />
        </div>
  
  );
}

export default Searchbar;