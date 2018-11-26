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
  }
};

window.contentfulExtension = {
  init(callback) {
    callback(extensionsApiMock)
  }
}