import { createActions, createAction } from 'redux-actions';

const setUpUser = createActions({
    setUpUserRequest: undefined,
    setUpUserSuccess: (payload) => payload,
    setUpUserFailure: (error) => error,
});

export { setUpUser };
