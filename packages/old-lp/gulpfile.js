var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mq4HoverShim = require('mq4-hover-shim');
var rimraf = require('rimraf').sync;
var browser = require('browser-sync');
var panini = require('panini');
var concat = require('gulp-concat');
var port = process.env.SERVER_PORT || 8080;
var nodepath =  'node_modules/';
const purgecss = require('gulp-purgecss')
var inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
    return gulp.src('./_site/*.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./_site'), {overwrite: true});
});

// Starts a BrowerSync instance
gulp.task('server', ['build'], function(){
    browser.init({server: './_site', port: port});
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*', ['compile-scss', browser.reload]);
    gulp.watch('sass/**/*', ['compile-sass', browser.reload]);
    gulp.watch('js/**/*', ['compile-js', browser.reload]);
    gulp.watch('html/pages/**/*', ['compile-html']);
    gulp.watch('images/**/*', ['copy-images', browser.reload]);
    gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['compile-html:reset','compile-html']);
    gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
});

// Erases the dist folder
gulp.task('reset', function() {
    rimraf('bulma/*');
    rimraf('scss/*');
    rimraf('assets/css/*');
    rimraf('assets/fonts/*');
    rimraf('images/*');
});

// Erases the dist folder
gulp.task('clean', function() {
    rimraf('_site');
});

// Copy Bulma filed into Bulma development folder
gulp.task('setupBulma', function() {
    //Get Bulma from node modules
    gulp.src([nodepath + 'bulma/*.sass']).pipe(gulp.dest('scss/bulma/'));
    gulp.src([nodepath + 'bulma/**/*.sass']).pipe(gulp.dest('scss/bulma/'));
});

// Copy assets
gulp.task('copy', function() {
    //Copy other external css assets
    gulp.src(['assets/fonts/*']).pipe(gulp.dest('_site/assets/fonts/'));
});

//Theme Sass variables
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: [nodepath + 'bulma/sass']
};

// Compile Theme Scss
gulp.task('compile-scss', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
        autoprefixer({
            browsers: [
                "Chrome >= 45",
                "Firefox ESR",
                "Edge >= 12",
                "Explorer >= 10",
                "iOS >= 9",
                "Safari >= 9",
                "Android >= 4.4",
                "Opera >= 30"
            ]
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy

    return gulp.src('./scss/core.scss')
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(purgecss({
             content: ['html/**/*.html']
      }))
      .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile Html
gulp.task('compile-html', function() {
    gulp.src('html/pages/**/*.html')
        .pipe(panini({
        root: 'html/pages/',
        layouts: 'html/layouts/',
        partials: 'html/includes/',
        helpers: 'html/helpers/',
        data: 'html/data/'
    }))
        .pipe(gulp.dest('_site'))
        .on('finish', browser.reload);
});

gulp.task('compile-html:reset', function(done) {
    panini.refresh();
    done();
});

// Compile js from node modules
gulp.task('compile-js', function() {
    return gulp.src([
        nodepath + 'jquery/dist/jquery.min.js',
        nodepath + 'feather-icons/dist/feather.min.js',
        'js/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy images to production site
gulp.task('copy-images', function() {
    gulp.src('images/**/*')
        .pipe(gulp.dest('./_site/assets/images/'));
});

gulp.task('init', ['setupBulma']);
gulp.task('build', ['clean','copy','compile-js', 'compile-html', 'compile-scss', 'copy-images']);
gulp.task('default', ['server', 'watch']);
