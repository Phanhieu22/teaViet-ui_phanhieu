import { editProduct, getTypeAction, getOneProduct } from './actions';

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

        case getTypeAction(getOneProduct.request): {
            return { ...state, isLoading: true };
        }
        case getTypeAction(getOneProduct.success): {
            return { ...state, objectEditing: payload, isLoading: false };
        }
        case getTypeAction(getOneProduct.failure): {
            return { ...state, isLoading: false };
        }

        default: {
            return state;
        }
    }
};

export default Product;
