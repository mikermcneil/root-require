root-require
============
> a more convenient require method for certain situations.


## How it do
This lets you `require()` using a relative path from the root directory of the present module.
It is not particularly efficient, since it uses `fs.*Sync` methods. So don't call it a whole bunch of times!


## Usage

Just once:
```javascript
var Sails = require('root-require')('lib/app');
```

More than once:
```javascript
var rootRequire = require('root-require');

var Sails = rootRequire('lib/app');
var Router = rootRequire('lib/router');
var MiddlewareLibrary = rootRequire('lib/middleware');
```


## Credit where credit is due
This is mainly a thin wrapper around `packpath` (https://github.com/jprichardson/node-packpath)-- this module just exists so we can do it in one line.


## License

MIT, c. 2014 Mike McNeil
