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
