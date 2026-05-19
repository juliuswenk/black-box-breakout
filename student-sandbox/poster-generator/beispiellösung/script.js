const poster = document.querySelector("#poster");
const title = document.querySelector("#posterTitle");
const subtitle = document.querySelector("#posterSubtitle");
const place = document.querySelector("#posterPlace");
const number = document.querySelector("#posterNumber");

const titleInput = document.querySelector("#titleInput");
const subtitleInput = document.querySelector("#subtitleInput");
const placeInput = document.querySelector("#placeInput");
const randomButton = document.querySelector("#randomize");
const motionToggle = document.querySelector("#motionToggle");
const paletteButtons = document.querySelectorAll("[data-palette]");
const layoutButtons = document.querySelectorAll("[data-layout]");

const imageA = document.querySelector("#imageA");

const images = [
  "bilder/fgj-1.jpg",
  "bilder/Bildschirmfoto 2023-09-06 um 22.37.44.png",
  "bilder/Bildschirmfoto 2024-04-08 um 23.00.10.png",
  "bilder/PIA20038~orig.jpg",
  "bilder/plants 1.png",
];

const palettes = ["signal", "mono", "acid"];
const layouts = ["stack", "split", "field"];

// Mood images were used only as visual orientation for contrast and rhythm.
// They are intentionally not loaded into the poster.

function setPalette(name) {
  palettes.forEach((palette) => poster.classList.remove(`palette-${palette}`));
  poster.classList.add(`palette-${name}`);
  paletteButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.palette === name);
  });
}

function setLayout(name) {
  layouts.forEach((layout) => poster.classList.remove(`layout-${layout}`));
  poster.classList.add(`layout-${name}`);
  layoutButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.layout === name);
  });
}

function updateText() {
  title.textContent = titleInput.value || "Untitled";
  subtitle.textContent = subtitleInput.value || "Event subtitle";
  place.textContent = placeInput.value || "Unknown place";
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomizePoster() {
  setPalette(pick(palettes));
  setLayout(pick(layouts));
  imageA.src = pick(images);
  number.textContent = String(Math.floor(Math.random() * 89) + 10);

  poster.style.setProperty("--tilt-a", `${Math.floor(Math.random() * 8) - 4}deg`);
  poster.style.setProperty("--scale-a", (0.92 + Math.random() * 0.16).toFixed(2));
}

function toggleMotion() {
  const isAnimated = poster.classList.toggle("is-animated");
  motionToggle.textContent = isAnimated ? "Motion on" : "Motion off";
  motionToggle.classList.toggle("is-active", isAnimated);
}

titleInput.addEventListener("input", updateText);
subtitleInput.addEventListener("input", updateText);
placeInput.addEventListener("input", updateText);
randomButton.addEventListener("click", randomizePoster);
motionToggle.addEventListener("click", toggleMotion);

paletteButtons.forEach((button) => {
  button.addEventListener("click", () => setPalette(button.dataset.palette));
});

layoutButtons.forEach((button) => {
  button.addEventListener("click", () => setLayout(button.dataset.layout));
});

setPalette("signal");
setLayout("stack");
updateText();
poster.classList.add("is-animated");
motionToggle.classList.add("is-active");
