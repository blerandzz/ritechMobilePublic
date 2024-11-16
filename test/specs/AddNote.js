import WelcomeScreen from "../screenObjects/screen/WelcomeScreen";

it("1: Create Associated Item", async () => {
  const welcomeScreen = new WelcomeScreen();
  const randomNoteTitle = Math.floor(
    100000 + Math.random() * 900000
  ).toString();
  const colorNoteScreen = await welcomeScreen.navigateToMainScreen();
  const mainScreen = await colorNoteScreen.addNote();
  const noteInput = await mainScreen.clickOption("text");
  await noteInput.addText(randomNoteTitle);
  const actualNote = await noteInput.saveNote();
  await actualNote.checkSavedNote(randomNoteTitle);
  const calendarScreen = await colorNoteScreen.swipeToCalendarScreen()
  await calendarScreen.validateMonth()
});
