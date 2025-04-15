const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function imageCompressor() {
    return gulp.src('./src/images/*', { encoding:false,})
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
};

function compileSass() {
    return gulp.src('./src/styles/main.scss') 
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError)) 
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

function copyBootstrap() {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./dist/styles'));
}

function jsCompressor() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
};

exports.default = function() {
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.parallel(imageCompressor));
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(jsCompressor));
    gulp.series(copyBootstrap)();
};