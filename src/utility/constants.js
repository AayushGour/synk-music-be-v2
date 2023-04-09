/*
 * This file contains all the constant values defined for the application
 *
 * Author: Aayush Gour
 */
const httpProtocols = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
};

const authName = 'custom-jwt';

const responseMessages = {
    INVALID_PAYLOAD: 'Invalid Payload.',
    INVALID_CREDENTIALS: 'Invalid Email or password.',
    USER_NOT_FOUND: 'User not found.',
    TOKEN_EXPIRED: 'Token expired.',
    USER_ALREADY_EXISTS: 'User already exists.',
    USER_CREATED: 'User created successfully.',
    INVALID_REFRESH_TOKEN: 'Invalid refresh token',
    INVALID_TOKEN_STRUCTURE: 'Invalid token structure',
    FILE_UPLOADED_TO_S3: 'File Uploaded to S3',
    FILE_UPLOADED_SUCCESSFULLY: 'File Uploaded Successfully',
    NO_FILES_AVAILABLE: 'No files available.',
    EMAIL_ID_MUST_BE_VALID: '"emailId" must be a valid email',
    EMAIL_ID_IS_REQUIRED: '"emailId" is required',
    PASSWORD_IS_REQUIRED: '"password" is required',
    REFRESH_TOKEN_IS_REQUIRED: '"refreshToken" is required',
};

module.exports = {
    httpProtocols,
    authName,
    responseMessages,
};
