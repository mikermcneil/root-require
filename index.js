/**
 * Module dependencies
 */
var path = require('path');
var packpath = require('packpath');



/**
 * Uses `packpath` (https://github.com/jprichardson/node-packpath)
 * to generate a more convenient require method.
 *
 * Not efficient (uses fs.*Sync() methods), but great for tests!
 * 
 * @type {Function}
 */
module.exports = function requireFromModuleRoot ( __dirname ) {
	return function (relativePathFromModuleRoot) {
		return require(path.join(packpath.self(),relativePathFromModuleRoot));
	};
};
