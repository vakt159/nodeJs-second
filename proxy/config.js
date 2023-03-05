var convict = require('convict');

var config = convict({
  env: {
    doc: 'The application environment.',
    default: 'config',
    env: 'NODE_ENV'
  },
  PROXY_PORT: {
    doc: 'The port to proxy',
    format: 'port',
    env: 'PROXY_PORT'
  } 
});

var env = config.get('env');
config.loadFile(`${env}.json`);

module.exports = config;