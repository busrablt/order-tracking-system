import { shallowMount } from "@vue/test-utils";
import DeliveryDetails from "@/components/DeliveryDetails";

describe("DeliveryDetails", () => {
  const details = [
    { value: "Reuben", amount: 2, price: 10 },
    { value: "Sandwich", amount: 1, price: 20 },
  ];

  test("Renders table with correct details when passed props", () => {
    const wrapper = shallowMount(DeliveryDetails, {
      propsData: { details },
    });

    const rows = wrapper.findAll("tr");
    expect(wrapper.findAll("tr").length).toBe(3);

    const headers = rows.at(0).findAll("th");
    expect(headers.at(0).text()).toBe("Order Item");
    expect(headers.at(1).text()).toBe("Number");
    expect(headers.at(2).text()).toBe("Cost");

    const row1 = rows.at(1);
    expect(row1.find('[data-label="Order detail"]').text()).toBe("Reuben");
    expect(row1.find('[data-label="Number"]').text()).toBe("2");
    expect(row1.find('[data-label="Cost"]').text()).toBe("20$");

    const row2 = rows.at(2);
    expect(row2.find('[data-label="Order detail"]').text()).toBe("Sandwich");
    expect(row2.find('[data-label="Number"]').text()).toBe("1");
    expect(row2.find('[data-label="Cost"]').text()).toBe("20$");
  });

  test("renders table with '-' when details prop is empty", () => {
    const wrapper = shallowMount(DeliveryDetails, {
      propsData: { details: [] },
    });

    const rows = wrapper.findAll("tr");
    expect(rows.length).toBe(2); // Header row + empty row

    const row = rows.at(1);
    expect(row.find('[data-label="Order Item"]').text()).toBe("-");
    expect(row.find('[data-label="Number"]').text()).toBe("-");
    expect(row.find('[data-label="Cost"]').text()).toBe("-");
  });
});
