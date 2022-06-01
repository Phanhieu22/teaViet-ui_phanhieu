import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { checkToken, RequestGetUser, userLogin, userRegister } from '../../api/auth.js';
import apiConfig from '../../config/authApi';
import History from '../../History.js';
import setAuthToken from '../../utils/setAuthToken';
import { setUpUser } from '../action';
import * as actions from './action';
import * as actions2 from '../action';
import { LOCAL_STOGARE_TOKEN_NAME } from './constans';

function* workerGetUser() {
    const user = yield call(RequestGetUser);
}
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
    console.log(response);
    if (response.data?.success) {
        // lưu token vào local storage
        localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME, response.data.accessToken);
        if (localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STOGARE_TOKEN_NAME]);
        }

        const testToken = yield call(checkToken, `${apiConfig.apiGateway.server1}/auth`);
        console.log(testToken);

        if (testToken.data.success) {
            yield put(actions.createUser.createUserSuccess(testToken.data));
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

function* authSaga() {
    yield all([fork(watcherLoginUser), fork(watcherRegisterUser), fork(watcherSetUpUser), fork(watcherLogoutUser)]);
}

export default authSaga;
