import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

//rutas

import router from "@/components/router";
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
