// api/selectors.js
import _ from 'lodash';

const createLoadingSelector = actions => state =>
// returns true only when all actions is not loading
	_(actions).some(action => {
		const resutl = _.get(state, `loading.${action}`);
		return resutl;
	});
export default createLoadingSelector;