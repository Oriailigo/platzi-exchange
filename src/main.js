import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

//rutas
import router from "@/components/router";
//importar loader y grafico de bit-coin
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import Chart from "chart.js";
// importar formato de la libreria normal
import { dollarFilter, percentFilter } from "@/filter";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

//usamos los componentes loader y grafico
Vue.use(Chartick.use(Chart));
Vue.use(VueSpinners);

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
