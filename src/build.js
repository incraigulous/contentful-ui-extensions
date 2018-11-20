const fs = require('fs')
const path = require('path')
const edge = require('edge.js')
const viewPath = path.join(__dirname, './views');
const distPath = path.join(__dirname, '../dist');
const previewPath = path.join(__dirname, '../preview');

edge.registerViews(viewPath)

const report = function (err) {
  if (err) {
    return console.log(err);
  }

  console.log(`${filename} exported.`);
}

const render = function (view) {
  const filename = `${distPath}/${view}.html`
  const previewFilename = `${previewPath}/${view}.html`
  const html = edge.render(view, {
    preview: false,
    componentPath: 'https://cdn.jsdelivr.net/gh/incraigulous/contentful-ui-extensions/src/components/'
  })
  const preview = edge.render(view, {
    preview: true,
    componentPath: '../src/components/'
  })
  fs.writeFile(filename, html, report);
  fs.writeFile(previewFilename, preview, report);
}

fs.readdir(viewPath, (err, files) => {
  files
    .filter(filename => filename.includes('.edge'))
    .forEach(filename => {
      render(filename.replace(".edge", ""))
    });
})