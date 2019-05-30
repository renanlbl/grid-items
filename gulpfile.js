const gulp = require('gulp')
const sass = require('gulp-sass')


gulp.task('scss', () => {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./src/css'));
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
})


gulp.task('default', () => {
  console.log("Running...")
})