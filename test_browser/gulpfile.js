var gulp = require('gulp'),
    nodemon = require('nodemon'),
    shell = require('gulp-shell');

require('fluxex/extra/gulpfile');

gulp.task('test_server', ['buildall'], function () {
    nodemon({
        ignore: '*',
        script: 'server.js',
        ext: 'do_not_watch'
    }).on('start', function () {
        setTimeout(function () {
            gulp.start(['test_run_protractor']);
        }, 1000);
    });
});

gulp.task('test_run_protractor', shell.task('protractor testconf.js'));
