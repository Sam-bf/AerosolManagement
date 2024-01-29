import { combineReducers } from 'redux';
import  authReducer  from './authReducer';
import  appReducer  from './appareilReducer';


const rootReducer = combineReducers({
    users: authReducer,
    appareils: appReducer
});

export default rootReducer;