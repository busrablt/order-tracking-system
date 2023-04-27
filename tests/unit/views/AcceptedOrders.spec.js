import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { AcceptedOrderList } from "../mocks/Orders";
import AcceptedOrders from "@/views/AcceptedOrders";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AcceptedOrders", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getAcceptedList: () => AcceptedOrderList,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  test("DynamicTable's length should be equal to getAcceptedList length", () => {
    const wrapper = shallowMount(AcceptedOrders, { store, localVue });
    expect(wrapper.findAllComponents({ name: "OrderCard" }).length).toBe(1);
    expect(wrapper.findAllComponents({ name: "PageHeader" }).length).toBe(1);
  });
  test("PageHeader component should display correct header text", () => {
    const wrapper = shallowMount(AcceptedOrders, { store, localVue });
    const pageHeader = wrapper.findComponent({ name: "PageHeader" });
    expect(pageHeader.props("header")).toBe("Accepted");
  });
});
