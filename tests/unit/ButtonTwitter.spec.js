import { mount } from "@vue/test-utils";
import ButtonTwitter from "@/components/ButtonTwitter.vue";

describe("ButtonTwitter.vue", () => {
  it("props.label is required and must be a string", () => {
    expect(ButtonTwitter.props).toMatchObject({
      label: {
        type: String,
        required: true,
      },
    });
  });

  it("renders props.label when passed", () => {
    const label = "Tweet me!";
    const wrapper = mount(ButtonTwitter, { propsData: { label } });
    expect(wrapper.text()).toMatch(label);
  });
});
