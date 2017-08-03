var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
	gulp.src('app/scss/style.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('app/css/'));
		
});

gulp.task('browserSync', function() {
    browserSync.init("css/.css",{
        server: {
            baseDir: "./app/"
        }
    });
});



gulp.task ('watch', ['styles','browserSync'],function(){
	gulp.watch('app/scss/*.scss', ['styles']);
	//gulp.watch('app/js/**/*.js', ['scripts']);
  	gulp.watch('app/index.html', browserSync.reload);
  	gulp.watch('app/css/*.css', browserSync.reload);
});
gulp.task('default', ['styles', 'browserSync', 'watch']);