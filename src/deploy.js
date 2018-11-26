require("dotenv").config();

const extensions = require("../extensions");
const deploymentConfig = require('../deployment')
const cli = require("contentful-extension-cli");
const fs = require("fs");

const client = cli.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  spaceId: process.env.SPACE_ID
});

deploymentConfig.forEach(deploymentConfig => {
  let e = extensions.find(e => e.id === deploymentConfig.extension)
  let extensionConfig = Object.assign(e, deploymentConfig.overrides)

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