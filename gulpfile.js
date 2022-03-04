const { src, dest } = require('gulp')
const svgSymbols = require('gulp-svg-symbols')

function svg() {

  return src(`src/assets/svg/*.svg`)
    .pipe(svgSymbols())
    .pipe(dest(`src/assets`))
}

exports.svg = svg