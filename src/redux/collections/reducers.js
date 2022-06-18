import * as actions from './actions';
const INIT_STATE = {
    collections: [],
    isLoading: false,
};
const collections = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        // post product

        case actions.getTypeAction(actions.postAProduct.postAProductRequest): {
            return { ...state, isLoading: true };
        }
        case actions.getTypeAction(actions.postAProduct.postAProductSuccess): {
            console.log(payload);
            return { ...state, collections: [...state.collections, payload.collections], isLoading: false };
        }
        case actions.getTypeAction(actions.postAProduct.postAProductFailure): {
            console.log(payload);
            return { ...state, isLoading: false };
        }

        // get the corresponding data into the table
        case actions.getTypeAction(actions.getAllCollections.getAllCollectionsSuccess): {
            return { ...state, collections: payload, isLoading: false };
        }
        case actions.getTypeAction(actions.getAllCollections.getAllCollectionsFailure): {
            return { ...state, isLoading: false };
        }

        /// edit product start
        case actions.getTypeAction(actions.editProduct.editProductRequest): {
            return { ...state, isLoading: true };
        }
        case actions.getTypeAction(actions.editProduct.editProductSuccess): {
            const newState = { ...state };
            const newCollections = newState.collections.map((item) => {
                if (item._id === payload._id) {
                    return payload;
                } else {
                    return item;
                }
            });

            return { ...state, collections: newCollections, isLoading: false };
        }
        case actions.getTypeAction(actions.editProduct.editProductFailure): {
            return { ...state, isLoading: false };
        }
        /// edit product end

        // delete product
        case actions.getTypeAction(actions.deleteProduct.deleteProductRequest): {
            return { ...state, isLoading: true };
        }
        case actions.getTypeAction(actions.deleteProduct.deleteProductSuccess): {
            const newState = { ...state };

            const newCollections = newState.collections.filter((item) => {
                return item._id !== payload._id;
            });
            console.log(newCollections);

            return { ...state, collections: newCollections, isLoading: true };
        }
        case actions.getTypeAction(actions.deleteProduct.deleteProductFailure): {
            return { ...state, isLoading: false };
        }

        default: {
            return state;
        }
    }
};

export default collections;
