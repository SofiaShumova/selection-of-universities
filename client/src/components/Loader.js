import React from 'react';
import Loader from 'react-loader-spinner';

export const LoaderDots = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={style} className="load-block">
      <Loader type="ThreeDots" color="#000000" height={80} width={80} />
    </div>
  );
};
