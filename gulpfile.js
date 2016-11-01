var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	clean = require('gulp-clean'),
	dir_js = 'develop/**/*.js',
	watch = require('gulp-watch'),
	webserver = require('gulp-webserver');

function buildDest() {
	console.log('building files')
  return gulp.src(dir_js)
    .pipe(sourcemaps.init())
    .pipe(concat('canvaslite.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
}

gulp.task('build', buildDest);

gulp.task('clean::dist', function () {
    return gulp.src('dist/')
    	   .pipe(clean());
});

gulp.task('watch::js', function () {
    return watch(dir_js, buildDest);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['clean::dist', 'build', 'watch::js', 'webserver']);