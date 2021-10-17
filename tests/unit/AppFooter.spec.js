import { mount } from "@vue/test-utils";
import AppFooter from "@/components/AppFooter.vue";

describe("AppFooter.vue", () => {
  it("renders an item in the default slot when passed", () => {
    const div = "<div id='test'>test</div> ";
    const wrapper = mount(AppFooter, {
      slots: { default: div },
    });
    expect(wrapper.find("#test").exists()).toBe(true);
  });
});
