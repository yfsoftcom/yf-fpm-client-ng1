var gulp = require('gulp'),
  uglify= require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  jshint = require('gulp-jshint');

// 建立js任务，进行代码检查
gulp.task('jshint', function(){
  gulp.src(['./src/index.js'])  // 检查文件：js目录下所有的js文件
      .pipe(jshint())       // 进行检查
      .pipe(jshint.reporter('default'))  // 对代码进行报错提示
});

gulp.task('copy-vender',function(){
  gulp.src([
    './node_modules/js-md5/build/*'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('minijs',function(){
  
  return gulp.src('./src/index.js')
      .pipe(rename('fpmc-ng.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['jshint','minijs', 'copy-vender']);