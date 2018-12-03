export default {
  template: ` <div>
    <button class="cf-btn-secondary" @click="handleClick">Choose Asset</button> 
    <b style="margin-left: 10px;">{{ this.value }}</b>
  </div>`,
  props: {
    value: String,
    language: {
      default () {
        return ['en-US']
      }
    }
  },
  computed: {
    input: {
      get(value) {
        return value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleClick() {
      this.$root.extensionsApi.dialogs.selectSingleAsset().then((selectedAsset) => {
        if (selectedAsset) {
          this.input = 'https:' + selectedAsset.fields.file[this.language].url
        } else {
          this.input = null
        }
      })
    },
  }
}