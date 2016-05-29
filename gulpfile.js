'use strict'

const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const less = require('gulp-less')
const plumber = require('gulp-plumber')
const fileinclude  = require('gulp-file-include')

const css = {
	src: 'src/css/**/*',
	dest: 'dist/css'
}
const script = {
	src: 'src/script/**/*',
	dest: 'dist/script'
}
const img = {
	src: 'src/img/**/*',
	dest: 'dist/img'
}
const jsons = {
	src: 'src/*.json',
	dest: 'dist'
}

gulp.task('less', () => {
	return gulp.src('src/**/*.less')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
})

gulp.task('fileinclude', () => {
    return gulp.src('src/**/*.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('copy-script', () => {
	return gulp.src(script.src)
		.pipe(gulp.dest(script.dest))
})
gulp.task('copy-img', () => {
	return gulp.src(img.src)
		.pipe(gulp.dest(img.dest))
})
gulp.task('copy-css', () => {
	return gulp.src(css.src)
		.pipe(gulp.dest(css.dest))
})
gulp.task('copy-jsons', () => {
	return gulp.src(jsons.src)
		.pipe(gulp.dest(jsons.dest))
})

gulp.task('watch', () => {
	gulp.watch('src/**/*.less', ['less'])
	gulp.watch('src/**/*.html', ['fileinclude'])
})

gulp.task('default', ['watch', 'copy-script', 'copy-img', 'copy-css', 'copy-jsons'])
gulp.task('build', ['copy-script', 'copy-img', 'copy-css', 'copy-jsons', 'less', 'fileinclude'])