'use strict';
/*
* credit:
* https://gulpjs.com/docs/en/api/watch/
* https://github.com/dlmanning/gulp-sass#readme
* */

var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));

const buildScss = async function () {
  await gulp.src('scss/*.scss')
    .pipe(sass.sync({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('css'));
}

gulp.task('watch', function () {
  gulp.watch(['scss/*.scss'], buildScss);
});

gulp.task('styles', buildScss);
