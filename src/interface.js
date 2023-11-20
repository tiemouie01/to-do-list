function createDiv(className, text = "") {
  const div = document.createElement("div");
  div.classList.add(className);
  if (text) {
    div.textContent = text;
  }
  return div;
}

function buildInterface() {
  // Add a container for all elements on the page
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");
  document.body.appendChild(contentDiv);

  // Create main sections within containers
  contentDiv.appendChild(createDiv("header"));
  contentDiv.appendChild(createDiv("sidebar"));
  contentDiv.appendChild(createDiv("main-content"));
}

function addHeaderElements() {
  const headerDiv = document.querySelector(".header");
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "To-Do";
  headerDiv.appendChild(heading);
}

function addSidebarElements() {
  const sidebar = document.querySelector(".sidebar");

  // Add presets to sidebar.
  const presetDiv = createDiv("presets");
  const presetHeading = document.createElement("h2");
  presetHeading.textContent = "Presets";
  const myDayDiv = createDiv("my-day", "My Day");
  const importantDiv = createDiv("important", "Important");
  const taskDiv = createDiv("tasks", "Tasks");
  presetDiv.appendChild(presetHeading);
  presetDiv.appendChild(myDayDiv);
  presetDiv.appendChild(importantDiv);
  presetDiv.appendChild(taskDiv);
  sidebar.appendChild(presetDiv);

  // Add personal section to sidebar.
  const personalDiv = createDiv("personal");
  sidebar.appendChild(personalDiv);
}

export default function ScreenController() {
  buildInterface();
  addHeaderElements();
  addSidebarElements();
}
