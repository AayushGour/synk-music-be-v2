/*
 * This file contains the options required for the endpoint configuration for the Authentication Module
 *
 * Author: Aayush Gour
 */
const { loginInputValidator, refreshTokenValidator } = require('./auth.validators');

const loginOptions = {
    auth: false,
    tags: ['api', 'auth'],
    description: 'Login API',
    validate: {
        payload: loginInputValidator,
        failAction: (request, h, err) => {
            throw err;
        },
    },
};

const refreshTokenOptions = {
    auth: false,
    tags: ['api', 'auth'],
    description: 'Refresh Token API',
    validate: {
        query: refreshTokenValidator,
        failAction: (request, h, err) => {
            throw err;
        },
    },
};

module.exports = {
    loginOptions, refreshTokenOptions,
};
