import { watch, src, dest, series } from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import purgecss from 'gulp-purgecss';

const sass = gulpSass(dartSass);

const buildSassStyles = () => {
  return src('./src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(purgecss({ content: ['*.html', './src/**/*.jsx'] }))
    .pipe(dest('./src/css'));
};

const watchTask = () => {
  watch(['./src/styles/**/*.scss'], buildSassStyles);
};

export default series(buildSassStyles, watchTask);