import { mount } from "@vue/test-utils";
import ButtonQuote from "@/components/ButtonQuote.vue";

describe("ButtonQuote.vue", () => {
  it("renders a button with props label, color and onClick when passed", async () => {
    const onClick = jest.fn();
    const label = "Label";
    const color = "red";
    const wrapper = mount(ButtonQuote, {
      propsData: { label, color, onClick },
    });

    expect(wrapper.text()).toEqual(label);
    expect(wrapper.find("span").attributes("style")).toMatch(`color: ${color}`);

    await wrapper.trigger("click");

    expect(onClick).toHaveBeenCalled();
  });
});
