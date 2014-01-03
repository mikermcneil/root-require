/**
 * Module dependencies
 */
var path = require('path');
var packpath = require('packpath');



/**
 * Uses `packpath` (https://github.com/jprichardson/node-packpath)
 * to generate a more convenient require method.
 * 
 * @type {Function}
 */
module.exports = function requireFromModuleRoot ( relativePathFromModuleRoot ) {
	return require(path.join(packpath.parent(),relativePathFromModuleRoot));
};
