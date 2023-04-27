import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/main.scss";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@/directives/index";
import DB from "@/utils/db";

Vue.config.productionTip = false;
Vue.prototype.$db = DB;

Vue.use(Toast, {
  position: "top-right",
  timeout: 7500,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
