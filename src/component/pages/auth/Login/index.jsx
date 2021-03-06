import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import classnames from 'classnames/bind';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import login from '~/assets/images/login.jpg';
import Button from '~/component/Button';
import iconFacebook from '../../../../assets/iconFacebook.jpg';
import iconGoogle from '../../../../assets/iconGoogle.png';
import iconTwitter from '../../../../assets/iconTwitter.png';
import { loginUser } from '../../../../redux/auth/action';
import InputField from '../../../InputField';
import { useSelector } from 'react-redux';
import { selectorAuthState } from '~/redux/auth/selector';
import styles from './login.module.scss';

const cx = classnames.bind(styles);
function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const initialValue = { email: '', password: '' };
    const dispatch = useDispatch();
    const isLoading = useSelector(selectorAuthState);

    return (
        <>
            <Formik
                initialValues={initialValue}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('vui lòng nhập trường này'),
                    password: Yup.string()
                        .required('vui lòng nhập trường này')
                        .min(8, 'Mật khẩu quá ngắn vui lòng nhập hơn 8 ký tự')
                        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                })}
                onSubmit={(value, { resetForm }) => {
                    dispatch(loginUser.loginUserRequest(value));
                    resetForm({});
                }}>
                {(formikProps) => {
                    // console.log({ values, errors, touched });
                    return (
                        <div className={cx('wrapper')}>
                            {/*  do somethink here */}
                            <img className={cx('background')} src={login} alt="background" />
                            <div className={cx('form')}>
                                <h2> Đăng nhập !</h2>

                                <Form className={cx('validateForm')}>
                                    <FastField
                                        name="email"
                                        component={InputField}
                                        className={cx('textField')}
                                        label="Nhập email để đăng nhập *"
                                    />

                                    <FastField
                                        name="password"
                                        component={InputField}
                                        className={cx('textField')}
                                        label="Password*"
                                        type="password"
                                    />
                                    <div className={cx('controlsAction')}>
                                        <div className={cx('forgotPass')}>
                                            <Button to="/forgotPass" className={cx('customBtnForgotPass')}>
                                                Quên mật khẩu
                                            </Button>
                                        </div>
                                        <div className={cx('remember')}>
                                            <Checkbox {...label} defaultChecked />
                                            <h5 className={cx('d-block')}>lưu tài khoản</h5>
                                        </div>
                                    </div>
                                    <Box>
                                        {' '}
                                        <Button
                                            isLoading={isLoading.authLoading}
                                            className={cx('submit')}
                                            type="submit">
                                            Đăng nhập
                                        </Button>
                                    </Box>
                                    <span className={cx('toRegister')}>
                                        bạn chưa có tài khoản vui lòng đăng ký
                                        <Button to="/register" className={cx('customBtnHere')}>
                                            tại đây
                                        </Button>
                                    </span>
                                </Form>
                                <Box>
                                    <p>----------Hoặc đăng nhập với----------</p>
                                    <Box className={cx('containerIcon')}>
                                        <Box className={cx('icon')}>
                                            <img src={iconFacebook} alt="icon contact facebook" />
                                        </Box>{' '}
                                        <Box className={cx('icon')}>
                                            <img src={iconGoogle} alt="icon contact facebook" />
                                        </Box>{' '}
                                        <Box className={cx('icon')}>
                                            <img src={iconTwitter} alt="icon contact facebook" />
                                        </Box>{' '}
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </>
    );
}

export default Login;
