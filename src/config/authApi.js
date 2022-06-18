const dev = {
    apiGateway: {
        server1: 'http://localhost:5000/api',
    },
};

const product = {
    apiGateway: {
        server1: 'https://mern-app-hieu.herokuapp.com/api',
    },
};

const config = process.env.REACT_APP_STAGE === 'production' ? product : dev;

export default {
    ...config,
    apiEvent: {
        registerUser: '/auth/',
    },
};
