import { mount } from "@vue/test-utils";
import ButtonQuote from "@/components/ButtonQuote.vue";

describe("ButtonQuote.vue", () => {
  const label = "Label";
  const color = "red";

  it("renders a button with props label, color when passed", () => {
    const wrapper = mount(ButtonQuote, {
      propsData: { label, color },
    });

    expect(wrapper.text()).toEqual(label);
    expect(wrapper.find("span").attributes("style")).toMatch(`color: ${color}`);
  });

  it("emits click when passed", async () => {
    const wrapper = mount(ButtonQuote, {
      propsData: { label, color },
    });

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
