// select auth state
export const selectorAuthState = (state) => {
    return state.Auth;
};

export const selectCartUser = (state) => {
    return state.Auth.user?.cart;
};
