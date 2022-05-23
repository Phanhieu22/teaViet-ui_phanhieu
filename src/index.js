import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import GlobalStyle from './component/globalStyle';
ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
