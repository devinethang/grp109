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
