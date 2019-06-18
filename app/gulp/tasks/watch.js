const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create();

eye = () => {
   browserSync.init({
      notify: false,
      server: {
         baseDir: 'app'
      }
   });
   watch('./app/assets/**/*.css', gulp.series(css, cssInject));
   watch('./app/index.html', html);
};


cssInject = () => {
   return gulp.src('./app/temp/styles/styles.css')
              .pipe(browserSync.stream());
};

html = () => {
   browserSync.reload();
};

gulp.task('default', eye);