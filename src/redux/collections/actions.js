import { createActions, createAction } from 'redux-actions';

const postAProduct = createActions({
    postAProductRequest: (payload) => payload,
    postAProductSuccess: (payload) => payload,
    postAProductFailure: (error) => error,
});

const getAllCollections = createActions({
    getAllCollectionsRequest: (payload) => payload,
    getAllCollectionsSuccess: (payload) => payload,
    getAllCollectionsFailure: (error) => error,
});

const editProduct = createActions({
    editProductRequest: (payload) => payload,
    editProductSuccess: (payload) => payload,
    editProductFailure: (error) => error,
});
const deleteProduct = createActions({
    deleteProductRequest: (payload) => payload,
    deleteProductSuccess: (payload) => payload,
    deleteProductFailure: (error) => error,
});

const getTypeAction = (reduxActions) => {
    return reduxActions().type;
};
export { postAProduct, getTypeAction, getAllCollections, editProduct,deleteProduct };
