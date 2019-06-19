const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      vars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      autoprefixer = require('autoprefixer'),
      cssImport = require('postcss-import'),
      mixins = require('postcss-mixins');

const css  = () => {  
   return gulp.src('./app/assets/styles/styles.css')
              .pipe(postcss([cssImport, mixins, autoprefixer, nested, vars]))
              .pipe(gulp.dest('./app/temp/styles/')); 
};


