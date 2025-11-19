export default class Typing {
  private element: HTMLElement;
  private delay: number;
  private text: string = "";
  private isCancelled = false;
  private currentTimeout?: number;

  constructor(element: HTMLElement, options: { delay?: number } = {}) {
    this.element = element;
    this.delay = options.delay ?? 80;
  }

  async type(text: string) {
    this.text = text;
    this.element.textContent = "";
    this.isCancelled = false;

    for (let i = 0; i < text.length; i++) {
      if (this.isCancelled) break;
      this.element.textContent += text[i];
      await new Promise<void>(resolve => {
        this.currentTimeout = window.setTimeout(resolve, this.delay);
      });
    }
  }

  cancel() {
    this.isCancelled = true;
    if (this.currentTimeout) clearTimeout(this.currentTimeout);
  }
}
