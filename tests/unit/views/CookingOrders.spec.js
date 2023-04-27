import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { CookingOrderList } from "../mocks/Orders";
import CookingOrders from "@/views/CookingOrders";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CookingOrders", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getCookingList: () => CookingOrderList,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  test("DynamicTable's length should be equal to getCookingList length", () => {
    const wrapper = shallowMount(CookingOrders, { store, localVue });
    expect(wrapper.findAllComponents({ name: "OrderCard" }).length).toBe(2);
    expect(wrapper.findAllComponents({ name: "PageHeader" }).length).toBe(1);
  });
  test("PageHeader component should display correct header text", () => {
    const wrapper = shallowMount(CookingOrders, { store, localVue });
    const pageHeader = wrapper.findComponent({ name: "PageHeader" });
    expect(pageHeader.props("header")).toBe("Cooking");
  });
});
