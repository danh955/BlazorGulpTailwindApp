/// <binding ProjectOpened='watch' />
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const destPath = './wwwroot/css/';

gulp.task('css:dev', CreateDevCss);

gulp.task('css:prod', CreateProdCss);

gulp.task('watch', () => {
    gulp.watch(['Styles/site.css', 'tailwind.config.js'], gulp.series(CreateDevCss));
});

function CreateDevCss() {
    return GetCss().pipe(gulp.dest(destPath));
}

function CreateProdCss() {
    return GetCss().pipe(purgecss({ content: ['**/*.html', '**/*.razor'] }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destPath));
}

function GetCss() {
    return gulp.src('./Styles/site.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            require('precss'),
            require('tailwindcss'),
            require('autoprefixer')
        ]));
}

