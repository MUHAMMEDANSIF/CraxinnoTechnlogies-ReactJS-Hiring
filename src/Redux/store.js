import {createStore} from 'redux'

const initiolvalue = {
    totalbalance:0,
  };

  const appReducer = (prevstate = initiolvalue, action) => ({
    ...prevstate,
    [action.type]: Number(action.payload) + Number(prevstate.totalbalance),
  });
  

const store = createStore(appReducer)

export default store;
