const _ = require('lodash');

const API = {};
const serviceConfig = require('./service');

const _window = typeof window !== 'undefined' ? window : {location: {host: ''}};
const API_PREFIX = _window.API_PREFIX || '';
_.forEach(serviceConfig, (data, prop) => {
  const apiName = [API_PREFIX, '/', data.apiName].join('');
  const apiConfig = data.config;
  console.log('apiName', apiName);

  const result = {};
  _.forEach(apiConfig, (config, version) => {
    version = version ? `/${version}` : version;
    _.extend(
      result,
      _.mapValues(config, path => [apiName, version, path].join('')),
    );
  });
  API[prop] = result;
});

module.exports = API;
