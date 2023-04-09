/*
 * This file contains the options for all the user modules
 *
 * Author: Aayush Gour
 */

const { signupInputValidator } = require('./user.validators');

const signupOptions = {
    auth: false,
    tags: ['api', 'user'],
    description: 'Signup API',
    validate: { payload: signupInputValidator },
};

module.exports = {
    signupOptions,
};
