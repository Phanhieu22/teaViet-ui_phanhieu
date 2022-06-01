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
import InputField from '../../../InputField';
import { createUser } from '~/redux/auth/action';
import styles from './register.module.scss';

const cx = classnames.bind(styles);
function Register() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const initialValue = { email: '', password: '' };
    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues={initialValue}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('vui lòng nhập trường này'),
                    password: Yup.string().required('vui lòng nhập trường này'),
                })}
                onSubmit={(value, { resetForm }) => {
                    dispatch(createUser.createUserRequest(value));
                    resetForm({});
                }}>
                {(formikProps) => {
                    // console.log({ values, errors, touched });
                    return (
                        <div className={cx('wrapper')}>
                            <img className={cx('background')} src={login} alt="background" />
                            <div className={cx('form')}>
                                <h2> Đăng ký !</h2>

                                <Form className={cx('validateForm')}>
                                    <FastField
                                        name="email"
                                        component={InputField}
                                        className={cx('textField')}
                                        label="Nhập email để đăng ký *"
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
                                        <Button className={cx('submit')} type="submit">
                                            Đăng ký
                                        </Button>
                                    </Box>
                                    <span className={cx('toRegister')}>
                                        bạn đã có tài khoản vui lòng đăng nhập
                                        <Button to="./register" className={cx('customBtnForgotPass')}>
                                            tại đây
                                        </Button>
                                    </span>
                                </Form>
                                <Box>
                                    <p>----------or login with-----------</p>
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

export default Register;
