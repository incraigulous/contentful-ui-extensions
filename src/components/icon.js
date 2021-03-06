export default {
  props: {
    icon: {
      required: true
    },
    width: {
      default: '14'
    },
    height: {
      default: '14'
    }
  },
  computed: {
    componentName() {
      return `icon-${this.icon}`
    }
  },
  template: `
  <span class="icon">
    <component :is="componentName" :width="width" :height="height"></component>
  </span>
  `,
  components: {
    'iconClose': {
      template: `<svg viewBox="-1 -1 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M4.846 7l-3.77-3.77L0 2.155 2.154 0 3.23 1.077 7 4.847l3.77-3.77L11.845 0 14 2.154 12.923 3.23 9.153 7l3.77 3.77L14 11.845 11.846 14l-1.077-1.077L7 9.153l-3.77 3.77L2.155 14 0 11.846l1.077-1.077z"></path></g></svg>`
    },
    'iconHandle': {
      template: `<svg viewBox="-1 -1 7 19" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M3.75 4H1V1h3v3h-.25zm0 5.8H1v-3h3v3h-.25zm0 5.8H1v-3h3v3h-.25z"></path></g></svg>`
    },
    'iconHide': {
      template: `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 490.034 490.034" style="enable-background:new 0 0 490.034 490.034;" xml:space="preserve">
      <g>
        <g>
          <path d="M435.667,54.311c-7-7.1-18.4-7-25.5,0l-64,64c-79.3-36-163.9-27.2-244.6,25.5c-60.1,39.2-96.6,88.5-98.1,90.6
            c-4.8,6.6-4.6,15.6,0.5,22c34.2,42,70,74.7,106.6,97.5l-56.3,56.3c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3s9.2-1.8,12.7-5.3
            l356-355.9C442.667,72.811,442.667,61.411,435.667,54.311z M200.467,264.011c-2.6-5.9-3.9-12.3-3.9-19c0-12.9,5-25.1,14.2-34.3
            c14.4-14.4,35.7-17.8,53.3-10.3L200.467,264.011z M290.667,173.911c-32.7-21-76.8-17.2-105.3,11.3c-16,16-24.7,37.2-24.7,59.7
            c0,16.4,4.7,32.1,13.4,45.6l-37.1,37.1c-32.5-18.8-64.5-46.6-95.6-82.9c13.3-15.6,41.4-45.7,79.9-70.8
            c66.6-43.4,132.9-52.8,197.5-28.1L290.667,173.911z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M486.067,233.611c-24.7-30.4-50.3-56-76.3-76.3c-7.9-6.1-19.2-4.7-25.4,3.1c-6.1,7.8-4.7,19.1,3.1,25.3
            c20.6,16.1,41.2,36.1,61.2,59.5c-11.8,13.8-34.8,38.6-66,61.3c-60.1,43.7-120.8,59.5-180.3,46.9c-9.7-2.1-19.3,4.2-21.3,13.9
            c-2.1,9.7,4.2,19.3,13.9,21.3c15.5,3.3,31.1,4.9,46.8,4.9c23.6,0,47.4-3.7,71.1-11.1c31.1-9.7,62-25.7,91.9-47.5
            c50.4-36.9,80.5-77.6,81.8-79.3C491.367,249.011,491.167,240.011,486.067,233.611z"/>
        </g>
      </g>
      </svg>
      `
    },
    'iconShow': {
      template: `
      <svg enable-background="new 0 0 489.934 489.934" viewBox="0 0 489.934 489.934" xmlns="http://www.w3.org/2000/svg"><path d="m485.967 233.617c-74-91-153.9-137.2-237.7-137.2-33.2 0-66.8 7.4-100 21.9-26.1 11.5-52 27.4-76.9 47.3-42.1 33.7-66.9 67.3-67.9 68.7-4.8 6.6-4.6 15.6.5 22 73.9 91.1 153.9 137.2 237.7 137.2 33.2 0 66.8-7.4 100-21.9 26.1-11.5 52-27.4 76.9-47.3 42.1-33.7 66.9-67.3 67.9-68.7 4.8-6.6 4.6-15.6-.5-22zm-90.7 63.2c-34.8 27.7-89.6 60.7-153.6 60.7-69.1 0-136.5-37.9-200.5-112.7 10.1-11.9 28.6-31.8 53.4-51.6 34.8-27.7 89.6-60.7 153.6-60.7 69.1 0 136.5 37.9 200.5 112.7-10.1 11.9-28.6 31.9-53.4 51.6z"/><path d="m311.267 227.017c-9.9 0-18 8.1-18 18 0 26.7-21.7 48.4-48.4 48.4s-48.4-21.7-48.4-48.4 21.7-48.4 48.4-48.4c9.9 0 18-8.1 18-18s-8.1-18-18-18c-46.6 0-84.4 37.9-84.4 84.4s37.8 84.4 84.4 84.4 84.4-37.9 84.4-84.4c0-9.9-8.1-18-18-18z"/></svg>
      `
    },
    'iconEdit': {
      template: `<svg viewBox="-1 -1 19 18" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M9.702 2.567L.964 11.306 0 16l4.776-.882 8.739-8.738-3.813-3.813zm-7.754 9.715l7.76-7.759.48.48-7.76 7.76-.48-.48zm1.841 1.853l-.48-.48 7.76-7.76.48.48-7.76 7.76zM14.37 5.526l-3.814-3.813L12.27 0l3.813 3.813z"></path></g></svg>`
    }
  }
}