import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton";

describe("BaseButton", () => {
  const wrapper = shallowMount(BaseButton);

  test("Should be render component correctly", () => {
    expect(wrapper.find("#order-button").exists()).toBeTruthy();
  });

  test("Given props value then button text matchs the value", () => {
    const buttonText = "Click me!";
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        value: buttonText,
      },
    });
    expect(wrapper.text()).toMatch(buttonText);
  });
});
