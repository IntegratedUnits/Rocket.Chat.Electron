import { app } from 'electron';

let servers = {};

export default {
	loadServers(s) {
		servers = s;
	},

	getServers() {
		return servers;
	}
};


//rocket.chat.currentHost			https://chat.iu.com.pk
//rocket.chat.hosts
//{"https://chat.iu.com.pk":{"title":"IU.Chat - https://chat.iu.com.pk","url":"https://chat.iu.com.pk","lastPath":"https://chat.iu.com.pk/home"}}
//sidebar-closed



app.on('login', function(event, webContents, request, authInfo, callback) {
	for (let url in servers) {
		const server = servers[url];
		if (request.url.indexOf(url) === 0 && server.username) {
			callback(server.username, server.password);
			break;
		}
	}
});
