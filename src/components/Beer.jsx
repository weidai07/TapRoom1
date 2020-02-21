import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  const beerInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onBeerSelection(props.beerId);}}>
        {beerInformation}
      </div>
    );
  } else {
    return (
      <div>
        {beerInformation}
      </div>
    );
  }
}

Beer.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func,
  beerId: PropTypes.string.isRequired
};

export default Beer;
