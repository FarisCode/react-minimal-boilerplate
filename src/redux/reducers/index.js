import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import sample from './sample'

// combining multiple reducers to create one rootReducer
export default history => combineReducers({
  router: connectRouter(history),
  sample,
});