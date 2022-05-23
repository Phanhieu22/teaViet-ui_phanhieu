import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import iconFacebook from '../../../../assets/iconFacebook.jpg';
import iconGoogle from '../../../../assets/iconGoogle.png';
import iconTwitter from '../../../../assets/iconTwitter.png';
import { createUser } from '../../../../redux/auth/action';
import InputField from '../../../InputField';
import './register.scss';

function Register() {
    const [user, setUser] = useState({
        userName: '',
        password: '',
    });

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const initialValue = { userName: '', password: '', repeatPassword: '' };

    const dispatch = useDispatch();

    let location = useLocation();
    return (
        <>
            <Formik
                initialValues={initialValue}
                validationSchema={Yup.object().shape({
                    userName: Yup.string().required('user name is required'),
                    password: Yup.string().required('Password is required'),
                    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                })}
                onSubmit={({ password, userName }, { resetForm }) => {
                    //  gửi yêu cầu tạo tài khoản
                    dispatch(createUser.createUserRequest({ userName, password }));
                    resetForm({});
                }}>
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;

                    return (
                        <div className="backgroundForm">
                            {/*  do somethink here */}
                            <Box className="form">
                                <Box className="headerForm">
                                    <h2> Register now !</h2>
                                </Box>
                                <Form className="validateForm">
                                    <FastField
                                        name="userName"
                                        component={InputField}
                                        className="textField"
                                        label="User name*"
                                    />

                                    <FastField
                                        name="password"
                                        component={InputField}
                                        className="textField"
                                        label="Password*"
                                        type="password"
                                    />
                                    <FastField
                                        name="repeatPassword"
                                        component={InputField}
                                        className="textField"
                                        label="repeat password*"
                                        type="password"
                                    />
                                    <Box>
                                        <Grid className="controlsAction" container>
                                            <Grid item xs="6">
                                                <Button className="text-transform-none" component="a">
                                                    Forgot password
                                                </Button>
                                            </Grid>{' '}
                                            <Grid item xs="6">
                                                <Box className="d-flex rememberAccount">
                                                    <Checkbox {...label} defaultChecked />
                                                    <h4 className="d-block">remember me</h4>
                                                </Box>
                                            </Grid>{' '}
                                        </Grid>{' '}
                                    </Box>
                                    <Box>
                                        {' '}
                                        <Button className="submit" variant="contained" color="info" type="submit">
                                            Register
                                        </Button>
                                    </Box>
                                    <p className="toRegister">
                                        Do you already have an account
                                        <Link to={'/login'}>
                                            <Button className="text-transform-none" color="info">
                                                Login
                                            </Button>
                                        </Link>
                                    </p>
                                </Form>
                                <Box>
                                    <p>----------or register with-----------</p>
                                    <Box className="containerIcon">
                                        <Box className="icon">
                                            <img src={iconFacebook} alt="icon contact facebook" />
                                        </Box>{' '}
                                        <Box className="icon">
                                            <img src={iconGoogle} alt="icon contact facebook" />
                                        </Box>{' '}
                                        <Box className="icon">
                                            <img src={iconTwitter} alt="icon contact facebook" />
                                        </Box>{' '}
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    );
                }}
            </Formik>
        </>
    );
}

export default Register;
