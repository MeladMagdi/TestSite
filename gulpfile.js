var gulp = require ('gulp'),
    //sass = require('gulp-sass'),
    uglify = require ('gulp-uglify'),
    plumber = require ('gulp-plumber');

// uglify For javaScript mini
gulp.task('scripts', function(){
  gulp.src('puplic/js/*.js').
  pipe(plumber()).
  pipe(uglify()).
  pipe(gulp.dest('minjs'));
});
//sass for compile the code
/*gulp.task('style', function(){
  gulp.src('vindor/*.scss').
  pipe(sass({style: 'compressed'})).
  pipe(gulp.dest('puplic/css'));
});*/

// gulp watch is fot watching file

gulp.task('watch', function(){
  gulp.watch('puplic/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts','watch']);
