module.exports = [{
    extension: {
      "id": "buttons",
      "name": "Buttons",
      "srcdoc": "./extension.html",
      "fieldTypes": ["Object"]
    },
    data: {
      colors: [{
          text: 'Transparent',
          value: 'transparent'
        },
        {
          text: 'White',
          value: 'white'
        },
        {
          text: 'Black',
          value: 'black'
        }
      ]
    }
  },
  {
    extension: {
      "id": "q-and-a",
      "name": "Q&A",
      "srcdoc": "./extension.html",
      "fieldTypes": ["Object"]
    },
    data: {},
  },
  {
    extension: {
      "id": "repeatable-content",
      "name": "Repeatable Content",
      "srcdoc": "./extension.html",
      "fieldTypes": ["Object"]
    },
    data: {},
  },
  {
    extension: {
      "id": "carousel",
      "name": "Carousel",
      "srcdoc": "./extension.html",
      "fieldTypes": ["Object"]
    },
    data: {
      options: [{
          text: "Cat 1",
          content: `<img class="img-fluid" src="http://placekitten.com/1500/600">`,
          value: 'cat-1'
        },
        {
          text: "Cat 2",
          content: `<img class="img-fluid" src="http://placekitten.com/1500/650">`,
          value: 'cat-2'
        },
        {
          text: "Cat 3",
          content: `<img class="img-fluid" src="http://placekitten.com/1500/650">`,
          value: 'cat-3'
        }
      ]
    }
  },
  {
    extension: {
      "id": "meta",
      "name": "Meta",
      "srcdoc": "./extension.html",
      "fieldTypes": ["Object"]
    },
    data: {},
  },
]