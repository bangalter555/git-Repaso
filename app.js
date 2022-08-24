const d = document;
const body = document.body;

const $title = document.createElement("h1");
$title.textContent = "Hello World";

body.appendChild($title);

const mainContent = document.createElement("main");
mainContent.innerHTML = "<p>This is a paragraph</p>";
body.appendChild(mainContent);
