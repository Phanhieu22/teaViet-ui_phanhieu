import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useDispatch } from 'react-redux';
import './App.css';
import i18n from './i18n';
import { setUpUser } from './redux/action';
import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUpUser.setUpUserRequest());
    }, []);
    return (
        <I18nextProvider i18n={i18n}>
            <ToastContainer autoClose={2000} />
            <Router></Router>
        </I18nextProvider>
    );
}

export default App;
