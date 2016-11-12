'use strict';
import gulp from 'gulp';
import del from 'del';
// import babel from 'gulp-babel';
import concat from 'gulp-concat';
import mocha from 'gulp-mocha';
import through from 'through2';
// import named from 'vinyl-named';
import eslint from 'gulp-eslint';
// import uglify from 'gulp-uglify';
import { exec } from 'child_process';
import istanbul from 'gulp-istanbul';
// import webpack from 'webpack-stream';
import prettydiff from 'gulp-prettydiff';
import sourcemaps from 'gulp-sourcemaps';
import iife from 'gulp-iife';
// import webpackEs5Config from './webpack-es5.config.babel.js';
// import webpackEs6Config from './webpack-es6.config.babel.js';

const PATH = {
  allDistJs: 'dist/**/*',
  allSrcJs: 'src/**/*.js',
  allTests: 'test/**/*.js',
  gulpFile: 'gulpfile.babel.js',
  clientEntryPoint: 'src/constructor.js',
  webpackEs6File: 'webpack-es6.config.babel.js',
  webpackEs5File: 'webpack-es5.config.babel.js'
};

gulp.task('lint', () =>
  gulp.src([
    PATH.allSrcJs,
    PATH.gulpFile,
    PATH.allTests,
    PATH.webpackEs5File,
    PATH.webpackEs6File
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('test', ['lint'], () =>
  gulp.src(PATH.allSrcJs)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(PATH.allTests)
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
    })
);

gulp.task('docs', ['lint'], () => {
  exec('node ./node_modules/.bin/jsdoc -c jsdoc.json', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`${stdout}`);
    console.log(`${stderr}`);
  });
});

gulp.task('clean:dist', ['test'], () =>
del([PATH.allDistJs])
);

gulp.task('build-es5', ['clean:dist'], () =>
  gulp.src(PATH.allSrcJs)
  .pipe(concat('canvaslite-es6.min.js'))
  .pipe(sourcemaps.init({ 'loadMaps': true }))
  .pipe(through.obj(function (file, enc, cb) {
    var isSourceMap = /\.map$/.test(file.path);
    if (!isSourceMap) {
      this.push(file);
    }
    cb();
  }))
  .pipe(sourcemaps.write())
  .pipe(prettydiff({
    'lang': 'javascript',
    'mode': 'minify'
  }))
  .pipe(gulp.dest('dist'))
);

gulp.task('build', ['clean:dist'], () =>
  gulp.src(PATH.allSrcJs)
  .pipe(concat('canvaslite-es6.min.js'))
  .pipe(iife({
    useStrict: true,
    prependSemicolon: false,
    params: ['window', 'document', 'undefined'],
    args: ['window', 'document']
  }))
  .pipe(sourcemaps.init({ 'loadMaps': true }))
  .pipe(through.obj(function (file, enc, cb) {
    var isSourceMap = /\.map$/.test(file.path);
    if (!isSourceMap) {
      this.push(file);
    }
    cb();
  }))
  .pipe(sourcemaps.write())
  /*
  .pipe(prettydiff({
    'lang': 'javascript',
    'mode': 'minify'
  }))
  */
  .pipe(gulp.dest('dist'))
);

gulp.task('watch', () =>
  gulp.watch(PATH.allSrcJs, ['build'])
);

gulp.task('watch-tests', () =>
  gulp.watch(PATH.allTests, ['test'])
);

gulp.task('default', ['watch-tests', 'watch', 'build']);
