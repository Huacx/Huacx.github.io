var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('default',['look'],function(){
	return connect.server({
		root:'./',
		port:'8800'
	});
})
gulp.task('less',function(){
	gulp.src('less/index.less')
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./css'))
})
gulp.task('look',function(){
	gulp.watch('less/index.less',['less']);
})
