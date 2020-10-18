var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css');

var path = {
  scss: { source: './css/css-skeletons.scss', target: './css' }
}

var listen = './css/**/**.scss'

gulp.task('scss', function() {
  gulp
    .src(path.scss.source)
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest(path.scss.target))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(path.scss.target))
})

gulp.task('watch', function() {
  gulp.watch(listen, ['scss'])
})

gulp.task('default', ['scss', 'watch'])
