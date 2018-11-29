const fs = require('fs');
const path = require('path');
const edge = require('edge.js');
const extensions = require('../config/extensions');
const viewPath = path.join(__dirname, './views');
const distPath = path.join(__dirname, '../dist');
const previewPath = path.join(__dirname, '../preview');
const deploymentConfig = require('../config/deployment')

edge.registerViews(viewPath)

const report = function (err) {
  if (err) {
    return console.log(err);
  }
}

const render = function ({
  extension,
  data
}) {
  const dir = `${distPath}/${extension.id}`
  const filename = `${dir}/extension.html`
  const previewFilename = `${previewPath}/${extension.id}.html`
  const jsonFileName = `${dir}/extension.json`
  const repoPath = `https://cdn.jsdelivr.net/gh/incraigulous/contentful-ui-extensions@${deploymentConfig.version}/`

  const html = edge.render(extension.id, {
    preview: false,
    componentPath: `${repoPath}src/components/`,
    sourcePath: `${repoPath}src/`,
    distPath: `${repoPath}dist/`,
    data: data
  })

  const preview = edge.render(extension.id, {
    preview: true,
    componentPath: '../src/components/',
    sourcePath: '../src/',
    distPath: '../dist/',
    data: data
  })

  fs.mkdir(dir, {
    recursive: true
  }, report);
  fs.writeFile(filename, html, report);
  fs.writeFile(jsonFileName, JSON.stringify(extension, null, '\t'), report);
  fs.writeFile(previewFilename, preview, report);
}

extensions.forEach(render)