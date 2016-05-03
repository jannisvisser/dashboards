'use strict';

var secrets = require('../secrets');

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/dashboards',
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'combined',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			stream: 'access.log'
		}
	},
	usehttp: true, // should a non encrypted server be launched?
	usessl: true, // should an encrypted server be launced?
	port: process.env.PORT || 3000,
	sslport: process.env.SSLPORT || 444,
	key_file: './config/cert/localhost-key.pem',
	cert_file: './config/cert/localhost-cert.pem',
	ca_file: './config/cert/thawte.ca',
	ca2_file: './config/cert/thawte2.ca',
	app: {
		title: 'Rode Kruis Dashboards'
	},
	assets: {
		lib: {
			css: [
				'public/build/bower/forms-angular/css/forms-angular-with-bs3.css', // in bower.json
				'public/build/bower/bootstrap/css/bootstrap.min.css', // in bower.json
				'public/build/custom/bootstrap/css/bootstrap-theme.min.css', // in bower.json
				'public/build/custom/leaflet/css/leaflet.css', // in bower.json
				'public/build/bower/cartodb.js/css/cartodb.css', // in bower.json
				'public/build/bower/angular/css/angular-csp.css', // in bower.json
				'public/build/bower/mdi/css/materialdesignicons.min.css', // in bower.json
				'public/build/bower/dcjs/css/dc.css', // in bower.json
				'public/build/custom/dc-leaflet/css/dc-leaflet-legend.min.css', // NOT in bower.json
				'public/build/bower/angular-loading-bar/css/loading-bar.min.css', // in bower.json
				'public/build/bower/leaflet-search/js/leaflet-search.min.css' // in bower.json				
			],
			js: [
				'public/build/bower/jquery/js/jquery.min.js', // in bower.json
				'public/build/bower/crossfilter/js/crossfilter.min.js',
				'public/build/bower/lodash/js/lodash.underscore.min.js', //in bower.json
				'public/build/bower/angular/js/angular.min.js', //in bower.json
				'public/build/bower/angular-lodash/js/angular-lodash.js', //in bower.json
				'public/build/bower/angular-route/js/angular-route.min.js', //in bower.json
				'public/build/bower/angular-resource/js/angular-resource.min.js', //in bower.json
				'public/build/bower/angular-cookies/js/angular-cookies.min.js', //in bower.json 
				'public/build/bower/angular-touch/js/angular-touch.min.js', 
				'public/build/bower/angular-sanitize/js/angular-sanitize.min.js', 
				'public/build/bower/angular-ui-router/js/angular-ui-router.min.js',
				'public/build/bower/bootstrap/js/bootstrap.min.js',
				'public/build/bower/angular-bootstrap/js/ui-bootstrap-tpls.js',
				'public/build/bower/leaflet/js/leaflet.js',//in bower.json
				'public/build/bower/angular-leaflet-directive/js/angular-leaflet-directive.min.js', // in bower.json
				'public/build/bower/leaflet-search/js/leaflet-search.min.js',
				'public/build/bower/leaflet-ajax/js/leaflet.ajax.js',
				'public/build/bower/angular-gettext/js/angular-gettext.js',
				'public/dist/translations.js',
				'public/build/bower/Snap.svg/js/snap.svg-min.js',
				'public/build/bower/d3/js/d3.min.js',
				'public/build/bower/dcjs/js/dc.min.js', //in bower.json
				'public/build/custom/dc-leaflet/js/dc-leaflet-dev.js', // NOT in bower.json
				'public/build/custom/leaflet-stamen/tile.stamen.js', // NOT in bower.json
				'public/build/custom/angular-dc/js/angular-dc.js', //in bower.json
				'public/build/custom/forms-angular/js/forms-angular.js', //in bower.json
				'public/build/bower/angular-messages/js/angular-messages.min.js', //in bower.json
				'public/build/bower/ngInfiniteScroll/js/ng-infinite-scroll.min.js',//in bower.json
				'public/build/bower/angular-elastic/js/elastic.js', //in bower.json
				'public/build/bower/underscore/js/underscore-min.js',//in bower.json
				'public/build/bower/angular-loading-bar/js/loading-bar.min.js',
				'public/build/bower/leaflet-gps/js/leaflet-gps.min.js', // in bower.json
				'https://maps.googleapis.com/maps/api/js?v=3&sensor=true',
				'public/build/bower/cartodb.js/js/cartodb_noleaflet.js' // in bower,json
				
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	},
	azure: {
		clientID: secrets.azure.clientID,
		clientSecret: secrets.azure.clientSecret,
		tenantId: secrets.azure.tenantId,
		resource: 'https://graph.windows.net',
		redirectURL: 'http://digidocdev.rodekruis.nl/auth/azure/callback',
		redirectURLSSL: 'https://digidocdev.rodekruis.nl/auth/azure/callback'
	},
	onedrive: {
		oneDriveBusinessBaseUrl : 'https://rodekruis-my.sharepoint.com/_api/v2.0'
	},
	sharepoint : {
		sharePointSiteBaseUrl : 'https://rodekruis.sharepoint.com/clusterhulpverlening/hulpvoorvluchtelingen/_api/v2.0'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};