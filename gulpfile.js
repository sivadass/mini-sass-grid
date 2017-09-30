var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('css', function(){
  return gulp.src('./src/style.scss')
    .pipe(sass({
        'outputStyle' : 'compressed'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', ['css'], function (){
  gulp.watch('./src/**/*.scss', ['css']);
});