import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewBeerForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Beer Type'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='Amount in Pints'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Are you over the age of 21?'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;