import { toast } from 'react-toastify';
import { createActions, createAction } from 'redux-actions';

const setUpUser = createActions({
    setUpUserRequest: undefined,
    setUpUserSuccess: (payload) => {
        toast.success(`xin chào bạn chúc bạn có một ngày tốt lành`);
        return payload;
    },
    setUpUserFailure: (error) => error,
});

export { setUpUser };
