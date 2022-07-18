const gulp = require('gulp')
const { parallel, series } = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('node-sass'))
const rename = require('gulp-rename')
const cssnano = require('gulp-cssnano')

const path = {
  scss: { source: './src/index.scss', target: './dist' }
}

function css() {
  return gulp
    .src(path.scss.source)
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename({ basename: 'css-skeletons', extname: '.css' }))
    .pipe(gulp.dest(path.scss.target))
    .pipe(rename({ basename: 'css-skeletons', extname: '.min.css' }))
    .pipe(cssnano())
    .pipe(gulp.dest(path.scss.target))
}

function watch() {
  gulp.watch(path.scss.source, css)
}

exports.default = series(css, watch)
exports.build = parallel(css, watch)
