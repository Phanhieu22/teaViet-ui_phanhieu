import { getUser, getTypeAction, createUser, loginUser, logoutUser } from './action';
const INIT_STATE = {
    authLoading: true,
    isAuthenticated: false,
    user: null,
};

const Auth = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case getTypeAction(getUser.getUserRequest): {
            return state;
        }
        case getTypeAction(createUser.createUserSuccess): {
            return { ...state, authLoading: false, isAuthenticated: true, user: payload.user };
        }
        case getTypeAction(createUser.createUserFailure): {
            return { ...state, authLoading: false, isAuthenticated: false };
        }
        case getTypeAction(loginUser.loginUserSuccess): {
            return { ...state, authLoading: false, isAuthenticated: true, user: payload.user };
        }
        case getTypeAction(loginUser.loginUserFailure): {
            return { ...state, authLoading: false, isAuthenticated: false };
        }
        case getTypeAction(logoutUser.logoutUseSuccess): {
            return { ...state, authLoading: false, isAuthenticated: false, user: null };
        }
        default: {
            return state;
        }
    }
};

export default Auth;
