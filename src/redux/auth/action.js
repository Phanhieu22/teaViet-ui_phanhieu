import { createActions, createAction } from 'redux-actions';
const getUser = createActions({
    getUserRequest: undefined,
    getUserSuccess: (payload) => payload,
    getUserFailure: (error) => error,
});

const createUser = createActions({
    createUserRequest: (payload) => payload,
    createUserSuccess: (payload) => {
        return payload;
    },
    createUserFailure: undefined,
});

const loginUser = createActions({
    loginUserRequest: (payload) => payload,
    loginUserSuccess: (payload) => {
        // toast.success('Đăng ký thành công');
        return payload;
    },
    loginUserFailure: undefined,
});
const logoutUser = createActions({
    logoutUseRequest: undefined,
    logoutUseSuccess: undefined,
});

const addProductToCart = createActions({
    addProductToCartRequest: (payload) => payload,
    addProductToCartSuccess: (payload) => payload,
    addProductToCartFailure: (error) => error,
});

const removeProductInCart = createActions({
    removeProductInCartRequest: (payload) => payload,
    removeProductInCartSuccess: (payload) => payload,
    removeProductInCartFailure: (error) => error,
});

const getTypeAction = (reduxActions) => {
    return reduxActions().type;
};

export { getUser, getTypeAction, createUser, loginUser, logoutUser, addProductToCart, removeProductInCart };
