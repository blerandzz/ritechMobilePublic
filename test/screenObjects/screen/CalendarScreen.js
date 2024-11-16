import getCurrentMonthYear from "../utils/utils";

export default class CalendarScreen {
  constructor() {
    this.selector =
      "id=com.socialnmobile.dictapps.notepad.color.note:id/text_button_center";
  }

  async validateMonth() {
    const currentMonth = await $(this.selector);
    const actualMonth = await currentMonth.getText();
    await expect(actualMonth).toEqual(getCurrentMonthYear());
  }
}
