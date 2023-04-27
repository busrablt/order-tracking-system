import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { NewOrderList } from "../mocks/Orders";
import NewOrders from "@/views/NewOrders";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("NewOrders", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getNewOrderList: () => NewOrderList,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  test("DynamicTable's length should be equal to getNewOrderList length", () => {
    const wrapper = shallowMount(NewOrders, { store, localVue });
    expect(wrapper.findAllComponents({ name: "OrderCard" }).length).toBe(2);
    expect(wrapper.findAllComponents({ name: "PageHeader" }).length).toBe(1);
  });

  test("OrderCard component should be  get correct props", () => {
    const wrapper = shallowMount(NewOrders, { store, localVue });
    const orderCards = wrapper.findAllComponents({ name: "OrderCard" });
    orderCards.wrappers.forEach((wrapper, index) => {
      expect(wrapper.props("orderInfos")).toEqual(NewOrderList[index]);
    });
  });
});
