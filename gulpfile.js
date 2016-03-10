var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
    
gulp.task('copy', function(){
    return gulp.src([
        'index.html',
        'bower_components/webcomponentsjs/webcomponentsjs-lite.js'        
    ],{
        base:'calender_app'
    })
        .pipe(gulp.dist('dist'));
    });
gulp.task('vulcanize', function(){
    return gulp.src('elements/elements.html')
    .pipe(vulcanize({
        stripComments: true,
        inlineScriprs: true,
        inlineCss: true        
    }))
    .pipe(gulp.dest('dist/elements'));
    });
gulp.task('default', ['vulcanize']);
