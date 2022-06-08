import Auth from '../redux/auth/reducers';
import collections from './collections/reducers';
import { combineReducers } from 'redux';
import Product from './product/reducer';
export default combineReducers({
    Auth,
    collections,
    Product,
});
