var argv = require('minimist')(process.argv.slice(2));
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var lazypipe = require('lazypipe');
var less = require('gulp-less');
var merge = require('merge-stream');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

// See https://github.com/austinpray/asset-builder
var manifest = require('asset-builder')('./manifest.json');
//paths to assets directories
var globs = manifest.globs;
var path = manifest.paths;
var config = manifest.config || {};
var project = manifest.getProjectGlobs();

const reload = browserSync.reload;

// CLI options
var enabled = {
    // Enable static asset revisioning when `--production`
    rev: argv.production,
    // Disable source maps when `--production`
    maps: !argv.production,
    // Fail styles task on error when `--production`
    failStyleTask: argv.production,
    // Fail due to JSHint warnings only when `--production`
    failJSHint: argv.production,
    // Strip debug statments from javascript when `--production`
    stripJSDebug: argv.production
};

var cssTasks = function (filename) {
    return lazypipe()
        .pipe(function () {
            return gulpif(!enabled.failStyleTask, plumber());
        })
        .pipe(function () {
            return gulpif(enabled.maps, sourcemaps.init());
        })
        .pipe(function () {

            return gulpif('*.scss', sass({
                outputStyle: 'nested', // libsass doesn't support expanded yet
                precision: 10,
                includePaths: ['.'],
                errLogToConsole: !enabled.failStyleTask
            }));
        })
        .pipe(concat, filename)
        .pipe(autoprefixer, {
            browsers: [
                'last 2 versions',
                'android 4',
                'opera 12'
            ]
        })
        .pipe(minifyCss, {
            advanced: false,
            rebase: false
        })
        .pipe(function () {
            return gulpif(enabled.rev, rev());
        })
        .pipe(function () {
            return gulpif(enabled.maps, sourcemaps.write('.', {
                sourceRoot: 'app/assets/styles/'
            }));
        })();
};

var jsTasks = function (filename) {
    return lazypipe()
        .pipe(function () {
            return gulpif(enabled.maps, sourcemaps.init());
        })
        .pipe(concat, filename)
        .pipe(uglify, {
            compress: {
                'drop_debugger': enabled.stripJSDebug
            }
        })
        .pipe(function () {
            return gulpif(enabled.rev, rev());
        })
        .pipe(function () {
            return gulpif(enabled.maps, sourcemaps.write('.', {
                sourceRoot: 'app/assets/scripts/'
            }));
        })();
};

// Path to the compiled assets manifest in the dist directory
var revManifest = path.dist + 'assets.json';

// If there are any revved files then write them to the rev manifest.
// See https://github.com/sindresorhus/gulp-rev
var writeToManifest = function (directory) {

    return lazypipe()
        .pipe(gulp.dest, path.dist + directory)
        .pipe(browserSync.stream, {match: '**/*.{js,css}'})
        .pipe(rev.manifest, revManifest, {
            base: path.dist,
            merge: true
        })
        .pipe(gulp.dest, path.dist)();
};

var sassTasks = function () {
    return lazypipe()
        .pipe(function () {
            return gulpif('*.scss', sass({
                outputStyle: 'nested', // libsass doesn't support expanded yet
                precision: 10,
                includePaths: ['.'],
                errLogToConsole: !enabled.failStyleTask
            }));
        })
        .pipe(browserSync.stream, {match: '**/*.{css}'})
        .pipe(gulp.dest, path.css)();
};


/** tasks **/

gulp.task('sass', function () {

    var merged = merge();
    merged.add(gulp.src('./app/styles/*.scss'));

    return merged
        .pipe(sassTasks());
});


gulp.task('styles', ['wiredep'], function () {
    var merged = merge();
    manifest.forEachDependency('css', function (dep) {
        var cssTasksInstance = cssTasks(dep.name);
        if (!enabled.failStyleTask) {
            cssTasksInstance.on('error', function (err) {
                console.error(err.message);
                this.emit('end');
            });
        }
        merged.add(gulp.src(dep.globs, {base: 'styles'})
            .pipe(cssTasksInstance));
    });
    return merged
        .pipe(writeToManifest('styles'));
});


// ### Wiredep
// `gulp wiredep` - Automatically inject Less and Sass Bower dependencies. See
// https://github.com/taptapship/wiredep
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;
    return gulp.src(project.css)
        .pipe(wiredep())
        .pipe(changed(path.source + 'styles', {
            hasChanged: changed.compareSha1Digest
        }))
        .pipe(gulp.dest(path.source + 'styles'));
});

gulp.task('log', function () {
    console.log(manifest);
});

gulp.task('clean', require('del').bind(null, [path.dist]));


// Watch files for changes & reload
gulp.task('serve', function () {
    browserSync.init({
        logPrefix: 'WSK',
        server: 'app',
        port: 3000
    });
    console.log(path.source);
    gulp.watch(['app/**/*.html'], reload);
    gulp.watch([path.source + 'styles/**/*'], ['sass'], reload);
    // gulp.watch([path.source + 'scripts/**/*'], ['jshint', 'scripts']);
    // gulp.watch([path.source + 'fonts/**/*'], ['fonts']);
    // gulp.watch([path.source + 'images/**/*'], ['images']);
    // gulp.watch(['bower.json', 'assets/manifest.json'], ['build']);
});


gulp.task('build', function (callback) {
    runSequence('styles',
        'scripts',
        ['fonts', 'images'],
        callback);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

/*TASKS

 $ gulp [ --production ] for building assets /dist (staging and production)
 $ gulp serve -> serve the development folder /app with browser sync

 */

