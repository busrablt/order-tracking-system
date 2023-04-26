import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import "@/assets/scss/main.scss";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyDjyj_2cPRz8lCy-bvzwe2tnOcyuehTM3k",
  authDomain: "order-tracking-system-a3a94.firebaseapp.com",
  projectId: "order-tracking-system-a3a94",
  storageBucket: "order-tracking-system-a3a94.appspot.com",
  messagingSenderId: "666461299321",
  appId: "1:666461299321:web:e30248f65ef622a776aaa8",
  measurementId: "G-M2V9VF6909",
};

initializeApp(firebaseConfig);

Vue.use(Toast, {
  position: "top-right",
  timeout: 7500,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
