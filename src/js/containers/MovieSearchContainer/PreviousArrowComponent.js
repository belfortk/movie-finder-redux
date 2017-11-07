import React from 'react'

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <button
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    >PREVIOUS</button>
  );
}


export default SamplePrevArrow;
