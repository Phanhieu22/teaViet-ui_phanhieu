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
            console.log(payload);
            return { ...state, collections: payload, isLoading: false };
        }
        case actions.getTypeAction(actions.getAllCollections.getAllCollectionsFailure): {
            return { ...state, isLoading: false };
        }

        default: {
            return state;
        }
    }
};

export default collections;
