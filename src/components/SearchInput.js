import React from 'react'

const SearchInput = ({onTextChange}) => {
    return (
        <div className="input-group col-md-6 col-sm-12">
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
            </div>
            <input placeholder="Search here" onChange={onTextChange} className="form-control" type="text" />
        </div>
    )
};

export default SearchInput;