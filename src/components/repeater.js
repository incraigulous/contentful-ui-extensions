Vue.component("repeater", {
  props: {
    name: {
      default: "item"
    },
    items: {
      default: function () {
        return [];
      }
    },
    labelField: {
      default: 'label'
    },
    defaults: {
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {
      openNext: false
    }
  },
  computed: {
    shouldOpenNext() {
      if (!this.openNext) return false
      this.openNext = false
      return true
    }
  },
  methods: {
    add() {
      this.openNext = true
      this.items.push(Object.assign({}, this.defaults));
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    handleSort(event) {
      if (event.moved) {
        this.$emit('dropped', event.moved)
      }
    }
  },
  template: `
    <draggable class="repeater" :list="items" :options="{'handle': '.repeater-handle'}" @change="handleSort">
      <div v-for="(item, i) in items" :key="i">
        <div class="repeater-item">
          <div class="repeater-handle">
              <icon icon="handle" width="9" height="20" />
          </div>
          <item :label="item[labelField] ? item[labelField] : 'Untitled Item'" :opened="shouldOpenNext">
            <slot :item="item" :index="i"></slot>
            <template slot="controls">
                <span @click.prevent="remove(i)">
                <icon icon="close" />
                </span>
            </template>
          </item>
        </div>
      </div>
      <button class="cf-btn-secondary" @click="add">Add {{ name }} +</button>
    </draggable>`
});