const extensionsApiMock = {
  window: {
    startAutoResizer() {}
  },
  field: {
    getValue() {},
    setValue(value) {
      console.log('value set', value)
    },
    removeValue() {}
  },
  dialogs: {
    selectSingleAsset() {
      return Promise.resolve('http://placekitten.com/200/300');
    }
  }
};

window.contentfulExtension = {
  init(callback) {
    callback(extensionsApiMock)
  }
}