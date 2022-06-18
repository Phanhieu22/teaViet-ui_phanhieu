import axios from 'axios';
import { toast } from 'react-toastify';
const url = 'https:/mern-app-hieu.herokuapp.com';

export const userRegister = (url, user) => {
    return axios
        .post(url, user.payload)
        .then((response) => {
            toast.success('Đăng ký thành công');
            return response;
        })
        .catch((error) => {
            toast.error('tên đăng nhập đã tồn tại xin thử lại');
            return error;
        });
};
export const checkToken = async (url) => {
    return await axios
        .get(url)
        .then((res) => {
            return res;
        })
        .catch((res) => {
            toast.error('Lỗi định danh');
            return res;
        });
};
export const userLogin = async (url, user) => {
    return axios
        .post(url, user.payload)
        .then((response) => {
            if (response.data.success) {
                toast.success('đăng nhập thành công');
                return response;
            } else {
                toast.error('đăng nhập thất bại xin thử lại');
                return response;
            }
        })
        .catch((error) => {
            toast.error('lỗi sai tài khoản hoặc mật khẩu xin nhập lại');
            return error;
        });
};
export const ApiAddProductToCart = async (url, cartUser) => {
    return axios
        .patch(url, cartUser)
        .then((res) => {
            if (res.data.success) {
                console.log(res);
                toast.success('thêm sản phẩm vào giỏ hàng thành công');
                return res.data;
            } else {
                console.log(res);
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
export const ApiRemoveProductInCart = async (url, payload) => {
    console.log(payload);
    return axios
        .patch(url, payload)
        .then((res) => {
            if (res.data.success) {
                console.log(res);
                return res.data;
            } else {
                console.log(res);
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};
