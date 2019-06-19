const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

const cssInject = () => {
   return gulp.src('./app/temp/styles/styles.css')
              .pipe(browserSync.stream());
};

const html = () => {
   browserSync.reload();
};

eye = () => {
   browserSync.init({
      notify: false,
      server: {
         baseDir: 'app'
      }
   });
   // watch('./app/assets/**/*.css', gulp.series(css, cssInject));
   watch('./app/index.html', html);
};

gulp.task('default', eye);