
const  { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transfomacaoJS(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["bebel/preset-env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))

        .pipe(concat('codigo.min,js'))
        .pipe(gulp.dest('bulild'))
}

function fim(cb){
    console.log('fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)
