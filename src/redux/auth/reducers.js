import {
    getUser,
    getTypeAction,
    createUser,
    loginUser,
    logoutUser,
    addProductToCart,
    removeProductInCart,
} from './action';
const INIT_STATE = {
    authLoading: false,
    isAuthenticated: false,
    user: null,
};

const Auth = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        // setup us
        case getTypeAction(getUser.getUserRequest): {
            return state;
        }
        //user  register
        case getTypeAction(createUser.createUserRequest): {
            return { ...state, authLoading: true, isAuthenticated: false };
        }

        case getTypeAction(createUser.createUserSuccess): {
            return { ...state, authLoading: false, isAuthenticated: true, user: payload.user };
        }
        case getTypeAction(createUser.createUserFailure): {
            return { ...state, authLoading: false, isAuthenticated: false };
        }

        // login user
        case getTypeAction(loginUser.loginUserRequest): {
            return { ...state, authLoading: true, isAuthenticated: false };
        }
        case getTypeAction(loginUser.loginUserSuccess): {
            return { ...state, authLoading: false, isAuthenticated: true, user: payload.user };
        }
        case getTypeAction(loginUser.loginUserFailure): {
            return { ...state, authLoading: false, isAuthenticated: false };
        }
        // logout
        case getTypeAction(logoutUser.logoutUseSuccess): {
            return { ...state, authLoading: false, isAuthenticated: false, user: null };
        }

        // add product to cart

        case getTypeAction(addProductToCart.addProductToCartRequest): {
            return { ...state, authLoading: true };
        }
        case getTypeAction(addProductToCart.addProductToCartSuccess): {
            return { ...state, authLoading: false, user: { ...state.user, cart: payload.cart } };
        }
        case getTypeAction(addProductToCart.addProductToCartFailure): {
            return { ...state, authLoading: false };
        }

        // remove product in Cart
        case getTypeAction(removeProductInCart.removeProductInCartRequest): {
            return { ...state, authLoading: true };
        }
        case getTypeAction(removeProductInCart.removeProductInCartSuccess): {
            return { ...state, authLoading: false, user: { ...state.user, cart: payload.cart } };
        }
        case getTypeAction(removeProductInCart.removeProductInCartFailure): {
            return { ...state, authLoading: false };
        }
        default: {
            return state;
        }
    }
};

export default Auth;
