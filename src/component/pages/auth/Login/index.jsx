import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import iconFacebook from '../../../../assets/iconFacebook.jpg';
import iconGoogle from '../../../../assets/iconGoogle.png';
import iconTwitter from '../../../../assets/iconTwitter.png';
import { loginUser } from '../../../../redux/auth/action';
import InputField from '../../../InputField';
import './login.scss';

function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const initialValue = { userName: '', password: '' };
    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues={initialValue}
                validationSchema={Yup.object().shape({
                    userName: Yup.string().required('user name is required'),
                    password: Yup.string().required('password is required'),
                })}
                onSubmit={(value, { resetForm }) => {
                    dispatch(loginUser.loginUserRequest(value));
                    resetForm({});
                }}>
                {(formikProps) => {
                    // console.log({ values, errors, touched });
                    return (
                        <div className="backgroundForm">
                            {/*  do somethink here */}
                            <Box className="form">
                                <Box className="headerForm">
                                    <h2> Login now !</h2>
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
                                    <Box>
                                        <Grid className="controlsAction" container>
                                            <Grid item xs={6}>
                                                <Button className="text-transform-none" component="a">
                                                    Forgot password
                                                </Button>
                                            </Grid>{' '}
                                            <Grid item xs={6}>
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
                                            Login
                                        </Button>
                                    </Box>
                                    <p className="toRegister">
                                        you dont't have account
                                        <Link to={'/register'}>
                                            <Button className="text-transform-none" color="info">
                                                Register
                                            </Button>
                                        </Link>
                                    </p>
                                </Form>
                                <Box>
                                    <p>----------or login with-----------</p>
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

export default Login;
