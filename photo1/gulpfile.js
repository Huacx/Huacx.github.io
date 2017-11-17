var gulp = require('gulp');
var gulpUglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var less = require('gulp-less');
var watch = require("gulp-watch");
var rename = require('gulp-rename');
var clean = require("gulp-clean");


gulp.task("default",["watch","less"],function(){
    connect.server({
        root:"./",
        port:"8888"
    })
});
gulp.task("less",function(){
    gulp.src("./less/*.less")
        .pipe(less())
        .pipe(cleanCss())
        //.pipe(concat())
        //.pipe(rename("main.css"))
        .pipe(gulp.dest("./dist"))
})
gulp.task('watch',function(){
    gulp.watch("./less/*.less",["less"]);
})
/*gulp.task('clean',function(){
    gulp.src("./dist/*.css")
        .pipe(clean());
})*/