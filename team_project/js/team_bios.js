const bios = {
  wilber: {
    text: "Add Text Here",
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
    bioSection.textContent = bios[selected].text;
    styleLink.href = `./css/${bios[selected].style}`;
  } else {
    bioSection.textContent = '';
    styleLink.href = './css/project_details.css'; 
  }
});
