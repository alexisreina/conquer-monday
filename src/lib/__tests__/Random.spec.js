import Random from "@/lib/Random";

describe("Random.js", () => {
  it("should return a random positive integer number", () => {
    const max = 10;
    const random = new Random(max);
    for (let i = 0, l = 10; i < l; i++) {
      expect(random.new).toBeGreaterThanOrEqual(0);
      expect(random.new).toBeLessThanOrEqual(max);
    }
  });

  it("should not repeat the previous number", () => {
    const max = 2;
    const random = new Random(max);
    for (let i = 0, l = 100; i < l; i++) {
      expect(random.new).not.toEqual(random.new);
    }
  });
});
