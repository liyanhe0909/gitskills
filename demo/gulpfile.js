var gulp = require('gulp');
var sass = require('gulp-sass');
// 定义任务
gulp.task('sass', function(){
  return gulp.src('css/*.scss',['sass'])
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist'))
});
// 实时监测
gulp.task('sassxinchun',function(){
    //complierInstant只是自己定义的名字
    return gulp.watch('css/*.scss',['sass']);
    //让谁做什么
});
gulp.task('default', ['sass']);