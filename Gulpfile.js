const fs = require('fs')
const handlebars = require('handlebars')
const gulp = require('gulp')
const hb = require('gulp-hb')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync').create()

// Dirty hack to use partials with the .html extension 
// See https://github.com/shannonmoeller/gulp-hb/issues/41#issuecomment-218832896
require.extensions['.html'] = (module, filename) => {
  module.exports = handlebars.compile(fs.readFileSync(filename, 'utf8'))
}

const destFolder = (path) => `./dist${path || ''}`

const files = {
  html: {
    from: './src/*.html',
    to: destFolder()
  },
  css: {
    from: './src/css/index.css',
    to: destFolder('/css')
  },
  static: {
    from: [
      './src/img/**/*',
      './src/js/**/*',
    ],
    to: destFolder()
  }
}

gulp.task('html', () => (
  gulp.src(files.html.from)
  .pipe(hb({
    partials: './src/_includes/**/*.{hbs,html}'
  }))
  .pipe(gulp.dest(files.html.to))
))

gulp.task('css', () => (
  gulp.src(files.css.from)
  .pipe(gulp.dest(files.css.to))
  .pipe(browserSync.stream())
))

gulp.task('static', () => (
  gulp.src(files.static.from, { base: 'src' }).pipe(gulp.dest(files.static.to))
))

const beforeServe = ['html', 'css', 'static']

gulp.task('default', beforeServe, () => {
  browserSync.init({
    server: destFolder()
  })
  
  gulp.watch('./src/css/**/*.css', ['css'])
  gulp.watch('./src/js/**/*.js', ['static'])
  gulp.watch('./src/img/**/*', ['static'])
  gulp.watch('./src/**/*.{html,hbs}', ['html'])
  gulp.watch('./dist/**/*.{html,js}').on('change', browserSync.reload)
})

gulp.task('build', beforeServe)