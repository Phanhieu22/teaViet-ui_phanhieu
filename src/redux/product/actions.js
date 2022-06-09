import { createActions, createAction } from 'redux-actions';

const editProduct = createActions({
    pushDataProductToReducer: (payload) => payload,
});
const getTypeAction = (reduxActions) => {
    return reduxActions().type;
};

const getOneProduct = createActions({
    request: (payload) => payload,
    success: (payload) => payload,
    failure: (error) => error,
});
export { editProduct, getTypeAction, getOneProduct };
