import axios from 'axios';
import { toast } from 'react-toastify';

export const postAProduct = async (url, product) => {
    return axios
        .post(url, product.payload)
        .then((response) => {
            if (response.data.success) {
                toast.success('tạo mới sản phẩm thành công');
                return response;
            } else {
                toast.error('tạo sản phẩm thất bại xin thử lại');
                return response;
            }
        })
        .catch((error) => {
            toast.error('trường tên sản phẩm đã có hoặc bị trùng với sản phẩm khác xin thử lại');
            return error;
        });
};

export const getAllCollections = async (url) => {
    return axios
        .get(url)
        .then((response) => {
            if (response.data.success) {
                return response;
            } else {
                toast.error('bạn không có quyền hoặc đương truyền không ổn định xin thử lại sau');
                return response;
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
