function createSection(sectionName) {
  return document.createElement("div").classList.add(sectionName);
}

function buildInterface() {
  // Add a container for all elements on the page
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");
  document.body.appendChild(contentDiv);

  // Create main sections within containers
  contentDiv.appendChild(createSection("header"));
  contentDiv.appendChild(createSection("sidebar"));
  contentDiv.appendChild(createSection("main-content"));
}

export default function ScreenController() {
  buildInterface();
}
