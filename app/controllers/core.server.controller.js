'use strict';

/**
 * Module dependencies.
 */

var deeplink = require('node-deeplink');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.deeplink = deeplink({
    fallback: 'http://google.com',
    ios_store_link: 'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4',
});
