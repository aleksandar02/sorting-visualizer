import React from 'react';

const Node = props => {
  const width = 100 / props.arrLength;

  return (
    <div
      className='Node'
      style={{
        height: props.arrValue * 5 + 'px',
        width: width + '%'
      }}
    ></div>
  );
};

export default Node;
