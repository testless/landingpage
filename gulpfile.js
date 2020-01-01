var gulp = require('gulp');
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





// Erases the dist folder
const reset =function() {
    rimraf('bulma/*');
    rimraf('scss/*');
    rimraf('assets/css/*');
    rimraf('assets/fonts/*');
    rimraf('images/*');
};

// Erases the dist folder
const clean =function() {
    rimraf('_site');
};

// Copy Bulma filed into Bulma development folder
const setupBulma =function() {
    //Get Bulma from node modules
    gulp.src([nodepath + 'bulma/*.sass']).pipe(gulp.dest('scss/bulma/'));
    gulp.src([nodepath + 'bulma/**/*.sass']).pipe(gulp.dest('scss/bulma/'));
};

// Copy assets
const copy =function() {
    //Copy other external css assets
    gulp.src(['assets/fonts/*']).pipe(gulp.dest('_site/assets/fonts/'));
};

//Theme Sass variables
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: [nodepath + 'bulma/sass']
};

// Compile Theme Scss
const compile_scss =function () {
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
        content: ['_site/*.html']
      }))
      .pipe(gulp.dest('./_site/assets/css/'));
};


// Compile Html
const compile_html =function() {
    gulp.src('html/pages/**/*.html')
        .pipe(panini({
        root: 'html/pages/',
        layouts: 'html/layouts/',
        partials: 'html/includes/',
        helpers: 'html/helpers/',
        data: 'html/data/'
    }))
    .pipe(gulp.dest('_site'))
    .pipe(inlinesource())
    .on('finish', browser.reload);
};


const compile_html_reset =function(done) {
    panini.refresh();
    done();
};

// Compile js from node modules
const compile_js =function() {
    return gulp.src([
        nodepath + 'jquery/dist/jquery.min.js',
        nodepath + 'feather-icons/dist/feather.min.js',
        'js/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./_site/assets/js/'));
};

//Copy images to production site
const copy_images =function() {
    gulp.src('images/**/*.png')
        .pipe(gulp.dest('./_site/assets/images/'));
};

const build = gulp.series(clean, copy, compile_js, compile_scss, copy_images, compile_html);

// Starts a BrowerSync instance
const server =gulp.series(build, function(){
    browser.init({server: './_site', port: port});
});

// Watch files for changes
const watch =function() {
    gulp.watch('scss/**/*', gulp.series(compile_scss, browser.reload));
    gulp.watch('sass/**/*', gulp.series(compile_sass, browser.reload));
    gulp.watch('js/**/*', gulp.series(compile_js, browser.reload));
    gulp.watch('html/pages/**/*', compile_html);
    gulp.watch('images/**/*', gulp.series(copy-images, browser.reload));
    gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], gulp.series(compile_html_reset,compile_html));
    gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], panini.refresh);
};

exports.init = setupBulma;
exports.build = build;
exports.default = gulp.parallel(server, watch);
