# Contentful UI Extensions

A collection of simple and helpful Contentful UI extensions. To add the extensions to Contentful, click `install from GitHub` and add the URL to the extension .json file.  

**Extensions:** <br />
**Buttons:** https://github.com/incraigulous/contentful-ui-extensions/dist/buttons/extension.json<br />
**Repeatable Content:** https://github.com/incraigulous/contentful-ui-extensions/dist/repeatable-content/extension.json<br />
**Q&A:** https://github.com/incraigulous/contentful-ui-extensions/dist/q-and-a/extension.json'<br />

### To deploy to github via CLI: 
Clone the repository. Add a .env file with the following params: 

```
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=
SPACE_ID=
```

Add a deployment.json with each extension you want to deploy. This allows you to map the extensions to your extension ID.
If you want to use the default IDs, you can ommit the ID field.

```
module.exports = {
  extensions: [{
    extension: 'buttons',
    overrides: {
      id: 'YOUREXTENSIONID',
      srcdoc: './dist/buttons/extension.html'
    }
  }, {
    extension: 'q-and-a',
    overrides: {
      id: 'YOUREXTENSIONID',
      srcdoc: './dist/q-and-a/extension.html'
    }
  }, {
    extension: 'repeatable-content',
    overrides: {
      id: 'YOUREXTENSIONID',
      srcdoc: './dist/repeatable-content/extension.html'
    }
  }],
  version: '1.0.3' //Or the version you want to deploy
```

Run `yarn deploy`

### To preview locally: 

Run `yarn build`. Locally previewable html files will be added to the `preview` folder.
