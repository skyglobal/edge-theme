var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;



gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('watch', ['sass'], function() {
	   //  browserSync({
    //     proxy: "yourlocal.dev",
    // });

	    gulp.watch("./src/style/*.scss", ['sass']);

});
 
gulp.task('sass', function () {
    return gulp.src('./src/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
        // .pipe(reload({stream: true}));
});