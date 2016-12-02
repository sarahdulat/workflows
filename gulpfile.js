var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');

var coffeeSources = ['componants/coffee/tagline.coffee'];
var jsSources = [
	'componants/scripts/rclick.js',
	'componants/scripts/pixgrid.js',
	'componants/scripts/tagline.js',
	'componants/scripts/tempalte.js'
	];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('componants/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
});