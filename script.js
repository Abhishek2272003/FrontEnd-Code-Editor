const toglemode = document.getElementById("enablemod");
const codeArea = document.getElementById("codearea");
const outputArea = document.getElementById("outputarea");
const htmlTextArea = document.getElementById("htmlTextArea");
const cssTextArea = document.getElementById("cssTextArea");
const jsTextArea = document.getElementById("jsTextArea");
const outputTextArea = document.getElementById("outputTextArea");
const codeTextArea = document.getElementsByClassName("codeTextArea");

toglemode.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toglemode.src = "icons8-sun-30.png";
    sethtmlcssjsbackground().disa;
  } else {
    toglemode.src = "icons8-half-moon-32.png";
    removehtmlcssjsbackground();
  }
});

function sethtmlcssjsbackground() {
  htmlValue.setOption("theme", "dracula");
  cssValue.setOption("theme", "dracula");
  jsValue.setOption("theme", "dracula");
}
function removehtmlcssjsbackground() {
  htmlValue.setOption("theme", "solarized");
  cssValue.setOption("theme", "solarized");
  jsValue.setOption("theme", "solarized");
}

var htmlValue = CodeMirror(document.getElementById("htmlTextArea"), {
  lineNumbers: true,
  value: document.getElementById("htmlTextArea").innerText,
  tabSize: 2,
  mode: "text/html",
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  theme: "solarized",
  extraKeys: { "Ctrl-/": "toggleComment" },
});
htmlValue.setSize(null, "563");

var cssValue = CodeMirror(document.getElementById("cssTextArea"), {
  lineNumbers: true,
  value: document.getElementById("cssTextArea").innerText,
  tabSize: 2,
  mode: "css",
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  theme: "solarized",
  extraKeys: { "Ctrl-/": "toggleComment" },
});
cssValue.setSize(null, "563");

var jsValue = CodeMirror(document.getElementById("jsTextArea"), {
  lineNumbers: true,
  value: document.getElementById("jsTextArea").innerText,
  tabSize: 2,
  mode: "javascript",
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  theme: "solarized",
  extraKeys: { "Ctrl-/": "toggleComment" },
});
jsValue.setSize(null, "563");

function run() {
  let htmlCode = htmlValue.getValue();
  let cssCode = "<style>" + cssValue.getValue() + "</style>";
  let scriptCode = jsValue.getValue();
  let output = document.getElementById("outputTextArea");
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(scriptCode);
}

function clear() {
  outputTextArea.contentDocument.body.innerHTML = "";
}



const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalContent = document.getElementById('modalContent');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
  modalContent.style.animation = 'slideIn 0.5s forwards';
  modalContent.style.opacity = '1';
});

closeModalBtn.addEventListener('click', () => {
  modalContent.style.animation = '';
  modalContent.style.transform = 'translate(-50%, -100%)';
  modalContent.style.opacity = '0';
  setTimeout(() => {
    modalOverlay.style.display = 'none';
  }, 500); // Adjust this time to match the animation duration (0.5s in this case)
});
