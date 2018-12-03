export default {
  template: ` <div>
    <button class="cf-btn-secondary" @click="handleClick">Choose Asset</button> 
    <div v-if="input">
      <img :src="this.input" style="margin-top: 15px;">
      <button @click="close">
        <icon icon="close"/>
      </button>
    </div>
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
      get() {
        return this.value
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
    close() {
      this.input = null
    }
  }
}