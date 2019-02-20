import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};

export default Spinner;