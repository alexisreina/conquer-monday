describe("main.js", () => {
  it("Can mount app", () => {
    document.body.innerHTML = "<div id='app'></div>";

    // Executes main file
    require("@/main");

    const page = document.querySelector(".page");
    expect(page).toBeTruthy();
    expect(page.textContent).toMatch("Made with love");
  });
});
