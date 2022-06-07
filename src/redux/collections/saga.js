import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { postAProduct, getAllCollections } from '~/api/collections';
import * as actions from './actions';
import apiConfig from '../../config/authApi';

function* workerPostAProduct(product) {
    const response = yield call(postAProduct, `${apiConfig.apiGateway.server1}/collections`, product);
    console.log(response);
    if (response.data.success) {
        yield put(actions.postAProduct.postAProductSuccess(response.data));
    } else {
        yield put(actions.postAProduct.postAProductFailure());
    }

    // logic goi api
}
function* workerGetAllCollections(params) {
    const response = yield call(getAllCollections, `${apiConfig.apiGateway.server1}/collections/${params.payload}`);
    if (response.data.success) {
        yield put(actions.getAllCollections.getAllCollectionsSuccess(response.data.collection));
    } else {
        yield put(actions.getAllCollections.getAllCollectionsFailure(response));
    }
}

export function* watcherPostAProduct() {
    yield takeLatest(actions.postAProduct.postAProductRequest, workerPostAProduct);
}

export function* watcherGetAllCollections() {
    yield takeLatest(actions.getAllCollections.getAllCollectionsRequest, workerGetAllCollections);
}
function* authCollections() {
    yield all([fork(watcherPostAProduct), fork(watcherGetAllCollections)]);
}

export default authCollections;
