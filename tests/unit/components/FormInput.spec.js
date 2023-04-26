import { shallowMount } from "@vue/test-utils";
import FormInput from "@/components/FormInput";

describe("FormInput", () => {
  const wrapper = shallowMount(FormInput, {
    propsData: {
      label: "Name",
      multiColumn: true,
      large: true,
    },
  });
  test("Should be render component correctly", () => {
    expect(wrapper.find("#form-input").exists()).toBeTruthy();
  });
  test("Given the label prop then div should be match prop", () => {
    const label = "Name";
    expect(wrapper.find(".label").text()).toMatch(label);
  });
  test('Should be render a class of "large" when large prop is true', () => {
    const wrapper = shallowMount(FormInput, {
      propsData: { large: true },
    });
    expect(wrapper.find("input").classes()).toContain("large");
  });
});
