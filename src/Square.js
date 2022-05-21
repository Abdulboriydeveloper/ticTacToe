import React from 'react';

const Square = props => (
  <div className={`${props.winnerClass} square`} onClick={props.onClick}>
    {props.value}
  </div>
);

export default Square;
