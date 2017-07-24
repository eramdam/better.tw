const gulp = require('gulp')
const postcss = require('gulp-postcss')

gulp.task('css', () => (
  gulp.src('web/css/index.css')
  .pipe(gulp.dest('./dist/css'))
))