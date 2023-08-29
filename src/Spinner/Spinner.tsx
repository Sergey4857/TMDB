import React, { FC } from 'react';
import { Blocks } from 'react-loader-spinner';

const Spinner: FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Spinner;
