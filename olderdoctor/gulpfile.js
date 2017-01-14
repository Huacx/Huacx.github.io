var gulp = require('gulp');
var auto = require('gulp-autoprefixer');
var minicss = require('gulp-clean-css');
var minijs = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default',['css','js']);
gulp.task('css',function(){
	gulp.src(['css/reset.css','dest/index.css'])
	.pipe(concat('app.min.css'))
	.pipe(auto())
	.pipe(minicss())
	.pipe(gulp.dest('./'))
});
gulp.task('js',function(){
	gulp.src(['js/jquery.min.js','js/flexible.debug.js','js/index.js'])
	.pipe(concat('app.mini.js'))
	.pipe(minijs())
	.pipe(gulp.dest('./'))
});