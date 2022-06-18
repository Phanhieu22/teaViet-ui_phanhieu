import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
    ApiAddProductToCart,
    ApiRemoveProductInCart,
    checkToken,
    userLogin,
    userRegister,
} from '../../api/auth.js';
import apiConfig from '../../config/authApi';
import History from '../../History.js';
import setAuthToken from '../../utils/setAuthToken';
import { setUpUser } from '../action';
import * as actions from './action';
import * as actions2 from '../action';
import { LOCAL_STOGARE_TOKEN_NAME } from './constans';


function* workerLoginUser(user) {
    const response = yield call(userLogin, `${apiConfig.apiGateway.server1}/auth/login`, user);
    if (response?.data?.success) {
        // lưu token vào local storage
        localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME, response.data.accessToken);
        if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STOGARE_TOKEN_NAME]);
        }

        const testToken = yield call(checkToken, `${apiConfig.apiGateway.server1}/auth`);

        if (testToken.data.success) {
            yield put(actions.loginUser.loginUserSuccess(testToken.data));
            History.push('/');
        } else {
            setAuthToken(null);
            localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME);
        }
    } else {
        yield put(actions.loginUser.loginUserFailure());
    }
}

function* workerUserRegister(user) {
    console.log(user);
    const response = yield call(userRegister, `${apiConfig.apiGateway.server1}/auth/register`, user);
    if (response.data?.success) {
        // lưu token vào local storage
        localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME, response.data.accessToken);
        if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STOGARE_TOKEN_NAME]);
        }

        const dataGood = yield call(checkToken, `${apiConfig.apiGateway.server1}/auth`);

        if (dataGood.data.success) {
            yield put(actions.createUser.createUserSuccess(dataGood.data));
            History.push('/');
        } else {
            setAuthToken(null);
        }
    } else {
        yield put(actions.createUser.createUserFailure);
    }
}
function* workerSetUpUser() {
    if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STOGARE_TOKEN_NAME]);
        const testToken = yield call(checkToken, `${apiConfig.apiGateway.server1}/auth`);
        if (testToken.data.success) {
            yield put(actions.loginUser.loginUserSuccess(testToken.data));
            yield call(actions2.setUpUser.setUpUserSuccess, testToken.data);
        } else {
            setAuthToken(null);
            localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME);
        }
    }
}
function* workerLogoutUser() {
    if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
        setAuthToken(null);
        localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME);
        yield put(actions.logoutUser.logoutUseSuccess());
    }
}
function* workerAddProductToCart(params) {
    const response = yield call(ApiAddProductToCart, `${apiConfig.apiGateway.server1}/auth/user`, params.payload);
    console.log(response);

    if (response?.success) {
        yield put(actions.addProductToCart.addProductToCartSuccess(response.cart));
    } else {
        yield put(actions.addProductToCart.addProductToCartFailure(response));
    }
}
function* workerRemoveProductInCart(params) {
    const response = yield call(
        ApiRemoveProductInCart,
        `${apiConfig.apiGateway.server1}/auth/user/cart`,
        params.payload
    );
    console.log(response);

    if (response?.success) {
        yield put(actions.removeProductInCart.removeProductInCartSuccess(response.cart));
    } else {
        yield put(actions.removeProductInCart.removeProductInCartFailure(response));
    }
}
/// cầu trúc redux saga
export function* watcherLoginUser() {
    yield takeLatest(actions.loginUser.loginUserRequest, workerLoginUser);
}

export function* watcherRegisterUser() {
    yield takeLatest(actions.createUser.createUserRequest, workerUserRegister);
}
export function* watcherSetUpUser() {
    yield takeLatest(setUpUser.setUpUserRequest, workerSetUpUser);
}
export function* watcherLogoutUser() {
    yield takeLatest(actions.logoutUser.logoutUseRequest, workerLogoutUser);
}
export function* watcherAddProductToCart() {
    yield takeLatest(actions.addProductToCart.addProductToCartRequest, workerAddProductToCart);
}
export function* watcherRemoveProductInCart() {
    yield takeLatest(actions.removeProductInCart.removeProductInCartRequest, workerRemoveProductInCart);
}

function* authSaga() {
    yield all([
        fork(watcherLoginUser),
        fork(watcherRegisterUser),
        fork(watcherSetUpUser),
        fork(watcherLogoutUser),
        fork(watcherAddProductToCart),
        fork(watcherRemoveProductInCart),
    ]);
}

export default authSaga;
