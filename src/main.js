// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// add this here instead of index.html so we can specify the apikey without checking it in
import keys from './conf/keys'

function loadGoogleMapsApi() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://maps.googleapis.com/maps/api/js?key=" + keys.googlemaps;
  document.head.appendChild(script);
}
window.onload = loadGoogleMapsApi();

import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
import Mirror from './components/Mirror'

Vue.config.productionTip = false

Vue.component('mirror', Mirror);

Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
