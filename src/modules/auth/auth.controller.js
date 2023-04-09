/*
 * Controller for Authentication Module for the application
 *
 * Author: Aayush Gour
 *
*/

const { httpProtocols } = require('../../utility/constants');
const { sendResponse } = require('../../utility/response-toolkit');
const { versioned, v1 } = require('../router/routes.versions');
const { authEndpoints } = require('./auth.endpoints');
const { loginOptions, refreshTokenOptions } = require('./auth.options');
const { loginService, refreshTokenService } = require('./auth.service');

exports.loginHandler = async (req, res) => {
    const payload = req?.payload;
    const serviceResponse = await loginService(payload);
    return sendResponse(serviceResponse, res);
};

exports.refreshTokenHandler = async (req, res) => {
    const query = req?.query;
    const serviceResponse = await refreshTokenService(query);
    return sendResponse(serviceResponse, res);
};

module.exports = [
    {
        method: httpProtocols.POST, path: versioned(authEndpoints.LOGIN, v1), options: loginOptions, handler: this.loginHandler,
    },
    {
        method: httpProtocols.GET, path: authEndpoints.REFRESH_TOKEN, options: refreshTokenOptions, handler: this.refreshTokenHandler,
    },
];
