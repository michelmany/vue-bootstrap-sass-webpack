import Vue from 'vue'
import App from './App.vue'

// Vendors
window.$ = window.jQuery = require("jquery")
import bootstrap from 'bootstrap'

new Vue({
  el: '#app',
  render: h => h(App)
})
