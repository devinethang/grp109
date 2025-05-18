const bios = {
  wilber: {
    text: `<div id="container"> 
            <div id="intro">               
              <img src="./images/wilbers-pic.gif" alt="Wilber's photo" width="175" height="175">
              <div id=name-intro>
                <h2>Wilber Amaya-Maurisio</h2>
                <p>Bellevue College</p>
              </div>
            </div>
            <div id=bio>
              <p>This is some info about Wilber the pig</p>
            </div>
           </div>

    `,
    style: "wilber.css",
  },
  joel: {
    text: "Add Text Here",
    style: "joel.css",
  },
  devin: {
    text: "Add Text Here.",
    style: "devin.css",
  },
};

document
  .getElementById("member-select")
  .addEventListener("change", function () {
    const selected = this.value;
    const bioSection = document.getElementById("member-bio");
    const styleLink = document.getElementById("member-style");

    if (bios[selected]) {
      bioSection.innerHTML = bios[selected].text;
      styleLink.href = `./css/${bios[selected].style}`;
    } else {
      bioSection.textContent = "";
      styleLink.href = "./css/project_details.css";
    }
  });
