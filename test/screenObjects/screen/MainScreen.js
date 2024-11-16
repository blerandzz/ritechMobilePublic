import Button from "../components/Button";
import Modal from "../components/Modal";
import CalendarScreen from "./CalendarScreen";

export default class MainScreen {
  constructor() {
    this.selector = "id=com.socialnmobile.dictapps.notepad.color.note:id";
    this.addNoteIconSelector = "main_btn1";
    this.addNoteButton = new Button(this.selector, this.addNoteIconSelector);
    this.savedNote =
      "id=com.socialnmobile.dictapps.notepad.color.note:id/title";
  }

  async addNote() {
    await this.addNoteButton.clickButton();
    return new Modal();
  }

  async checkSavedNote(expectedText) {
    const elements = await $$(this.savedNote);
    let exists = false;

    for (const element of elements) {
      const actualText = await element.getText();
      if (actualText.includes(expectedText)) {
        exists = true;
        break;
      }
    }

    if (exists) {
      console.log(`An element with the text "${expectedText}" exists.`);
    } else {
      console.log(`No element with the text "${expectedText}" found.`);
    }

    expect(exists).toBe(true);
  }

  async swipeToCalendarScreen() {
    const maxSwipes = 1;
    let swipeCount = 0;

    while (swipeCount < maxSwipes) {
      await driver.execute("mobile: scrollGesture", {
        left: 0,
        top: 500,
        width: 800,
        height: 800,
        direction: "right",
        percent: 1.0,
      });
      swipeCount++;
    }
    return new CalendarScreen();
  }
}
