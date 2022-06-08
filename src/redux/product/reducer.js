import { editProduct, getTypeAction } from './actions';

const INIT_STATE = {
    objectEditing: {},
    productDetail: {},
    isLoading: false,
};
const Product = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case getTypeAction(editProduct.pushDataProductToReducer): {
            return { ...state, objectEditing: payload };
        }
        default: {
            return state;
        }
    }
};

export default Product;
