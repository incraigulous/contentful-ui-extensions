import Vue from 'vue'
import Draggable from 'vuedraggable'
import Markdown from './components/markdown'
import VueCarousel from 'vue-carousel';
import Icon from './components/icon'
import Item from './components/item'
import Repeater from './components/repeater'

Vue.use(VueCarousel);

Vue.component('markdown-editor', Markdown)
Vue.component('draggable', Draggable)
Vue.component('icon', Icon)
Vue.component('item', Item)
Vue.component('repeater', Repeater)


window.Vue = Vue

window.extension = {
  el: '#app',
  data() {
    return {
      extensionsApi: null
    }
  },
  computed: {
    field() {
      if (this.extensionsApi) {
        return this.extensionsApi.field
      }
      return null;
    }
  },
  mounted() {
    contentfulExtension.init(this.init.bind(this));
  },
  detach() {
    detachValueChangeHandler();
  },
  methods: {
    init(extensionsApi) {
      this.extensionsApi = extensionsApi;
      this.extensionsApi.window.startAutoResizer();
    }
  }
}