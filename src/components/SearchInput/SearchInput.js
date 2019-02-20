import React from 'react'
import './SearchInput.css';

const SearchInput = ({onTextChange}) => {
    return (
        <div className="input-group col-md-6 col-sm-12">
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
            </div>
            <input placeholder="Type here.." onChange={onTextChange} className="form-control" type="text" />
        </div>
    )
};

export default SearchInput;