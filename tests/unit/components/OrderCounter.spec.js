import { shallowMount } from "@vue/test-utils";
import OrderCounter from "@/components/OrderCounter";

describe("OrderCounter", () => {
  const wrapper = shallowMount(OrderCounter);

  test("Should be render component correctly", () => {
    expect(wrapper.find(".counter").exists()).toBeTruthy();
  });

  test("Component should contain three span elements", () => {
    expect(wrapper.findAll("span").length).toEqual(3);
  });

  test("Should increase the value when the plus sign is clicked", async () => {
    await wrapper.setProps({
      value: 0,
    });
    await wrapper.find(".counter__sign:last-child").trigger("click");
    expect(wrapper.emitted("input")[0]).toEqual([1]);
  });
});
