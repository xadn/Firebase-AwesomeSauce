var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    clean = require('gulp-clean');

gulp.task('default', ['clean', 'scripts', 'watch']);

gulp.task('watch', function() {
  gulp.watch('src/*', ['scripts']);
});

gulp.task('clean', function() {
  gulp.src('build', {read: false})
      .pipe(clean());
});

gulp.task('scripts', function() {
  browserify('./src/index.jsx')
    .transform({es6: true}, reactify)
    .bundle({debug: true})
    .pipe(source('index.js'))
    .pipe(gulp.dest('build'))
    .on('error', console.log);
});
