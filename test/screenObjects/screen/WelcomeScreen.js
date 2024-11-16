import Button from "../components/Button";
import MainScreen from "./MainScreen";

export default class WelcomeScreen {
  constructor() {
    this.selector = "id=com.socialnmobile.dictapps.notepad.color.note:id";
    this.skipButtonSelector = "btn_start_skip";
    this.skipbutton = new Button(this.selector, this.skipButtonSelector);
  }

  async navigateToMainScreen() {
    await this.skipbutton.clickButton();
    return new MainScreen();
  }
}
