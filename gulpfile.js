const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function copyHtml() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}

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

function jsCompressor() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
};

function watchFiles() {
    gulp.watch('./src/*.html', copyHtml)
    gulp.watch('./src/images/*', imageCompressor);
    gulp.watch('./src/styles/**/*.scss', compileSass);
    gulp.watch('./src/scripts/*.js', jsCompressor);
};

function copyBootstrap() {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./dist/styles'));
}

function copyjQuery() {
    return gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./dist/scripts/lib'));
}

exports.default = gulp.series(
    gulp.parallel(copyHtml, imageCompressor, compileSass, jsCompressor), watchFiles
);

exports.setup = gulp.series(copyBootstrap, copyjQuery);