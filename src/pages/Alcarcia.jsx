import { useEffect } from "react";
import { navigate } from "../router";

function Alcarcia() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevOverflow = document.body.style.overflow;
    document.title = "Damalga - Alcarcia";
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") navigate("/");
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.title = prevTitle;
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={() => navigate("/")}>
      <article className="modal-content turbulence" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={() => navigate("/")} aria-label="Close">
          ×
        </button>

        <div className="modal-body">
          <div className="modal-text">
        <h1>Alcarcia</h1>

        <p>
          This project (
          <a
            href="https://alcarcia.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Spaniard music producer and Co-founder of Polymorphism Records."
          >
            website
          </a>
          ) started as a way to understand the basics of{" "}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            title="The library for web and native user interfaces
          "
          >
            React
          </a>{" "}
          and while at it, share my first steps as an electronic music producer. Here you have the GitHub, feel free to
          take it and tweek as you want to show you own "bussiness":{" "}
          <a
            href="https://github.com/damalga/alcarcia-web"
            target="_blank"
            rel="noopener noreferrer"
            title="alcarcia's website (repository) source code on GitHub"
          >
            GitHub
          </a>
          .
        </p>

        <p>
          It's also a way to show my skills as a web layout builder and "strategist" of responsive design and
          development. Later I started mastering the DOM (document object model) using{" "}
          <a
            href="https://jquery.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Fast, small, and feature-rich JavaScript library"
          >
            jQuery
          </a>
          , until I realized that everything I could do with that library I could actually do without it.
        </p>

        <p>
          I've always been the kind of person who works in "default mode" and with the fewest possible dependencies.
        </p>

        <p>
          That said,{" "}
          <a
            href="https://angular.dev"
            target="_blank"
            rel="noopener noreferrer"
            title="Productivity meets scalability"
          >
            Angular
          </a>
          , React and{" "}
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" title="The Progressive JS Framework">
            Vue
          </a>{" "}
          all start by stacking a bunch of JavaScript (JS) dependencies... I love JS, but I can't ignore the brutal
          layer of abstraction the language handles, nor how much this sense of lack of control sometimes overwhelms me.
        </p>

        <p>
          To deal with that frustration, I think I bought a ThinkPad, put a GNU/Linux distribution on it and started a
          "new journey" with Bash, scripting on the terminal and well..;) hacking in general.
        </p>

        <p>
          I'm not giving up JS, I'm not giving up music; I simply don't give up... I enjoy the journey, there is no
          destination.
        </p>
          </div>
          <div className="modal-image">
            <img src="/artworks/damalga-project-img-alcarcia.png" alt="Alcarcia project artwork" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Alcarcia;
