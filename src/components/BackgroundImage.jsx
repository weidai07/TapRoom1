import Background from '../assets/images/background.jpg';
import React from 'react';

function BackgroundImage(){
  var style = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
  };
  return(
    <div>
      <img style={style} src={Background} alt="Background image"/>
    </div>
  );
}

export default BackgroundImage;