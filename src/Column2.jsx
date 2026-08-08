import alcarcia from "./assets/svgs/alcarcia.svg";
import polymorphism from "./assets/svgs/polymorphism.svg";
import hackeed from "./assets/svgs/hackeed.svg";
import meowrawr from "./assets/svgs/meowrawr.svg";
import homelab from "./assets/svgs/homelab.svg";
import css from "./assets/svgs/css.svg";
import git from "./assets/svgs/git.svg";
import bash from "./assets/svgs/bash.svg";
import nodee from "./assets/svgs/nodee.svg";
import { Link } from "./router";

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
            </a>{" "}
            ·{" "}
            <Link className="link" to="/alcarcia">
              About
            </Link>
          </p>
        </div>
        <div id="polymorphism" className="polymorphism music project">
          <img src={polymorphism} alt="polymorphism logo" />
          <p className="bold">
            Polymorphism Records <br></br>
            <span>Record label</span>
            <br></br>
            <a className="link" href="https://www.polymorphismrecords.com" target="_blank">
              Website
            </a>{" "}
            ·{" "}
            <Link className="link" to="/polymorphism">
              About
            </Link>
          </p>
        </div>
        <p className="first extra-info">
          Both projects take electronic music as their starting point. I collect vinyls and I'm fascinated by synths,
          drum machines and basically any gadget or device that makes noise.
        </p>
        <div className="hackeed project">
          <img src={hackeed} alt="hackeed logo" />
          <p className="bold">
            Hackeed<br></br>
            <span>E-commerce</span>
            <br></br>
            <a className="link" href="https://hackeed.es" target="_blank">
              Website
            </a>{" "}
            ·{" "}
            <Link className="link" to="/hackeed">
              About
            </Link>
          </p>
        </div>
        <p className="first extra-info">
          Open tech store and living lab driven by technology, economy, philosophy and curiosity.
        </p>
        <div className="meowrawr project">
          <img src={meowrawr} alt="meowrawr logo" />
          <p className="bold">
            MeowRawr<br></br>
            <span>Feline wiki</span>
            <br></br>
            <a className="link" href="https://meowrawr.org" target="_blank">
              Website
            </a>{" "}
            ·{" "}
            <Link className="link" to="/meowrawr">
              About
            </Link>
          </p>
        </div>
        <p className="extra-info">
          A feline wiki and a self-hosting experiment. 2 loves in 1 place: Cats and a Raspberry Pi serving a website.
        </p>
        <div className="homelab project">
          <img src={homelab} alt="homelab logo" />
          <p className="bold">
            Homelab<br></br>
            <span>Personal infrastructure</span>
            <br></br>
            <Link className="link" to="/homelab">
              Description
            </Link>
          </p>
        </div>
        <p className="extra-info">
          A handful of machines, each with its own name, running the services I use every day. Prologue, three chapters and an epilogue.
        </p>
      </div>

      <div className="skills topic">
        <h4>SKILLS</h4>
        <div className="design-composition">
          <h5>Design and Composition</h5>
          <p>
            With a strong mix of references and resources, I bring brand values to life across digital and print media.
            Check out my{" "}
            <a className="link" href="https://www.behance.net/damalga" target="_blank">
              Behance
            </a>{" "}
            for some of my favorite projects from my visual journey.
          </p>
        </div>
        <div class="systems-interfaces">
          <div className="system-interface-icons">
            <div className="system-interface css">
              <img src={css} alt="css scss bootstrap" />
              <p className="text">
                I build interfaces from the ground up, keeping structure and style in sync. HTML and CSS are my
                foundation, extended with{" "}
                <a className="link" href="https://sass-lang.com/" target="_blank">
                  Sass
                </a>{" "}
                for modular styling. For static sites,{" "}
                <a className="link" href="https://handlebarsjs.com/" target="_blank">
                  Handlebars
                </a>{" "}
                and/or{" "}
                <a className="link" href="https://www.11ty.dev/" target="_blank">
                  11ty
                </a>{" "}
                is my weapon to deploy fast.
              </p>
              <p className="extra-info">
                I've worked across many cores and CMSs, adapting easily to different setups and workflows.
              </p>
            </div>
            <div className="system-interface">
              <img src={nodee} alt="javascript node" />
              <p className="text">
                When it comes to interaction and logic I stay close to vanilla JavaScript. I'm comfortable enough with{" "}
                <a className="link" href="https://react.dev/" target="_blank">
                  React
                </a>
                , but{" "}
                <a className="link" href="https://vuejs.org/" target="_blank">
                  Vue
                </a>{" "}
                fits better with how I build and think. It lets me handle both templating and state with clarity.
              </p>
              <p className="extra-info">
                I used to use{" "}
                <a className="link" href="https://gulpjs.com/" target="_blank">
                  Gulp
                </a>{" "}
                for styling automations and live reload. Also{" "}
                <a className="link" href="https://webpack.js.org/" target="_blank">
                  Webpack
                </a>{" "}
                for bundling, but{" "}
                <a className="link" href="https://vitejs.dev/" target="_blank">
                  Vite
                </a>{" "}
                now handles all of that faster and cleaner.
              </p>
            </div>
            <div className="system-interface">
              <img src={git} alt="git github" />
              <p className="text">
                I work comfortably with{" "}
                <a className="link" href="https://git-scm.com/" target="_blank">
                  Git
                </a>
                . I've tried AI tools like{" "}
                <a className="link" href="https://www.anthropic.com/product/claude-code" target="_blank">
                  Claude Code
                </a>
                . I must recognize its impact in software development without forgetting it's built on the collective
                human knowledge found in docs and places like{" "}
                <a className="link" href="https://stackoverflow.com/" target="_blank">
                  StackOverflow
                </a>
                .
              </p>
              <p className="extra-info">
                I still value going to the source and understanding what each line does before anything.
              </p>
            </div>
            <div className="system-interface">
              <img src={bash} alt="bash cli command line interface linux tui terminal user interface rust cargo" />
              <p className="text">
                <a className="link" href="https://www.gnu.org/software/bash/" target="_blank">
                  Bash
                </a>{" "}
                really fascinates me and combining it with CLI tools to do more complex tasks drives me crazy. I work
                comfortably in GNU/Linux and the terminal.
              </p>
              <p className="extra-info last-extra">
                I use{" "}
                <a className="link" href="https://www.openwrt.org/" target="_blank">
                  OpenWrt
                </a>{" "}
                routers and{" "}
                <a className="link" href="https://www.raspberrypi.com/" target="_blank">
                  Raspberry Pis
                </a>{" "}
                to self-host, digging into VPNs, DNS, Docker and how TCP/IP works underneath.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Column2;
