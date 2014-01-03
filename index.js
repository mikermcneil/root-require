/**
 * Module dependencies
 */
var path = require('path');
var packpath = require('packpath');



/**
 * Use `packpath` (https://github.com/jprichardson/node-packpath)
 * to generate a more convenient require method.
 *
 * Not efficient (uses fs.*Sync() methods), but great for tests!
 * 
 * @type {[type]}
 */
module.exports = function requireFromModuleRoot ( relativePathFromModuleRoot ) {
	return require(path.join(packpath.self(),relativePathFromModuleRoot));
};
