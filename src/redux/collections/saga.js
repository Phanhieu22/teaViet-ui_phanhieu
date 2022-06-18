import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { postAProduct, getAllCollections, editProduct, deleteProduct } from '~/api/collections';
import * as actions from './actions';
import apiConfig from '../../config/authApi';

function* workerPostAProduct(product) {
    const response = yield call(postAProduct, `${apiConfig.apiGateway.server1}/collections`, product);
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
function* workerEditProduct(params) {
    const response = yield call(
        editProduct,
        `${apiConfig.apiGateway.server1}/collections/${params.payload.slug}`,
        params.payload.product
    );
    if (response.success) {
        yield put(actions.editProduct.editProductSuccess(response.product));
    } else {
        yield put(actions.editProduct.editProductFailure(response));
    }
}
function* workerDeleteProduct(params) {
    const response = yield call(deleteProduct, `${apiConfig.apiGateway.server1}/collections/del/${params.payload}`);
    if (response.success) {
        yield put(actions.deleteProduct.deleteProductSuccess(response.product));
    } else {
        yield put(actions.deleteProduct.deleteProductFailure(response));
    }
}
export function* watcherPostAProduct() {
    yield takeLatest(actions.postAProduct.postAProductRequest, workerPostAProduct);
}

export function* watcherGetAllCollections() {
    yield takeLatest(actions.getAllCollections.getAllCollectionsRequest, workerGetAllCollections);
}
export function* watcherEditProduct() {
    yield takeLatest(actions.editProduct.editProductRequest, workerEditProduct);
}
export function* watcherDeleteProduct() {
    yield takeLatest(actions.deleteProduct.deleteProductRequest, workerDeleteProduct);
}

function* authCollections() {
    yield all([
        fork(watcherPostAProduct),
        fork(watcherGetAllCollections),
        fork(watcherEditProduct),
        fork(watcherDeleteProduct),
    ]);
}

export default authCollections;
