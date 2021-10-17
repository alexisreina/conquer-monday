import { mount } from "@vue/test-utils";
import Container from "@/components/Container.vue";

describe("Container.vue", () => {
  it("renders an item in the default slot when passed", () => {
    const div = "<div id='test'>test</div> ";
    const wrapper = mount(Container, { slots: { default: div } });
    expect(wrapper.find("#test").exists()).toBe(true);
  });
});
