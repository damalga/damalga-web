import nllp from "./assets/svgs/nllp.svg";
import alcarcia from "./assets/svgs/alcarcia.svg";
import polymorphism from "./assets/svgs/polymorphism.svg";
import hackeed from "./assets/svgs/hackeed.svg";
import css from "./assets/svgs/css.svg";
import git from "./assets/svgs/git.svg";
import nodee from "./assets/svgs/nodee.svg";

function Column2() {
  return (
    <section className="col-2">
      <div className="projects topic">
        <h4>PROJECTS</h4>
        <div className="alcarcia music project">
          <img src={alcarcia} alt="alcarcia logo" />
          <p className="bold">
            Alcarcia <br></br>
            <span>Artist / Producer</span>
            <br></br>
            <a className="link" href="https://www.alcarcia.com" target="_blank">
              Website
            </a>
          </p>
        </div>
        <div className="polymorphism music project">
          <img src={polymorphism} alt="polymorphism logo" />
          <p className="bold">
            Polymorphism Records <br></br>
            <span>Record label</span>
            <br></br>
            <a className="link" href="https://www.polymorphismrecords.com" target="_blank">Website</a>
          </p>
        </div>
        <p className="first extra-info">
          Both projects take electronic music as their starting point. I collect vinyls and I'm fascinated by synths, drum machines and basically any gadget or device that makes noise.
        </p>
        <div className="nllp music project">
          <img src={nllp} alt="nllp logo" />
          <p className="bold">NL + LP<br></br>
            <span>NewsLetter + Landing Page</span>
            <br></br>
            <a className="link" href="https://damalga.github.io/damalga-nl-lp/" target="_blank">Website</a>
          </p>
        </div>
        <p className="first extra-info">
          This is a project I started recently to consolidate ideas about technology, economy, philosophy and beyond!
        </p>
        <div className="nllp music project">
          <img src={hackeed} alt="nllp logo" />
          <p className="bold">Hackeed<br></br>
            <span>E-commerce</span>
            <br></br>
            <a className="link" href="https://hackeed.es" target="_blank">Website</a>
          </p>
        </div>
        <p className="first extra-info">
          Open tech store and living lab driven by curiosity, where ethics flex and systems rebuild.
        </p>
      </div>

      <div className="skills topic">
        <h4>SKILLS</h4>
        <div className="on-off">
          <h5>Design and Composition</h5>
          <p>
            With a strong mix of references and resources, I bring brand values to life across digital and print media. Check out my <a className="link" href="https://www.behance.net/damalga" target="_blank">Behance</a> for some of my favorite projects from my visual journey.
          </p>
        </div>
        <div className="front-end">
          <h5>Systems and Interfaces</h5>
          <div className="front-end-icons">
            <div className="css">
              <img src={css} alt="bootstrap" />
              <p className="text"> I build interfaces from the ground up, keeping structure and style in sync. HTML and CSS are my foundation, extended with <a className="link" href="https://sass-lang.com/" target="_blank">Sass</a> for modular styling. For static sites, <a className="link" href="https://handlebarsjs.com/" target="_blank">Handlebars</a> is my go-to, simple, fast and easy to maintain.</p>
            </div>
            <div className="node">
              <img src={nodee} alt="node" />
              <p className="text">When it comes to interaction and logic I stay close to vanilla JavaScript. I’m comfortable enough with <a className="link" href="https://react.dev/" target="_blank">React</a>, but <a className="link" href="https://vuejs.org/" target="_blank">Vue</a> fits better with how I build and think. It lets me handle both templating and state with clarity.</p>
            </div>
            <div className="git">
              <img src={git} alt="git" />
              <p className="text">I work comfortably in the terminal, moving between <a className="link" href="https://git-scm.com/" target="_blank">Git</a> and <a className="link" href="https://github.com/damalga" target="_blank">Github</a> to keep projects alive and traceable. Bash is my daily companion for small automations, quick fixes and clean setups.
              </p>
            </div>
          </div>
          <p className="extra-info">
            I’ve worked across many cores and CMSs, adapting easily to different setups and workflows. I used to orchestrate builds with <a className="link" href="https://gulpjs.com/" target="_blank">Gulp</a>, now <a className="link" href="https://vitejs.dev/" target="_blank">Vite</a> does the job faster and cleaner. I work comfortably in Linux, where most of my tools and setups live.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Column2;
