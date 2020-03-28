import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./index.css";


let keyboard = new Keyboard({
  // onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  // layout: layout,
  theme: "hg-theme-default hg-theme-ios",
  layout: {
    default: [
      "1 2 3 4 5 6 7 8 9 0 {bksp}",
      "й ц у к е н г ш щ з х ъ",
      "ф ы в а п р о л д ж э {enter}",
      "{shift} я ч с м и т ь б ю {shift}",
      "{alt} {smileys} , {space} . {downkeyboard}"
    ],
    shift: [
      "1 2 3 4 5 6 7 8 9 0 {bksp}",
      "Й Ц У К Е Н Г Ш Щ З",
      "Ф Ы В А П Р О Л Д Ж Э {enter}",
      "{shiftactivated} Я Ч С М И Т Ь Б Ю {shiftactivated}",
      "{alt} {smileys} , {space} . {downkeyboard}"
    ],
    alt: [
      "1 2 3 4 5 6 7 8 9 0 `",
      `@ # $ & * ( ) ' " {bksp}`,
      "% - + = / ; : ! ? {enter}",
      "^ ~ { } ( ) /\ & < > [ ]",
      "{default} {smileys} , {space} . {downkeyboard}"
    ],
    smileys: [
      "😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}",
      `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
      "😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}",
      "{default} {smileys} {space} {altright} {downkeyboard}"
    ]
  },
  display: {
    "{alt}": ".?123",
    "{smileys}": "\uD83D\uDE03",
    "{shift}": "⇧",
    "{shiftactivated}": "⇧",
    "{enter}": "return",
    "{bksp}": "⌫",
    "{altright}": ".?123",
    "{downkeyboard}": "⬇",
    "{space}": " ",
    "{default}": "ABC",
    "{back}": "⇦"
  }
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * Handle toggles
   */
  if (button.includes("{") && button.includes("}")) {
    handleLayoutChange(button);
  }
}

function handleLayoutChange(button) {
  let currentLayout = keyboard.options.layoutName;
  let layoutName;

  switch (button) {
    case "{shift}":
    case "{shiftactivated}":
    case "{default}":
      layoutName = currentLayout === "default" ? "shift" : "default";
      break;

    case "{alt}":
    case "{altright}":
      layoutName = currentLayout === "alt" ? "default" : "alt";
      break;

    case "{smileys}":
      layoutName = currentLayout === "smileys" ? "default" : "smileys";
      break;

    default:
      break;
  }

  if (layoutName) {
    keyboard.setOptions({
      layoutName: layoutName
    });
  }
}  
