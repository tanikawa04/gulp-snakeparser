# gulp-snakeparser

[![Build Status](https://travis-ci.org/tanikawa04/gulp-snakeparser.svg?branch=master)](https://travis-ci.org/tanikawa04/gulp-snakeparser) [![npm version](https://badge.fury.io/js/gulp-snakeparser.svg)](https://badge.fury.io/js/gulp-snakeparser)

Gulp plugin for compiling grammers of [snake-parser](https://github.com/carrotflakes/Snake-Parser).

## Installation

```bash
$ npm install --save-dev gulp-snakeparser
```

## Usage

Something like this will generate a parse function and set it to `module.exports`:

the parse function that is generated
```javascript
var gulp = require('gulp');
var snakeparser = require('gulp-snakeparser');

gulp.task('snakeparser', function() {
    return gulp.src('src/*.sg')     // *.sg is a grammer file of snake-parser
        .pipe(snakeparser())
        .pipe(gulp.dest('dist'));
});
```

You can also specify a variable name for assigning the parse function, doing something like this:

```javascript
var gulp = require('gulp');
var snakeparser = require('gulp-snakeparser');

gulp.task('snakeparser', function() {
    return gulp.src('src/*.sg')
        .pipe(snakeparser({exportVariable: 'parse'}))
        .pipe(gulp.dest('dist'));
});
```
