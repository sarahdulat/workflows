var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

var coffeeSources = ['componants/coffee/tagline.coffee']

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('componants/scripts'))
});