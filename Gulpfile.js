'use strict';

var gulp = require('gulp');
var responsive = require('gulp-responsive');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

//********************** Sass watch & minify **********************
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

//********************** HTML & JS minify **********************
gulp.task('jsuglify', function (cb) {
  pump([
        gulp.src('js/main.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('js/'),
    ],
    cb
  );
});

gulp.task('htmlminify', function () {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('.'));
});

gulp.task('minify', ['htmlminify', 'jsuglify']);

//********************** Image compress & responsive images **********************
gulp.task('images-bg', function () {
  return gulp.src('img/Background/*.{jpg,png}')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.jpg': [{
        width: 330,
        rename: { suffix: '-330px' },
      }, {
        width: 330 * 2,
        rename: { suffix: '-330px@2x' },
      }, {
        width: 480,
        rename: { suffix: '-480px' },
      }, {
        width: 480 * 2,
        rename: { suffix: '-480px@2x' },
      }, {
        width: 768,
        rename: { suffix: '-768px' },
      }, {
        width: 768 * 2,
        rename: { suffix: '-768px@2x' },
      }, {
        width: 992,
        rename: { suffix: '-992px' },
      }, {
        width: 992 * 2,
        rename: { suffix: '-992px@2x' },
      }, {
        width: 1200,
        rename: { suffix: '-1200px' },
      }, {
        width: 1200 * 2,
        rename: { suffix: '-1200px@2x' },
      }, {
        width: 1920,
        rename: { suffix: '-1920px' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
    }, {
      quality: 70,
      compressionLevel: 6,
      progressive: true,
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/responsiveImg/Background'));
});

gulp.task('images-edu', function () {
  return gulp.src('img/Courses/*.{jpeg,jpg,png}')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.*': [{
        width: 125,
        rename: { suffix: '-125px' },
      }, {
        width: 125 * 2,
        rename: { suffix: '-125px@2x' },
      }, {
        width: 180,
        rename: { suffix: '-180px' },
      }, {
        width: 180 * 2,
        rename: { suffix: '-180px@2x' },
      }, {
        width: 250,
        rename: { suffix: '-250px' },
      }, {
        width: 250 * 2,
        rename: { suffix: '-250px@2x' },
      }, {
        width: 480,
        rename: { suffix: '-480px' },
      }, {
        width: 760,
        rename: { suffix: '-760px' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
    }, {
      quality: 70,
      compressionLevel: 6,
      progressive: true,
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/responsiveImg/Courses'));
});

gulp.task('images-books', function () {
  return gulp.src('img/Books/*.{jpg,png}')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.jpg': [{
        width: 150,
        rename: { suffix: '-150px' },
      }, {
        width: 150 * 2,
        rename: { suffix: '-150px@2x' },
      }, {
        width: 250,
        rename: { suffix: '-250px' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
    }, {
      quality: 70,
      compressionLevel: 6,
      progressive: true,
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/responsiveImg/Books'));
});

gulp.task('images-projects', function () {
  return gulp.src('img/Projects/*.{jpeg,jpg,png}')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.*': [{
        width: 190,
        rename: { suffix: '-190px' },
      }, {
        width: 190 * 2,
        rename: { suffix: '-190px@2x' },
      }, {
        width: 250,
        rename: { suffix: '-250px' },
      }, {
        width: 250 * 2,
        rename: { suffix: '-250px@2x' },
      }, {
        width: 300,
        rename: { suffix: '-300px' },
      }, {
        width: 300 * 2,
        rename: { suffix: '-300px@2x' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
    }, {
      quality: 70,
      compressionLevel: 6,
      progressive: true,
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/responsiveImg/Projects'));
});

gulp.task('images-profile', function () {
  return gulp.src('img/Profile/*.{jpeg,jpg,png}')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.*': [{
        width: 100,
        rename: { suffix: '-100px' },
      }, {
        width: 100 * 2,
        rename: { suffix: '-100px@2x' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
    }, {
      quality: 70,
      compressionLevel: 6,
      progressive: true,
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/responsiveImg/Profile'));
});

gulp.task('images', ['images-bg', 'images-edu', 'images-books', 'images-projects', 'images-profile']);


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
