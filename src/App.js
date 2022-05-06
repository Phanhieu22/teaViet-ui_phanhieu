import react, { useEffect } from 'react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Router from './router/Router';
import { SnackbarProvider } from 'notistack';
import './App.css';
import { Slide } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUpUser } from './redux/action';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUpUser.setUpUserRequest());
        console.log('dispatch thanh cong');
    }, []);
    return (
        <I18nextProvider i18n={i18n}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                TransitionComponent={Slide}>
                <Router></Router>
            </SnackbarProvider>
        </I18nextProvider>
    );
}

export default App;
