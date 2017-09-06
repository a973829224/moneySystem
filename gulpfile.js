var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('default',function(){
	gulp.src(['_test/demo2-angular-route/_js/*.js','_test/demo2-angular-route/_js/controllers/*.js'])
		.pipe(uglify())
		.pipe(concat('index.js'))
		.pipe(gulp.dest('dist/js'));
})