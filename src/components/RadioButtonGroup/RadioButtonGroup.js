import React from 'react';

const RadioButtonGroup = () => {
  return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-light">
              <input type="radio" name="options" id="option1" autoComplete="off"/> Active
          </label>
          <label className="btn btn-light">
              <input type="radio" name="options" id="option2" autoComplete="off"/> Inactive
          </label>
          <label className="btn btn-light active">
              <input type="radio" name="options" id="option3" autoComplete="off"/> All
          </label>
      </div>
  )
};

export default RadioButtonGroup