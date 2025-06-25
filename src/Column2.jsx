import alcarcia from "./assets/svgs/alcarcia.svg";
import polymorphism from "./assets/svgs/polymorphism.svg";
import nllp from "./assets/svgs/nllp.svg";
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
          Both projects take electronic music as their starting point. I collect
          vinyls and I'm fascinated by synths, drum machines and basically any
          gadget or device that makes noise.
        </p>
        <div className="polymorphism music project">
          <img src={nllp} alt="nllp logo" />
          <p className="bold">Damalga NL + LP<br></br>
            <span>NewsLetter + Landing Page</span>
            <br></br>
            <a className="link" href="https://damalga.github.io/damalga-nl-lp/" target="_blank">Website</a>
          </p>
        </div>
        <p className="first extra-info">
          This is a project I started recently to consolidate ideas about technology, economy, philosophy and beyond!
        </p>
      </div>

      <div className="skills topic">
        <h4>SKILLS</h4>
        <div className="on-off">
          <h5>Print & Digital</h5>
          <p>
            With a strong mix of references and resources, I bring brand values to life across digital and print media. Check out my <a className="link" href="https://www.behance.net/damalga" target="_blank">Behance</a> for some of my favorite projects from my creative journey.
          </p>
        </div>
        <div className="front-end">
          <h5>Front-end web tools</h5>
          <div className="front-end-icons">
            <div className="css">
              <img src={css} alt="bootstrap" />
              <p className="text">High level in HTML and CSS, with solid knowledge of <a className="link" href="https://handlebarsjs.com/" target="_blank">Handlebars</a> for dynamic templating, as well as <a className="link" href="https://sass-lang.com/" target="_blank">Sass</a> and various stylesheet libraries. Skilled at efficiently setting and styling elements on the screen.
              </p>
            </div>
            <div className="node">
              <img src={nodee} alt="node" />
              <p className="text">Mid-level in JavaScript. I keep up with modern tools and frameworks, but always come back to the elegance of web standards, vanilla Js and try to keep things dependency-free.</p>
            </div>
            <div className="git">
              <img src={git} alt="git" />
              <p className="text">
                <del>Low level</del> Beginner in...<br></br>
                everything, except giving up.<br></br>
                Full coding energy.<br></br>
                <a className="link" href="https://github.com/damalga" target="_blank">Github</a> and <a className="link" href="https://bitbucket.org/damalga/" target="_blank">Bitbucket</a>. Ready to fuse design and tech with creativity and code.
              </p>
            </div>
          </div>
          <p className="extra-info">
            Countless front-end experiences in projects built on React, Ruby on Rails, Symfony... and CMSs like Liferay, Drupal, WordPress, and more... So, adapting to build any view or interaction with any core comes naturally to me.
            <br></br>
            <br></br>
            I used to work with Gulp to optimize my code, but since <a className="link" href="https://vite.dev/" target="_blank">Vite</a> showed up, it's been my main tool for bundling. It's cool how fast it runs in development.
            <br></br>
            <br></br>
            Oh! and I’m pretty comfortable with the terminal,Git and Linux. I (don't) use Arch btw XD... Currently using Debian on one machine and Manjaro on another.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Column2;
