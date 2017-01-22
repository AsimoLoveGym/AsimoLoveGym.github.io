'use strict';

var gulp = require('gulp');
var responsive = require('gulp-responsive');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./scss/**/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    // .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/**/*.scss', ['sass']);
});

// var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('img/*.{jpcg,png}')
    .pipe(responsive({
      '*.jpg': { width: 1200 },
      '*.png': { width: '50%' },
      '*': {
        width: 100,
        rename: { suffix: '-thumbnail' },
      },
    }, {
      quality: 70,
      progressive: true,
      compressionLevel: 6,
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/responsiveImg'));
});

// var gulp = require('gulp');
//
// gulp.task('test', function () {
//   console.log('Hello World!');
// });

// var gulp = require('gulp');
// var imagemin = require('gulp-imagemin');
//
// gulp.task('image', function () {
//   gulp.src('img/**/*')
//       .pipe(imagemin())
//       .pipe(gulp.dest('dist/images'));
// });

// var gulp = require('gulp');
// var image = require('gulp-image');
//
// gulp.task('image', function () {
//   gulp.src('img/**/*')
//     .pipe(image())
//     .pipe(gulp.dest('dist/images'));
// });

// gulp.task('default', ['image']);
