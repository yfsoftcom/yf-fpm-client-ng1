var gulp = require('gulp'),
    uglify= require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

// 建立js任务，进行代码检查
gulp.task('jshint', function(){
    gulp.src(['./ae.js'])  // 检查文件：js目录下所有的js文件
        .pipe(jshint())       // 进行检查
        .pipe(jshint.reporter('default'))  // 对代码进行报错提示
});

gulp.task('minijs',function(){
    return gulp.src('./ae.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});
gulp.task('default', ['jshint','minijs']);
