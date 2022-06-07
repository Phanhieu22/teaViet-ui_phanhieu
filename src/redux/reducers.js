import Auth from '../redux/auth/reducers';
import collections from './collections/reducers';
import { combineReducers } from 'redux';
export default combineReducers({
    Auth,collections
});
