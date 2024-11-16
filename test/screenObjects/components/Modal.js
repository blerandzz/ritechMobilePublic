import NoteScreen from "../screen/NoteScreen";

export default class Modal {
  constructor() {
    this.selector = "id=com.socialnmobile.dictapps.notepad.color.note:id";
  }

  async clickOption(option) {
    const noteType = await $(`${this.selector}/${option}`);
    await noteType.click();
    return new NoteScreen()
  }
}
