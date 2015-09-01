/// <reference path="typings/gulp/gulp.d.ts" />
/// <reference path="typings/gulp-typescript/gulp-typescript.d.ts" />

var gulp = require('gulp');
var ts  = require('gulp-typescript');

// config

var path = {
    src : {
        html: "src/html/**/*.html",
        ts: "src/ts/**/*.ts",
    },
    dest : {
        html: "dest/html/",
        js: "dest/js",
    }
};

var tsProject = ts.createProject('src/tsconfig.json', {out: "app.js"});

// main tasks

gulp.task('build', ['build:html', 'build:ts']);

// sub tasks

gulp.task('build:html', function(){
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.dest.html));
});

gulp.task('build:ts', function(){
    var tsResult = gulp.src(path.src.ts)
        .pipe(ts(tsProject));
    
    return tsResult.js.pipe(gulp.dest(path.dest.js));
});
