# DO NOT USE

### To deploy to github via CLI:

Clone the repository. Add a .env file with the following params:

```
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=
SPACE_ID
```

Add a `config/deployment.json` file with each extension you want to deploy. This allows you to map the extensions to your extension ID.
If you want to use the default IDs, you can ommit the ID field.

```
module.exports = {
  extensions: [{
    extension: 'buttons',
    overrides: {
      id: 'YOUREXTENSIONID',
      srcdoc: './dist/buttons/extension.html',
    },
    data: {
      colors: [{
          text: 'Transparent',
          value: 'transparent'
        },
        {
          text: 'Custom',
          value: 'Value'
        }
      ]
    }
  }, {
    extension: 'q-and-a',
    overrides: {
      id: 'YOUREXTENSIONID',
      srcdoc: './dist/q-and-a/extension.html'
    }
    data: {}
  }, {
    extension: 'repeatable-content',
    overrides: {
      id: 'YOUREXTENSIONID',
      srcdoc: './dist/repeatable-content/extension.html'
    }
    data: {}
  }],
  version: '1.0.3' //Or the version you want to deploy
```

Run `yarn deploy`

### To preview locally:

Run `yarn build`. Locally previewable html files will be added to the `preview` folder.
