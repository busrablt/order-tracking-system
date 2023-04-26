import { shallowMount } from "@vue/test-utils";
import RadioButton from "@/components/RadioButton";

describe("RadioButton", () => {
  const wrapper = shallowMount(RadioButton);

  test("Should be render component correctly", () => {
    expect(wrapper.find(".button-container").exists()).toBeTruthy();
  });

  test("Should be render span tag correctly", async () => {
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
