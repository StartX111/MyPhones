const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglifyjs');


gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function(){
    return gulp.src([
        'app/libs/bower/jquery/dist/jquery.min.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));

});

gulp.task('watch', ['browser-sync'], function(){
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/**/*.css', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch'], function(){

});