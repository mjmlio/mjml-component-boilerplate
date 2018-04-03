import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import rename from 'gulp-rename'
import gutil from 'gulp-util'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MjLayout from './components/MjLayout'
import MjImageText from './components/MjImageText'
import MjBasicComponent from './components/MjBasicComponent'
registerComponent(MjBasicComponent)
registerComponent(MjImageText)
registerComponent(MjLayout)

// Import and register your components here

const compile = () => {
  gulp.src(path.normalize('components/**.js'))
    .pipe(babel())
    .on('error', gutil.log)
    .pipe(gulp.dest('lib'))
    .on('end', () => {
      fs.readFile(path.normalize('./index.mjml'), 'utf8', (err, data) => {
        if (err) throw err
        const result = mjml2html(data)
        fs.writeFile(path.normalize('./index.html'), result.html)
      })
    })
}

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch([
    path.normalize('components/**.js'),
    path.normalize('index.mjml'),
  ], compile)
})
