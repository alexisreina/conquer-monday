import { mount } from "@vue/test-utils";
import AppCta from "@/components/AppCta.vue";

describe("AppCta.vue", () => {
  it("renders an item in the default slot when passed", () => {
    const div = "<div id='test'>test</div> ";
    const wrapper = mount(AppCta, { slots: { default: div } });
    expect(wrapper.find("#test").exists()).toBe(true);
  });
});
