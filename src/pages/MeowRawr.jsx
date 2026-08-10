import { useEffect } from "react";
import { navigate } from "../router";

function MeowRawr() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevOverflow = document.body.style.overflow;
    document.title = "Damalga - MeowRawr";
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
    <div className="modal-overlay" data-lenis-prevent onClick={() => navigate("/")}>
      <article className="modal-content turbulence" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={() => navigate("/")} aria-label="Close">
          ×
        </button>

        <div className="modal-body">
          <div className="modal-text">
            <h1>MeowRawr</h1>

            <p>
              This is a feline wiki. These animals fascinate me. I'd love to grab a camera and spend a full day sitting
              on the same spot waiting to photograph or record an{" "}
              <a
                href="https://meowrawr.org/felino/lynx-pardinus/"
                target="_blank"
                rel="noopener noreferrer"
                title="Iberian lynx"
              >
                Iberian lynx
              </a>{" "}
              in its natural habitat, out on the hunt for rabbits, mices, birds and/or snakes...
            </p>

            <p>
              But{" "}
              <a href="https://meowrawr.org/" target="_blank" rel="noopener noreferrer" title="Iberian lynx">
                MeowRawr
              </a>{" "}
              is not just another website about felines. It's a project with a parallel goal that carries as much weight
              as the content itself: learning to self-host a website without relying on infrastructure providers, taking
              control of several layers along the way from the hardware all the way up to when it's finally reachable
              from any web browser. Configuring the web server and facing a whole set of questions around internet
              security.
            </p>

            <p>
              If you want to know more about the infrastructure behind this site, head over to the{" "}
              <a
                href="https://meowrawr.org/sobre-meowrawr/"
                target="_blank"
                rel="noopener noreferrer"
                title="About MeowRawr — infrastructure and self-hosting notes"
              >
                about
              </a>
              .
            </p>
          </div>
          <div className="modal-image">
            <img src="/artworks/damalga-project-img-mr.png" alt="MeowRawr project artwork" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default MeowRawr;
