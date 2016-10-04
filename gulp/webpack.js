/**
 * Created by yaotaiyang on 2016/8/1.
 */

var gulp = require('gulp'),
    webpack = require('webpack'),
    $ = require('gulp-load-plugins')(),
    config = require('./config');

gulp.task('webpack', function () {
    console.log(gulp.env);
    if(gulp.env.dev){
        return gulp.src(config.PATH.appEnter)
            .pipe($.webpack(require('./webpack.config.dev.js'), webpack))
            .pipe(gulp.dest(config.PATH.appOut));
    }

});

