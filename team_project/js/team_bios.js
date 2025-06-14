const bios = {
  wilber: {
    text: `<div id="container"> 
            <div id="intro">               
              <img src="./images/wilbers-pic.gif" alt="Wilber's photo" width="215" height="215" id="wilbers-profile-pic">
              <div id="name-intro">
                <h3>Wilber Amaya-Maurisio</h3>
                <p>Bellevue College</p>
                <div id="links">
                  <a href="https://github.com/simplywilber" target="_blank">
                    <img src="./images/githublogo.png" alt="Wilber's GitHub link" height="55" width="55">
                  </a>
                    <a href="https://simplywilber.com" target="_blank">
                    <img src="./images/globe.png" alt="Wilber's website link" height="44" width="44">
                  </a>
                </div>
              </div>
            </div>
            <div id="bio">
              <p>
                Hi! My name is Wilber or you can call me Wil, and welcome to my mini page!
              </p>
              <p>
                I'm currently a student at Bellevue 
                College and pursuing a BAS in Software Develpoment.
              </p>
              <p>
                Some of my favorite hobbies include working out, eating, traveling to diffrent countries and of course, programming.
                I'm also a huge Marvel fan so from time to time, you'll find me re-watching a Marvel movie or show.
              </p>
              <p>
              For this project, I will serve as the team leader, responsible for designing, developing, and providing support across all aspects of the site's creation.
              </p>
              <p>
                Feel free to connect with me at anytime, and yes, I would love to collaborate!
              </p>
              <p id="signature">
                Wil
              </p>
            </div>
           </div>

    `,
    style: "wilber.css",
  },
  joel: {
    text: `<div id="container"> 
          <div id="intro">               
            <div id="name-intro">
              <h3>Joel Samuel</h3>
              <p>Bellevue College</p>
            </div>
          </div>
          <div id="bio">
            <p>
              Heya! I'm Joel — a full time student at Bellevue College pursuing Software Development.
            </p>
            <p>
              I'm originally from India and love taking photos/recording and video editing, riding motorcycles and travelling to new places. I am also somewhat into tech and really love cats. 
            </p>
            <p>
              My role in this project is to assist with the HTML/CSS formatting and checking for errors within the repository.
          </div>
         </div>`,
    style: "joel.css",
  },
  devin: {
    text: `
    <div class="intro">
        <h1> Devin Graupmann </h1>
        <div class="seperator">
        <p> 
          Greetings Ladies and Gentlemen! My name is Devin.
          and I am an undergrad at Bellevue College.
          I am currently working on attaining my associates degree in software development. </p>
        <p> 
          I love to hike, kayack, and do archery. I also enjoy playing video games and spending time with my family.
        </p>
        <p>
        I will be hosting this project's repository in addition to working on any new sections of the project.
        </p>
        <p> 
        If you have any questions or would like to connect, feel free to reach out!
        </p>
        </div>
      </div>`,
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
