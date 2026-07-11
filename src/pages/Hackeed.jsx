import { useEffect } from "react";
import { navigate } from "../router";

function Hackeed() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevOverflow = document.body.style.overflow;
    document.title = "Damalga - Hackeed";
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
            <h1>Hackeed</h1>

            <p>
              <em>
                What is{" "}
                <a
                  href="https://hackeed.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Hackeed - Online hacking store and living tech lab based in Spain"
                >
                  Hackeed
                </a>
                ?
              </em>{" "}
              Beyond a half-made-up word, it's an online store and an open project. A living lab where curiosity rules.
              An invitation to hack, share and play. We like to put systems to the test, take them apart and put them
              back together. Always from an ethical perspective. Or meta-ethical, depending on who's watching... What if
              ethics were just another questionable system? Anyway... question, deconstruct and build. Never destroy.
              That's the spirit!
            </p>

            <p>
              This store was born from an open-source project, here you have the{" "}
              <a
                href="https://github.com/damalga/sls-template"
                target="_blank"
                rel="noopener noreferrer"
                title="Serverless E-commerce Template Demo"
              >
                DEMO
              </a>
              . If you'd like to build your own serverless store, on{" "}
              <a
                href="https://github.com/damalga/sls-template"
                target="_blank"
                rel="noopener noreferrer"
                title="Serverless E-commerce Template Repo"
              >
                Github
              </a>{" "}
              you'll find the base it was built on so you can do it yourself.
            </p>

            <p>
              If you have ideas, questions, projects, or just want to think out loud,{" "}
              <a href="https://hackeed.es/contact" target="_blank" rel="noopener noreferrer" title="Contact Hackeed">
                get in touch
              </a>
              .
            </p>
          </div>
          <div className="modal-image">
            <img src="/artworks/damalga-project-img-hackeed.png" alt="Hackeed project artwork" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Hackeed;
