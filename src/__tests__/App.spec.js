import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import Quote from "@/components/Quote.vue";

describe("App.vue", () => {
  it("renders a random quote", () => {
    const wrapper = mount(App);
    expect(wrapper.getComponent(Quote));
    expect(wrapper.vm.$data.currentQuote).toBeTruthy();
  });

  it("renders a random color", () => {
    const wrapper = mount(App);
    expect(wrapper.vm.$data.currentColor).toBeTruthy();
  });

  describe("onUpdateQuote", () => {
    it("generates a new quote", () => {
      const wrapper = mount(App);
      const prevQuote = wrapper.vm.$data.currentQuote;

      wrapper.vm.onUpdateQuote();

      const newQuote = wrapper.vm.$data.currentQuote;
      expect(newQuote).not.toBe(prevQuote);
    });

    it("generates a new color", () => {
      const wrapper = mount(App);
      const prevColor = wrapper.vm.$data.currentColor;

      wrapper.vm.onUpdateQuote();

      const newColor = wrapper.vm.$data.currentColor;
      expect(newColor).not.toBe(prevColor);
    });
  });

  describe("composeTweet", () => {
    it("opens a new window to tweet the quote", () => {
      const mockedOpen = jest.fn();
      const originalOpen = window.open;
      window.open = mockedOpen;

      const wrapper = mount(App);
      wrapper.vm.composeTweet();

      expect(mockedOpen).toHaveBeenCalled();
      window.open = originalOpen;
    });
  });
});
