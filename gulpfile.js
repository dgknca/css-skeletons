var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sass = require('gulp-sass')
// var prefix = require("gulp-autoprefixer");
var rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css');

var path = {
  scss: { source: './assets/scss/css-skeletons.scss', target: './assets/css/' }
}

var listen = './assets/scss/**/**.scss'

gulp.task('scss', function() {
  gulp
    .src(path.scss.source)
    .pipe(plumber())
    // .pipe(prefix())
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest(path.scss.target))
})

gulp.task('watch', function() {
  gulp.watch(listen, ['scss'])
})

gulp.task('default', ['scss', 'watch'])
