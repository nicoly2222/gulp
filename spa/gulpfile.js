const { series, perallel } = require('gulp')
const gulp =require('gulp') 

const { appHTML, appCSS, appJS, appIMG}= require('./gulpTasks/app.js')
const { depeCSS, despsFonts}= require('./gulpTasks/deps.js')
const { monitorarArquivos, servidor}= require('./gulpTasks/gulpTasks.js')

module.exports.default= series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depeCSS,despsFonts)
    ),
    servidor,
    monitorarArquivos


)
