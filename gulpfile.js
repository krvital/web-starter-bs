var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass');

gulp.task('html', function () {
  gulp.src('src/templates/pages/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build/'))
});

gulp.task('css', function () {
  gulp.src('src/styles/styles.scss')
    .pipe(sass({
      outputStyle: 'nested', // there are only two options in libsass supported: nested, compressed
      errLogToConsole: true
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['html', 'css']);
