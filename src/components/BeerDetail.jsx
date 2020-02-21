import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedBeer.names} - {props.selectedBeer.location}</h1>
      <h2>Submitted {props.selectedBeer.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedBeer.issue}</em></h4>
      <hr/>
    </div>
  );
}

BeerDetail.propTypes = {
  selectedBeer: PropTypes.object
};

export default BeerDetail;
