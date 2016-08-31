import babel from 'gulp-babel'
import newer from 'gulp-newer'
import gulp from 'gulp'
import path from 'path'
import through from 'through2'

const COMPONENTS_PATH = path.resolve(__dirname, './components')
const OUTPUT_PATH = path.resolve(__dirname, './lib')

gulp.task('build', () => {
  return gulp.src(`${COMPONENTS_PATH}/**.js`)
    .pipe(through.obj((file, encoding, callback) => {
      file._path = file.path
      file.path = path.join(OUTPUT_PATH, path.parse(file._path).base)
      callback(null, file)
    }))
    .pipe(newer(COMPONENTS_PATH))
    .pipe(babel())
    .pipe(gulp.dest(COMPONENTS_PATH))
})
