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

var gulp = require('gulp');

var responsive = require('gulp-responsive');
// var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('img/*.{jpg,png}')
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
