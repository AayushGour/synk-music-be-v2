/*
 * This file combines all the routes defined in the application
 *
 * Author: Aayush Gour
 */
const auth = require('../auth/auth.controller');
const user = require('../user/user.controller');

module.exports = [].concat(auth, user);
