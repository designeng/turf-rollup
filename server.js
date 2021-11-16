const StaticServer = require('static-server');

const server = new StaticServer({
  rootPath: process.cwd() + '/public',
  port: 5000,
  followSymlink: true
});

server.start(() => {
  console.log(`Listening on ${server.port}`);
});
