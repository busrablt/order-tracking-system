import { shallowMount } from "@vue/test-utils";
import PageHeader from "@/components/PageHeader";

describe("PageHeader", () => {
  const wrapper = shallowMount(PageHeader);

  test("Should be render component correctly", () => {
    expect(wrapper.find(".page-header").exists()).toBeTruthy();
  });

  test("Should be render span tag correctly", async () => {
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
