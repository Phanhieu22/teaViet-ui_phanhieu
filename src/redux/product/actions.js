import { createActions, createAction } from 'redux-actions';

const editProduct = createActions({
    pushDataProductToReducer: (payload) => payload,
    
});
const getTypeAction = (reduxActions) => {
    return reduxActions().type;
};
export { editProduct, getTypeAction };
