// Footer block
let n = new Date();
let year = n.getFullYear();

const footer = document.getElementById("footer");

footer.innerHTML = `
  <div class="footer-container">
    <div>
      <p>&copy; ${year} Honey Hive. All rights Reserved.</p>
    </div>
    <div>
      <a href="http://validator.w3.org/check?uri=https://devinethang.github.io/grp109/team_project/index.html" target="_blank">
        <img src="http://www.w3.org/Icons/valid-xhtml10" alt="HTML Validator" height="44" width="100">
      </a>
      <a href="https://jigsaw.w3.org/css-validator/validator?uri=https://devinethang.github.io/grp109/team_project/index.html" target="_blank">
        <img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="CSS Validator" height="44" width="100">
      </a>
    </div>
  </div>`;

// Dev Box
document.addEventListener("DOMContentLoaded", function () {
  const devNames = ["Wilber Amaya", "Devin Graupmann", "Joel Samuel"];
  const container = document.getElementById("scrolling-names");

  const nameWrapper = document.createElement("div");
  nameWrapper.className = "name";
  nameWrapper.innerHTML = devNames.map(name => `${name}<br>`).join("");
  container.appendChild(nameWrapper);
});

// Carousel Logic
const images = [
  {
    src: "./images/middle-image1.jpg",
    alt: "A bee surrounded by sunflowers",
    description: "100% Raw & Unfiltered",
  },
  {
    src: "./images/middle-image2.jpg",
    alt: "A honey jar with a dipper",
    description: "Sustainably Harvested",
  },
  {
    src: "./images/middle-image3.jpg",
    alt: "A golden honeycomb",
    description: "Naturally Rich in Antioxidants!",
  },
];

let currentIndex = 0;
let interval = null;
let elapsedTime = 0;
let timerInterval = null;

const imageElement = document.getElementById("carousel-image");
const descriptionElement = document.getElementById("carousel-description");
const timerElement = document.getElementById("carousel-timer");
const soundLeft = document.getElementById("sound-left");
const soundRight = document.getElementById("sound-right");

function showImage(index) {
  const img = images[index];
  imageElement.src = img.src;
  imageElement.alt = img.alt;
  descriptionElement.textContent = img.description;
}

function nextImage(playSound = false) {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  if (playSound) {
    soundRight.currentTime = 0;
    soundRight.play();
  }
  resetTimer();
}

function prevImage(playSound = true) {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  if (playSound) {
    soundLeft.currentTime = 0;
    soundLeft.play();
  }
  resetTimer();
}

function resetTimer() {
  clearInterval(interval);
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerElement.textContent = `${elapsedTime}s`;
  startCarousel();
}

function startCarousel() {
  interval = setInterval(() => nextImage(false), 3000);
  timerInterval = setInterval(() => {
    elapsedTime++;
    timerElement.textContent = `${elapsedTime}s`;
  }, 1000);
}

// Manual navigation with sound
document.getElementById("next-btn").addEventListener("click", () => nextImage(true));
document.getElementById("prev-btn").addEventListener("click", () => prevImage(true));

// Init
showImage(currentIndex);
startCarousel();
