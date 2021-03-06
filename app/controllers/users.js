'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User'),
	_ = require('lodash');

/**
 * Signup
 */
exports.signup = function(req, res) {
	// Init Variables
	var user = new User(req.body);
	var message = null;

	// Add missing user fields
	user.provider = 'local';
	user.displayName = user.firstName + ' ' + user.lastName;

	user.save(function(err) {
		if (err) {
			switch (err.code) {
				case 11000:
				case 11001:
					message = 'Email or username already exists';
					break;
				default:
					message = 'Please fill all the required fields';
			}

			return res.send(400, {
				message: message
			});
		}
		if(!req.user)
		{
			//automatically log in with signup if not already logged
			req.logIn(user, function(err) {
				if (err) {
					res.send(400, err);
				} else {
					res.jsonp(user);
				}
			});
		}
	});
};

/**
 * Signin after passport authentication
 */
exports.signin = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			res.send(400, info);
		} else {
			req.logIn(user, function(err) {
				if (err) {
					res.send(400, err);
				} else {
					res.jsonp(user);
				}
			});
		}
	})(req, res, next);
};

/**
 * Signout
 */
exports.signout = function(req, res) {
	req.logout();
	res.redirect('/');
};

/**
 * Get user list
 */
exports.list = function(req, res){
	User.find().sort('displayName').exec(function(err, users){
		if(err){
			res.render('error', {
				status: 500
			});
		}
		else{
			res.jsonp(users);
		}
	});
};

/**
 * Update user
 */
exports.update = function(req, res){
	//console.log(req.profile);
	var user = new User(req.body);

	user = _.extend(user, req.profile);

	user.save(function(err) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(user);
		}
	});
};


/**
 * Remove user
 */
exports.remove = function(req, res){
	var user = req.profile;

	user.remove(function(err) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(user);
		}
	});
};


/**
 * Send User
 */
exports.me = function(req, res) {
	res.jsonp(req.user || null);
};

/**
 * Auth callback
 */
exports.authCallback = function(req, res) {
	res.redirect('/');
};

/**
 * User middleware
 */
exports.userByID = function(req, res, next, id) {
	User.findOne({
		_id: id
	}).exec(function(err, user) {
		if (err) return next(err);
		if (!user) return next(new Error('Failed to load User ' + id));
		req.profile = user;
		next();
	});
};

/**
 * Require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.send(401, 'User is not logged in');
	}
	next();
};

/**
 * User authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.profile.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};