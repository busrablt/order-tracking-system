import Vue from "vue";
import Vuex from "vuex";
import {
  OrderType,
  ItemsCollection,
  OrdersCollection,
} from "@/utils/constants";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderItems: [],
    orderList: [],
    loading: false,
    isVisibleSidebar: false,
  },
  mutations: {
    SET_ORDER_LIST(state, list) {
      state.orderList = list;
    },
    SET_ORDER_ITEMS(state, list) {
      state.orderItems = list;
    },
    SET_ORDER_TYPE(state, { orderId, newType }) {
      const order = state.orderList.find((order) => order.id === orderId);
      order.type = newType;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_SIDEBAR_VISIBILITY(state, value) {
      state.isVisibleSidebar = value;
    },
  },
  actions: {
    async updateOrderType({ dispatch, commit }, { orderId, newType }) {
      try {
        commit("SET_LOADING", true);
        await Vue.prototype.$db.update(OrdersCollection, orderId, {
          type: newType,
        });
        await dispatch("fetchOrderList");
      } catch (err) {
        console.error(err);
        Vue.$toast.error("Error updating order type");
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchOrderList({ commit }) {
      try {
        commit("SET_LOADING", true);
        const orderList = await Vue.prototype.$db.read(OrdersCollection);
        if (orderList) {
          commit("SET_ORDER_LIST", orderList);
        }
      } catch (err) {
        console.error(err);
        Vue.$toast.error("Error fetching order list");
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchOrderItems({ commit }) {
      try {
        commit("SET_LOADING", true);
        const orderItems = await Vue.prototype.$db.read(ItemsCollection);
        if (orderItems) {
          commit("SET_ORDER_ITEMS", orderItems);
        }
      } catch (err) {
        console.error(err);
        Vue.$toast.error("Error fetching order items");
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async createOrder({ dispatch, commit }, order) {
      if (Object.is(order, {}) || typeof order !== "object") {
        Vue.$toast.error("Invalid order");
        return null;
      }
      try {
        let orderId;
        commit("SET_LOADING", true);
        if (order.id) {
          await Vue.prototype.$db.createWithId(
            OrdersCollection,
            order.id,
            order
          );
          orderId = order.id;
        } else {
          orderId = await Vue.prototype.$db.create(OrdersCollection, order);
        }
        await dispatch("fetchOrderList");
        return orderId;
      } catch (err) {
        console.error(err);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    getOrderItems(state) {
      return state.orderItems;
    },
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
    getLoading(state) {
      return state.loading;
    },
    getSidebarVisibility(state) {
      return state.isVisibleSidebar;
    },
  },
});
