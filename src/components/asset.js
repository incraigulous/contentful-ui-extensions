export default {
  template: ` <div>
    <button class="cf-btn-secondary" @click="handleClick">Choose Asset</button>
  </div>`,
  props: {
    value: String
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
        this.input = selectedAsset
      })
    },
  }
}