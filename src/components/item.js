Vue.component("item", {
  props: {
    label: {
      required: true
    },
    opened: {
      default () {
        return false
      }
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isClosed() {
      return !this.isOpen
    }
  },
  created() {
    this.$parent.$parent.$on('dropped', () => {
      this.close()
    })
    if (this.opened) {
      this.open()
    }
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  },
  template: `
  <div class="item">
    <div v-if="isOpen">
      <slot></slot>
    </div>
    <div class="title" v-else @click="open">{{ label }}</div>
    <div class="item-controls">
        <span @click.prevent="toggle">
          <icon v-if="isOpen" icon="hide"></icon>
        </span>
        <slot name="controls"></slot>
    </div>
  </div>
`
});