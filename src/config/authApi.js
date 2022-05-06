const dev = {
    apiGateway: {
        server1: 'http://localhost:5000/api',
    },
};

const product = {
    apiGateway: {
        tracker: 'http://61.28.228.205:15084',
        adroute: 'http://61.28.228.205:15083',
        uaa: 'http://61.28.228.205:15082/uaa',
        auth: 'http://61.28.228.205:15082/uaa/oauth/token',
    },
};

const config = process.env.REACT_APP_STAGE === 'production' ? product : dev;

export default {
    ...config,
    apiEvent: {
        registerUser: '/auth/',
    },
};
