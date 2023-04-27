import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { OrderItems } from "../mocks/Orders";
import CreateOrder from "@/views/CreateOrder";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CookingOrders", () => {
  let store;
  let actions;
  let getters;

  beforeEach(() => {
    actions = {
      setOrderList: jest.fn(() => Promise.resolve()),
    };
    getters = {
      getOrderItems: () => OrderItems,
    };

    store = new Vuex.Store({
      actions,
      getters,
    });
  });
  test("Components imported in create order should be render", () => {
    const wrapper = shallowMount(CreateOrder, { store, localVue });
    expect(wrapper.findAllComponents({ name: "FormInput" }).length).toBe(3);
    expect(wrapper.findAllComponents({ name: "MultiSelectbox" }).length).toBe(
      1
    );
    expect(wrapper.findAllComponents({ name: "DeliveryDetails" }).length).toBe(
      1
    );
    expect(wrapper.findAllComponents({ name: "BaseButton" }).length).toBe(1);
  });
});
