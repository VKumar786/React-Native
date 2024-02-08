import {combineReducers} from 'redux';
import authReducer from './redux/authReducer';
import empFormReducer from './redux/employeeFormReducer';
import empReducer from './redux/employeeReducer';

export default combineReducers({
  auth: authReducer,
  empForm: empFormReducer,
  emp: empReducer,
});
