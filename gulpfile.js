var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('correct', function () {
    return gulp
        .src('invalid-styles.less')
        .pipe(less());
});

gulp.task('wrong', function () {
    return gulp
        .src('invalid-styles.less')
        .pipe(less())
        .pipe(gulp.dest('generated-styles.css'));
});