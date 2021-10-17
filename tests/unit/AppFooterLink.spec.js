import { mount } from "@vue/test-utils";
import AppFooterLink from "@/components/AppFooterLink.vue";

describe("AppFooterLink.vue", () => {
  it("props.color is required and must be a string", () => {
    expect(AppFooterLink.props).toMatchObject({
      color: {
        type: String,
        required: true,
      },
    });
  });

  it("renders props.color as style when passed", () => {
    const color = "red";
    const wrapper = mount(AppFooterLink, { propsData: { color } });
    expect(wrapper.attributes().style).toMatch(`color: ${color};`);
  });

  it("renders a string in the default slot when passed", () => {
    const label = "Link";
    const wrapper = mount(AppFooterLink, {
      propsData: { color: "red" },
      slots: { default: label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
