// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (typeof obj === 'string') {
		return '"' + obj + '"';
	}

	 else if (Array.isArray(obj)) {
		var result = _.map(obj, function(element) {
			return stringifyJSON(element);
		});
		return '[' + result.join(',') + ']';

	} else if (obj && typeof obj === 'object') {
		var result = _.map(obj, function(value, property) {
			if (!(typeof value === 'function' || typeof value === 'undefined')) {
				return stringifyJSON(property) + ":" + stringifyJSON(value);
			}
		});
		if (result.length === 0) {
			return '{}';
		}
		result = _.filter(result, function(element) {
			return element !== undefined ? true : false;
		})
		return '{' + result.join(',') + '}';

	} else {
		return '' + obj;
	}
};