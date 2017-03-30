var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso'); //cmd: #npm install --save-dev gulp-csso
var watch = require('gulp-watch');

gulp.task('css', function(){
	return gulp.src('source/bootstrap.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/'))
});

gulp.task('watch',function(){
	return gulp.watch('source/**/*.less',['css'])
});

gulp.task('default',['watch']);