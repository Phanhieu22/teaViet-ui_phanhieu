import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'http://localhost:5000';

export const RequestGetUser = async () => {
    const user = await axios.get(`${url}/api/auth/user`);
    return user;
};

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
