'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var snakeparser = require('snakeparser');

const PLUGIN_NAME = 'gulp-snakeparser';

module.exports = function(opts) {
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return;
		}

		var filePath = file.path;
		try {
			var options = (!opts || !opts.exportVariable) ? {exportVariable: 'module.exports'} : opts;
			file.contents = new Buffer(snakeparser.buildParser(file.contents.toString(), options));
			file.path = gutil.replaceExtension(file.path, '.js');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, err, {fileName: filePath}));
		}
		cb();
	});
};