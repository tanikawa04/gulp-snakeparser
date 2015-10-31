# gulp-snakeparser

[![Build Status](https://travis-ci.org/tanikawa04/gulp-snakeparser.svg?branch=master)](https://travis-ci.org/tanikawa04/gulp-snakeparser)

Gulp plugin for compiling grammers of [snake-parser](https://github.com/carrotflakes/Snake-Parser).

## Installation

```bash
$ npm install --save-dev gulp-snakeparser
```

## Usage

```javascript
var gulp = require('gulp');
var snakeparser = require('gulp-snakeparser');

gulp.task('snakeparser', function() {
    return gulp.src('src/*.sg')     // *.sg is a grammer file of snake-parser
        .pipe(snakeparser())
        .pipe(gulp.dest('dist'));
});
```