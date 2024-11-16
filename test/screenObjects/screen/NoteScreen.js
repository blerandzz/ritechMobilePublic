import MainScreen from "./MainScreen";

export default class NoteScreen {
    constructor() {
      this.selector = "id=com.socialnmobile.dictapps.notepad.color.note:id/edit_note"
    }
  
    async addText(text) {
        const noteField = await $(this.selector)
        await noteField.click();
        await noteField.setValue(text);
    }

    async saveNote(){
        await driver.back(); //APP FUNCTIONALITY WAS TO GO BACK IN ORDER TO SAVE THE NOTE
        await driver.back();
        // await driver.back(); App is not handled with go back button
        return new MainScreen();
    }

  }
  