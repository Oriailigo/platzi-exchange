import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

//rutas
import router from "@/components/router";
// importar formato de la libreria normal
import { dollarFilter, percentFilter } from "@/filter";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
