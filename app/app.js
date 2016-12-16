import './branding/branding.js';
import { start } from './scripts/start';
import { remote } from 'electron';
var app = remote.app;

Bugsnag.metaData = {
	// platformId: app.process.platform,
	// platformArch: app.process.arch,
	// electronVersion: app.process.versions.electron,
	version: app.getVersion()
		// platformVersion: cordova.platformVersion
		// build: appInfo.build
};

Bugsnag.appVersion = app.getVersion();

window.$ = window.jQuery = require('./vendor/jquery-1.12.0');
start();

localStorage.setItem('rocket.chat.currentHost', 'https://chat.iu.com.pk');
localStorage.setItem('rocket.chat.hosts', '{"https://chat.iu.com.pk":{"title":"IU.Chat - https://chat.iu.com.pk","url":"https://chat.iu.com.pk","lastPath":"https://chat.iu.com.pk/home"}}');
localStorage.setItem('sidebar-closed', 'true');
