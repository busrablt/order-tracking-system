import Vue from "vue";
import Vuex from "vuex";
import { OrderType } from "@/utils/Constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderList: [
      {
        id: "#111111",
        type: "accepted",
        recordInfo: [
          { value: "Order number", key: "#111111" },
          { value: "Date & Time", key: "01/01/2020 at 2:14Pm" },
          { value: "Name", key: "Devansh Mittale" },
          { value: "Contact", key: "+91 8896589655" },
          { value: "Trans Type", key: "Takeaway" },
          { value: "Amount", key: "455$" },
        ],
        orderedItems: [
          { food: "Paneer Tikka Masala", amount: "1" },
          { food: "Tawa butter roti", amount: "4" },
          { food: "Papad", amount: "2" },
        ],
      },
      {
        id: "#988123",
        type: "newOrder",
        recordInfo: [
          { value: "Order number", key: "#988123" },
          { value: "Date & Time", key: "01/01/2020 at 3:19Pm" },
          { value: "Name", key: "Devansh Mittale" },
          { value: "Contact", key: "+91 8896589655" },
          { value: "Trans Type", key: "Delivery" },
          { value: "Amount", key: "50$" },
        ],
        orderedItems: [
          { food: "Paneer Tikka Masala", amount: "1" },
          { food: "Tawa butter roti", amount: "4" },
          { food: "Papad", amount: "2" },
        ],
      },
      {
        id: "#188123",
        type: "cooking",
        recordInfo: [
          { value: "Order number", key: "#188123" },
          { value: "Date & Time", key: "01/01/2020 at 4:14Pm" },
          { value: "Name", key: "Devansh Mittale" },
          { value: "Contact", key: "+91 8896589655" },
          { value: "Trans Type", key: "Delivery" },
          { value: "Amount", key: "60$" },
        ],
        orderedItems: [
          { food: "Paneer Tikka Masala", amount: "1" },
          { food: "Tawa butter roti", amount: "4" },
          { food: "Papad", amount: "2" },
        ],
      },
    ],
  },
  mutations: {
    SET_ORDER_LIST(state, item) {
      state.orderList.unshift(item);
    },
    SET_ORDER_TYPE(state, { orderId, newType }) {
      const order = state.orderList.find((order) => order.id === orderId);
      order.type = newType;
    },
  },
  actions: {
    setOrderList({ commit }, args) {
      commit("SET_ORDER_LIST", args);
    },
    updateOrderType({ commit }, { orderId, newType }) {
      commit("SET_ORDER_TYPE", { orderId, newType });
    },
  },
  getters: {
    getNewOrderList(state) {
      return state.orderList.filter(
        (order) => order.type === OrderType.newOrder
      );
    },
    getAcceptedList(state) {
      return state.orderList.filter(
        (order) => order.type === OrderType.accepted
      );
    },
    getCookingList(state) {
      return state.orderList.filter(
        (order) => order.type === OrderType.cooking
      );
    },
  },
});
