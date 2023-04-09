/*
 * Controller for User Module for the Application
 *
 * Author: Aayush Gour
 */

const { httpProtocols } = require('../../utility/constants');
const { sendResponse } = require('../../utility/response-toolkit');
const { versioned, v1 } = require('../router/routes.versions');
const { userEndpoints } = require('./user.endpoints');
const { signupOptions } = require('./user.options');
const { signupService } = require('./user.service');

const signupHandler = async (req, res) => {
    const payload = req?.payload;
    const serviceResponse = await signupService(payload);
    return sendResponse(serviceResponse, res);
};

module.exports = [
    {
        method: httpProtocols.POST, path: versioned(userEndpoints.SIGNUP, v1), options: signupOptions, handler: signupHandler,
    },
];
