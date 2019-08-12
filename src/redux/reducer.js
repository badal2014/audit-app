import {combineReducers} from 'redux';
import login from './login/reducer';
import password from './changePassword/reducer';
import inventory from './login/reducer'

export default combineReducers({
   login, 
   password
});