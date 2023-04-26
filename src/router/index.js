import Vue from "vue";
import VueRouter from "vue-router";
import AcceptedOrders from "@/views/AcceptedOrders";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AcceptedOrders",
    component: AcceptedOrders,
  },
  {
    path: "/new-orders",
    name: "NewOrders",
    component: () =>
      import(/* webpackChunkName: "new-orders" */ "../views/NewOrders"),
  },
  {
    path: "/cooking-orders",
    name: "CookingOrders",
    component: () =>
      import(/* webpackChunkName: "create-order" */ "../views/CookingOrders"),
  },
  {
    path: "/create-order",
    name: "CreateOrder",
    component: () =>
      import(/* webpackChunkName: "create-order" */ "../views/CreateOrder"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
