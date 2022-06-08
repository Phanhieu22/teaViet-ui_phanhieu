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
export const getOneProduct = async (url) => {
    return axios
        .get(url)
        .then((response) => {
            if (response.data.success) {
                return response.data.product;
            } else {
                toast.error('lấy dữ liệu thất bại');
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
export const editProduct = async (url, product) => {
    return axios
        .put(url, product)
        .then((response) => {
            if (response.data.success) {
                toast.success('chỉnh sửa sản phẩm thành công');
                console.log(response);

                return response.data;
            } else {
                toast.error('yêu cầu chỉnh sửa thất bại');
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
export const deleteProduct = async (url) => {
    console.log(url);
    return axios
        .delete(url)
        .then((response) => {
            if (response.data.success) {
                toast.success('xoá sản phẩm thành công');
                return response.data;
            } else {
                toast.error('yêu cầu xoá thất bại');
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
