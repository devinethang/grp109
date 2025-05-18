const bios = {
  wilber: {
    text: `
      <h2>Wilber Amaya-Maurisio</h2>
      <img src="images/wilber.jpg" alt="Wilber's photo" style="max-width: 200px;">
      <p>This is some info about Wilber the pig</p>
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

document.getElementById('member-select').addEventListener('change', function () {
  const selected = this.value;
  const bioSection = document.getElementById('member-bio');
  const styleLink = document.getElementById('member-style');

  if (bios[selected]) {
    bioSection.innerHTML = bios[selected].text;
    styleLink.href = `./css/${bios[selected].style}`;
  } else {
    bioSection.textContent = '';
    styleLink.href = './css/project_details.css'; 
  }
});
