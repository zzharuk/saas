module.exports = function (gulp, plugins) {
  return function () {
    gulp.src("src/templates/*.mustache")
    .pipe(plugins.mustache('src/data/locales/ru.json',{extension: '.html'},{}))
    .pipe(plugins.decomment({trim: true}))
    .pipe(plugins.prettyHtml({
          indent_size: 2,
          indent_char: ' ',
          unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
      }))
    .pipe(gulp.dest("dist/ru"))
    .pipe(plugins.browserSync.reload({ stream: true }));
  }
};