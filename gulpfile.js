var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    es6ify = require('es6ify'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    clean = require('gulp-clean');

gulp.task('default', ['clean', 'scripts', 'watch']);

gulp.task('watch', function() {
  gulp.watch('src', ['scripts']);
});

gulp.task('clean', function() {
  gulp.src('build', {read: false})
      .pipe(clean());
});

gulp.task('scripts', function() {
  browserify('./src/index.jsx')
    .transform({es6: true}, reactify)
    // .add(es6ify.runtime)
    // .transform(es6ify)
    // .require('./src/index.jsx', {entry: true})
    .bundle({debug: true})
    .pipe(source('index.js'))
    .pipe(gulp.dest('build'));
});

 // .require(require.resolve('./src/main.js'), { entry: true })
