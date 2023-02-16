import React from 'react';
import {ToastContainer} from 'react-toastify'
import Leftside from '../Components/leftside/leftside';
import Center from '../Components/center/center';

const Home = () => {
  return (
    <React.Fragment>
    <div className='Home'>
      <div className='leftside-div'>
        <Leftside />
      </div>
      <div className='center-div'>
        <Center />
      </div>
    </div>
    <ToastContainer />
    </React.Fragment>
  );
};

export default Home;
