/* module.exports = {
	api: {
		example  : {
			demo: '/service-example/v1/demo/'
		}
	}
}
*/

module.exports = {
  api() {
    return require('./api');
  },
};
