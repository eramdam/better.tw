const fs = require('fs')
const handlebars = require('handlebars')
const gulp = require('gulp')
const hb = require('gulp-hb')
const postcss = require('gulp-postcss')

// Dirty hack to use partials with the .html extension 
// See https://github.com/shannonmoeller/gulp-hb/issues/41#issuecomment-218832896
require.extensions['.html'] = (module, filename) => {
  module.exports = handlebars.compile(fs.readFileSync(filename, 'utf8'))
}

gulp.task('html', () => (
  gulp.src('./src/*.html')
  .pipe(hb({
    partials: './src/_includes/**/*.{hbs,html}'
  }))
  .pipe(gulp.dest('./dist'))
))

gulp.task('css', () => (
  gulp.src('./src/css/index.css')
  .pipe(gulp.dest('./dist/css'))
))

gulp.task('default', ['html', 'css'])