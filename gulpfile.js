const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass')); // Importante: necesitas pasar el módulo 'sass' a gulp-sass

// Tarea para transpilar ES6 a ES5
function es6Task() { // Definimos la tarea como una función
    return gulp.src('./assets/js/*.js') // Corregido: assets, y *js para cualquier .js
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./js'));
}

// Tarea para compilar SASS a CSS
function sassTask() { // Definimos la tarea como una función
    return gulp.src('./assets/scss/*.scss') // Corregido: assets
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

// Tarea 'default' para observar cambios
function defaultTask() {
    // Corregido: pasar la referencia a la función de la tarea
    gulp.watch('./assets/js/*.js', es6Task);      // Cuando cambian archivos JS, ejecuta es6Task
    gulp.watch('./assets/scss/*.scss', sassTask); // Cuando cambian archivos SCSS, ejecuta sassTask
}

// Exportar las tareas para que Gulp las reconozca
// Es la forma estándar en Gulp 4+
exports.es6 = es6Task;
exports.sass = sassTask;
exports.default = defaultTask; // La tarea 'default' se ejecutará con solo 'npx gulp'