const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify.js');
var clean = require('gulp-dest-clean');

gulp.task('clean', function () {
	return gulp.src('./')
	.pipe(clean('./dist/'))
	});


gulp.task('minify', () => {    
return gulp.src('./js/*.{js,json}')
  .pipe(minify()) // use minify() arglessly as a stream transformation\
  .pipe(gulp.dest('dist/js/')); // save minified files to the 'dist' directory
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

 
gulp.task('webserver', function(cb) {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
    cb();
});

exports.build = gulp.series('clean', buildStyles, 'minify', );


function watch() {
  gulp.watch('./sass/**/*.scss', gulp.series(buildStyles));
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch('./sass/**/*.scss').on('change', browserSync.reload);
};
exports.watch = watch;

exports.dev = gulp.parallel('browser-sync', watch);
