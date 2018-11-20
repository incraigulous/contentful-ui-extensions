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
    defaults: {
      default: function () {
        return {};
      }
    }
  },
  methods: {
    add() {
      this.items.push(Object.assign({}, this.defaults));
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    move(oldIndex, newIndex) {
      if (newIndex >= this.items.length) {
        var k = newIndex - this.items.length + 1;
        while (k--) {
          this.items.push(undefined);
        }
      }
      this.items.splice(newIndex, 0, this.items.splice(oldIndex, 1)[0]);
    },
    up(index) {
      if (!index) return
      this.move(index, index - 1)
    },
    down(index) {
      if (index === this.items.length - 1) return;
      this.move(index, index + 1)
    }
  },
  template: `
    <div class="repeater">
      <div class="cf-form-field item" v-for="(item, i) in items" :key="i">
        <slot :item="item"></slot>
        <div class="buttons">
          <button @click.prevent="up(i)">up</button>
          <button @click.prevent="down(i)">down</button>
          <button @click.prevent="remove(i)">remove</button>
        </div>
      </div>
      <button class="cf-btn-secondary" @click="add">Add {{ name }} +</button>
    </div>`
});