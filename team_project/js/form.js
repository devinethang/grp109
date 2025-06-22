function validateForm() {
  // Track validation status
  let isValid = {
    name: false,
    email: false,
    message: false,
  };

  // Clear previous error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  // Get field values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validation logic
  try {
    if (name === "" || name === "null" || name.length > 20) {
      throw new Error("name");
    } else {
      isValid.name = true;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      throw new Error("email");
    } else {
      isValid.email = true;
    }

    if (message === "") {
      throw new Error("message");
    } else {
      isValid.message = true;
    }

    // All fields valid
    if (isValid.name && isValid.email && isValid.message) {
      const confirmation =
        `We Appreciate Your Buzz, ${name}!\n\n` +
        `Email: ${email}\n` +
        `Message:\n${message}\n\n` +
        `Our bees are on it, and we'll get back to you as soon as we can!`;

      alert(confirmation);

      // Add message to list
      const list = document.getElementById("messageList");
      if (list) {
        const li = document.createElement("li");
        li.textContent = `From: ${name} | ${email} | "${message}"`;
        list.appendChild(li);
      }

      // Reset form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      return false; // Stay on page
    }
  } catch (error) {
    // Display appropriate error message
    if (error.message === "name") {
      document.getElementById("nameError").innerHTML =
        "Name is required and must be 1-20 characters.";
    } else if (error.message === "email") {
      document.getElementById("emailError").innerHTML =
        "Email is required and must be in a valid format.";
    } else if (error.message === "message") {
      document.getElementById("messageError").innerHTML =
        "Message is required.";
    }

    return false;
  }
}
