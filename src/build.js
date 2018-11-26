const fs = require('fs');
const path = require('path');
const edge = require('edge.js');
const extensions = require('../extensions');
const viewPath = path.join(__dirname, './views');
const distPath = path.join(__dirname, '../dist');
const previewPath = path.join(__dirname, '../preview');

edge.registerViews(viewPath)

const report = function (err) {
  if (err) {
    return console.log(err);
  }
}

const render = function (extension) {
  const dir = `${distPath}/${extension.id}`
  const filename = `${dir}/extension.html`
  const previewFilename = `${previewPath}/${extension.id}.html`
  const jsonFileName = `${dir}/extension.json`

  const html = edge.render(extension.id, {
    preview: false,
    componentPath: 'https://cdn.jsdelivr.net/gh/incraigulous/contentful-ui-extensions/src/components/',
    sourcePath: 'https://cdn.jsdelivr.net/gh/incraigulous/contentful-ui-extensions/src/'
  })

  const preview = edge.render(extension.id, {
    preview: true,
    componentPath: '../src/components/',
    sourcePath: '../src/'
  })

  fs.mkdir(dir, {
    recursive: true
  }, report);
  fs.writeFile(filename, html, report);
  fs.writeFile(jsonFileName, JSON.stringify(extension, null, '\t'), report);
  fs.writeFile(previewFilename, preview, report);
}

extensions.forEach(render)