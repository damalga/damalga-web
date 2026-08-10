import { useEffect } from "react";
import { navigate } from "../router";

function Polymorphism() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevOverflow = document.body.style.overflow;
    document.title = "Damalga - Polymorphism";
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
        <h1>Polymorphism (Poly) Records</h1>

        <p>
          Poly founded in 2019 by 2 friends with a shared passion for music and a desire to create something that
          brought artists from different parts of the world together. From the beginning, the idea was simple: every
          release would exist as a physical vinyl record and feature multiple artists from different countries, always
          including both male and female contributors. The goal was to encourage cultural exchange through the universal
          music language.
        </p>

        <p>
          Based between Madrid and London, Poly has grown into an independent label that embraces experimentation
          without being confined to genres or artistic boundaries. We collaborate with musicians and producers from
          across the globe, creating releases that celebrate diversity while maintaining a strong artistic identity.
        </p>

        <p>
          Beyond music, the label is committed to supporting social and environmental causes. We prioritise responsible
          production methods and environmentally conscious materials wherever possible and a portion of our profits is
          donated to non-profit organisations working towards positive change. They are:{" "}
          <a
            href="https://reforesta.es"
            target="_blank"
            rel="noopener noreferrer"
            title="Reforesta - Non profit organization - Sustainable development to restore the forests"
          >
            Reforesta
          </a>{" "}
          and{" "}
          <a
            href="https://theoceancleanup.com"
            target="_blank"
            rel="noopener noreferrer"
            title="The Ocean Cleanup - Non profit organization - Join the largest cleanup in history"
          >
            The Ocean Cleanup
          </a>
        </p>
          </div>
          <div className="modal-image">
            <img src="/artworks/damalga-project-img-poly.png" alt="Polymorphism Records project artwork" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Polymorphism;
