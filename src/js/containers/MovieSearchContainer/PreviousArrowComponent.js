import React from 'react'

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <button
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    >PREVIOUS</button>
  );
}


export default SamplePrevArrow;
