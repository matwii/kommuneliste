import React from 'react';

const RadioButtonGroup = ({showStatus}) => {
  return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-light" onClick={() => showStatus('Gyldig')}>
              <input type="radio" name="options" id="option1" autoComplete="off"/> Active
          </label>
          <label className="btn btn-light" onClick={() => showStatus('Utgått')}>
              <input type="radio" name="options" id="option2" autoComplete="off"/> Inactive
          </label>
          <label className="btn btn-light active" onClick={() => showStatus('All')}>
              <input type="radio" name="options" id="option3" autoComplete="off"/> All
          </label>
      </div>
  )
};

export default RadioButtonGroup