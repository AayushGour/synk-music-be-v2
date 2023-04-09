/*
 * This file contains all the input validations for the Authentication Module
 *
 * Author: Aayush Gour
 */
const Joi = require('joi');

const loginInputValidator = Joi.object({
    emailId: Joi.string().email().required().messages({
        'string.empty': 'Email ID cannot be empty',
        'string.email': 'Email ID should be valid',
        'string.required': 'Email ID is required',
    }),
    password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/)
        .required()
        .messages({
            'string.empty': 'Password cannot be empty',
            'string.min': 'Password should have minimum {#limit} characters',
            'string.max': 'Password should have maximum {#limit} characters',
            'string.required': 'Password is required',
        }),
});

const refreshTokenValidator = Joi.object({
    refreshToken: Joi.string().min(3)
        .required(),
});

module.exports = {
    loginInputValidator,
    refreshTokenValidator,
};
