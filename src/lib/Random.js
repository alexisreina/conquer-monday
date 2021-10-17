export default class {
  constructor(max) {
    this.max = max;
    this.prev = null;
    this.next = null;
  }

  get new() {
    while (this.prev === this.next) {
      this.next = Math.floor(Math.random() * this.max);
    }
    this.prev = this.next;
    return this.next;
  }
}
