//引入gulp
var gulp = require('gulp');
//引入组件
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');

gulp.task('sass',function(){
    gulp.src('./packages/style/src/index.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./build'));
});
gulp.task('default',['sass']);