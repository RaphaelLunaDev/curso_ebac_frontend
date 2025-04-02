
//exportação do gulp
const gulp = require('gulp');
//importação do sass//
const sass = require('gulp-sass')(require('sass'));
//importação do sourcemaps//
const sourcemaps = require('gulp-sourcemaps');
//importação do uglify//
const uglify = require('gulp-uglify');
//importação do obfuscate//
const obfuscate = require('gulp-obfuscate');
//importação do imagemin//
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'  //tira as quebras de linhas para ocupar menos bits
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


//exportação do watch//
exports.default = function() {
    gulp.watch('./source/styles/*.scss',{ ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*',{ ignoreInitial: false}, gulp.series(comprimeImagens));
}