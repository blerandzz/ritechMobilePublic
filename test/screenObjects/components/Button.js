export default class Button {
    constructor(selector, option) {
      this.button = `${selector}/${option}`;
    }
  
    async clickButton() {
      const buttonOption = await $(this.button);
      await buttonOption.click();
    }
  }
  