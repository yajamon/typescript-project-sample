/// <reference path="typings/gulp/gulp.d.ts" />

var gulp = require('gulp');
var tsc  = require('gulp-typescript');

// config

var path = {
    src : {
        html: "src/html/**/*.html",
    },
    dest : {
        html: "dest/html/"
    }
};

// main tasks

gulp.task('build', ['build:html']);

// sub tasks

gulp.task('build:html', function(){
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.dest.html));
});

