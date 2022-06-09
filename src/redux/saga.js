import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import authCollections from './collections/saga';
import authProduct from './product/saga';
export default function* rootSaga(getState) {
    yield all([authSaga(), authCollections(), authProduct()]);
}
