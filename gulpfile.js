var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('clean', function (cb) {
    return del(['tmp', 'dist'], cb);
});

gulp.task('build-css', function () {
    var pretty = gulp.src('./styles/*')
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.sass())
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./dist'));
    var ugly = gulp.src('./styles/*')
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.sass())
        .pipe(plugins.rename({
            extname: '.css'
        }))
        .pipe(gulp.dest('./dist'));
    return merge(pretty, ugly);
});

gulp.task('build-js', function () {
    var jsFileName = 'd3-scatterplot-matrix';
   var pretty = gulp.src('./src/*.js')
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.concat(jsFileName+'.js'))
        .pipe(gulp.dest('dist'));

    var ugly = gulp.src('./src/*.js')
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.uglify())
        .pipe(plugins.stripDebug())
        .pipe(plugins.concat(jsFileName+'.min.js'))
        .pipe(gulp.dest('dist'));

    return merge(pretty, ugly);
});

gulp.task('build-clean', ['clean'], function () {
    gulp.start('build');
});

gulp.task('build', ['build-css', 'build-js'], function () {

});

gulp.task('watch', function() {
    return gulp.watch(['./src/**/*.html', './styles/*.*css', 'src/**/*.js'], ['default']);
});

gulp.task('default', ['build-clean'],  function() {

});

gulp.task('default-watch', ['default'], ()=>{ browserSync.reload() });
gulp.task('serve', ['default'], ()=>{
    browserSync.init({
        server: {
            baseDir: "demo",
            index: "index.html",
            routes: {
                "/bower_components": "bower_components",
                "/dist": "dist"
            }
        },
        port: 8089,
        open: 'local',
        browser: "google chrome"
    });
    gulp.watch(['i18n/**/*.json', './src/**/*.html', './styles/*.*css', 'src/**/*.js', 'demo/*.*'], ['default-watch']);
});

// error function for plumber
var onError = function (err) {
    console.log(err);
    this.emit('end');
};