const gulp = require('gulp'),
  path = require('path'),
  fs = require('fs'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  plugin = require('gulp-load-plugins')({lazy: true});

const dir = path.dirname(fs.realpathSync(__filename));
const buildDir = dir + '/public/css/';

const styles = [
  dir + '/public/styles/styles.scss',
  dir + '/public/app/Layout/style/*.scss',
];

gulp.task('frontend:sass', function (done) {
  gulp
    .src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(buildDir))
    .on('end', function () {
      log('sass compiled');
      done();
    });
});

gulp.task('frontend:sass:watch', function () {
  gulp.watch(styles, ['frontend:sass']);
});

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log (msg) {
  if (typeof ( msg ) === 'object') {
    for (let item in msg) {
      if (msg.hasOwnProperty(item)) {
        plugin.util.log(plugin.util.colors.blue(msg[item]));
      }
    }
  } else {
    plugin.util.log(plugin.util.colors.blue(msg));
  }
}
