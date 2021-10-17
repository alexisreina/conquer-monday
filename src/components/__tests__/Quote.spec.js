import { mount } from "@vue/test-utils";
import Quote from "@/components/Quote.vue";

describe("Quote.vue", () => {
  it("props.text is required and must be a string", () => {
    expect(Quote.props).toMatchObject({
      text: {
        type: String,
        required: true,
      },
    });
  });

  it("renders props.text when passed", () => {
    const text = "new quote";
    const wrapper = mount(Quote, { propsData: { text } });
    expect(wrapper.find(".quote__body").text()).toMatch(text);
  });

  it("renders props.author when passed", () => {
    const author = "autor";
    const wrapper = mount(Quote, { propsData: { author, text: "" } });
    expect(wrapper.find(".quote__cite").text()).toMatch(author);
  });

  it("don't render the footer when props.author is not passed", () => {
    const wrapper = mount(Quote, { propsData: { text: "" } });
    expect(wrapper.find(".quote__footer").exists()).toBe(false);
  });
});
