var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

// build config
gulp.task('build', function() {
  return gulp.src('./src/base-style/*.less')
    .pipe(less({compress: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/base-style'));
});

// test config
gulp.task('test', function() {
  return gulp.src('./src/base-style/*.less')
    .pipe(less({compress: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./test/base-style'));
});

// dev skin config
gulp.task('skin', function() {
  return gulp.src('./src/skins/**/*.less')
    .pipe(less({compress: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./test/skins'));
});

// dev watcher
gulp.task('dev', ['test'], function() {
  gulp.watch('./src/base-style/*.less', ['test']);
});

// dev skin watcher
gulp.task('devskin', ['skin'], function() {
  gulp.watch('./src/skins/**/*.less', ['skin']);
});
