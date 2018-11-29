require("dotenv").config();

const extensions = require("../config/extensions");
const deploymentConfig = require('../config/deployment')
const cli = require("contentful-extension-cli");
const fs = require("fs");
const path = require('path');
const edge = require('edge.js');

const viewPath = path.join(__dirname, './views');
const deployPath = path.join(__dirname, '../deploy');

edge.registerViews(viewPath)

const client = cli.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  spaceId: process.env.SPACE_ID
});

deploymentConfig.extensions.forEach(config => {
  let e = extensions.find(e => e.extension.id === config.extension)
  let view = e.extension.id
  let extensionConfig = Object.assign(e.extension, config.overrides)
  let data = config.data
  let file = `./deploy/${extensionConfig.id}.html`
  extensionConfig['srcdoc'] = file
  const repoPath = `https://cdn.jsdelivr.net/gh/incraigulous/contentful-ui-extensions@${deploymentConfig.version}/`

  const html = edge.render(view, {
    preview: false,
    componentPath: `${repoPath}src/components/`,
    sourcePath: `${repoPath}src/`,
    distPath: `${repoPath}dist/`,
    data
  })

  fs.writeFile(file, html, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  return;

  client.get(extensionConfig.id).then(handleFound, handleNotFound);


  function handleFound(extension) {
    // We need the version in case this was already saved.
    const version = extension.sys.version;
    save({
      version,
      ...extensionConfig
    });
  }

  function handleNotFound() {
    save(extensionConfig);
  }

  function save(config) {
    if (config.srcdoc) {
      fs.readFile(config.srcdoc, "utf8", function (err, data) {
        if (err) {
          return console.log(err);
        }
        client.save(Object.assign({}, config, {
          srcdoc: data
        }));
      });
    }
  }
})