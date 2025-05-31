document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // Stops the default submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Gets user inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message-block").value.trim();

    // Confirmation message display and reset
    const confirmation =
      `We Appreciate Your Buzz, ${name}!\n\n` +
      `Email: ${email}\n` +
      `Message:\n${message}\n\n` +
      `Our bess are on it, and we'll get back to you as soon as we can!`;

    alert(confirmation);
    form.reset();
  });
});

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
