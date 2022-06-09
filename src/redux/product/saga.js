import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getOneProductApi } from '~/api/product';
import { getOneProduct } from './actions';
import apiConfig from '../../config/authApi';
function* workerGetOneProduct(params) {
    const response = yield call(
        getOneProductApi,
        `${apiConfig.apiGateway.server1}/collections/getOne/${params.payload}`
    );
    if (response.data.success) {
        yield put(getOneProduct.success(response.data.product));
    } else {
        yield put(getOneProduct.failure(response));
    }
}

function* watcherGetOneProduct() {
    yield takeLatest(getOneProduct.request, workerGetOneProduct);
}

function* authProduct() {
    yield all([fork(watcherGetOneProduct)]);
}
export default authProduct;
