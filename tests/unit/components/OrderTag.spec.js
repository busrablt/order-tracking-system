import { shallowMount } from "@vue/test-utils";
import OrderTag from "@/components/OrderTag";

describe("OrderTag", () => {
  const wrapper = shallowMount(OrderTag, {
    propsData: {
      value: "Takeaway",
    },
  });
  test("Should be render component correctly", () => {
    expect(wrapper.find("#order-tag").exists()).toBeTruthy();
  });
  test("Should be render value prop when passed", () => {
    expect(wrapper.text()).toMatch("Takeaway");
  });
});
