import axios from 'axios';
import { toast } from 'react-toastify';

export const getOneProductApi = async (url) => {
    return axios
        .get(url)
        .then((response) => {
            if (response.data.success) {
                return response;
            } else {
                toast.error('lấy dữ liệu thất bại');
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
