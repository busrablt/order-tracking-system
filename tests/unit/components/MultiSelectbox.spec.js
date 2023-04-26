import { shallowMount } from "@vue/test-utils";
import MultiSelectbox from "@/components/MultiSelectbox";

describe("MultiSelectbox", () => {
  const wrapper = shallowMount(MultiSelectbox, {
    propsData: {
      options: [],
    },
  });

  test("Should be render component correctly", () => {
    expect(wrapper.find("#multi-select").exists()).toBeTruthy();
  });

  test("Props sould set correctly", async () => {
    const optionList = [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ];
    await wrapper.setProps({
      options: optionList,
      placeholder: "Pending",
    });
    expect(wrapper.find(".multi-select__placeholder").text()).toBe("Pending");
    expect(wrapper.findAll(".list__item").length).toBe(optionList.length);
  });
});
