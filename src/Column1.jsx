import face from "./assets/svgs/face.svg";
import vocento from "./assets/svgs/vocento.svg";
import cheil from "./assets/svgs/cheil.svg";
import amaris from "./assets/svgs/amaris.svg";
import nateevo from "./assets/svgs/nateevo.svg";
import ging from "./assets/svgs/ging.svg";
import Switch from "./components/Switch";

function Column1() {
  return (
    <section className="col-1">
      <div className="intro">
        <img src={face} className="face" alt="face vector" />
        <Switch />
      </div>

      <div className="edu topic">
        <h4>EDUCATION</h4>
        <div className="course school">
          <p>
            <b>Microcredential</b> in Bash.<br></br>
            <a
              className="link"
              href="https://www.uc3m.es/formacion-permanente/Microcredencial-Programacion-Shell-Linux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universidad Carlos III
            </a>{" "}
            (Madrid)<br></br>
            (Oct 2025)
          </p>
        </div>
        <div className="course start">
          <p className="extra-info">A short and focused training on shell scripting.</p>
        </div>
        <div className="course school">
          <p>
            <b>50h on-site course</b> in Javascript.<br></br>
            Asociación Española de <br></br>Programadores Informáticos<br></br>
            (Sep 2019 - Oct 2019)
          </p>
        </div>
        <div className="master school">
          <p>
            <b>300h on-site course + final project</b> in web design and development. Escuela CICE.<br></br>
            (Oct 2016 - Jun 2017)
          </p>
        </div>
        <div className="course start">
          <p className="extra-info">
            These courses took me from design into development, clarifying how I think about web structure, coding and
            especially front-end logic.
          </p>
        </div>
        <div className="erasmus school">
          <p>
            <b>Erasmus+</b> in{" "}
            <a className="link" href="https://www.aalto.fi/en/school-of-arts-design-and-architecture" target="_blank">
              <b>Aalto University</b> school of arts, design and architecture
            </a>{" "}
            (Finland).
            <br></br> (Aug 2015 - Dec 2015)
          </p>
        </div>
        <div className="degree school">
          <p>
            <b>Graphic Design Degree</b> in the{" "}
            <b>
              <a className="link" href="https://esdmadrid.es/" target="_blank">
                Escuela Superior de Diseño de Madrid
              </a>
            </b>{" "}
            (ESDM).<br></br>
            (Sep 2012 - Jun 2017)
          </p>
        </div>
        <div className="course start">
          <p className="extra-info">
            To finish my degree and before presenting my{" "}
            <a
              className="link"
              href="https://www.behance.net/gallery/160249463/The-Holy-Grid"
              target="_blank"
              rel="noopener noreferrer"
            >
              final degree project
            </a>
            , I started working for one of{" "}
            <a className="link" href="https://www.caser.es/" target="_blank">
              Caser
            </a>
            's marketing departments from Jan to Jun 2016.
          </p>
        </div>
      </div>

      <div className="work topic">
        <h4>WORK EXPERIENCE</h4>
        <div className="vocento job">
          <img src={vocento} alt="vocento logo" />
          <p>
            Front-end developer,<br></br>{" "}
            <b>
              <a className="link" href="https://www.vocento.com" target="_blank">
                Vocento
              </a>
            </b>
            .<br></br> (Mar 2023 - Jan 2026).
          </p>
        </div>
        <div className="cheil job">
          <img src={cheil} alt="cheil logo" />
          <p>
            Hybrid Designer,<br></br>{" "}
            <b>
              <a className="link" href="https://www.cheil.com/es" target="_blank">
                Cheil Spain
              </a>
            </b>
            .<br></br> (Jan 2020 - Dec 2022).
          </p>
        </div>
        <div className="job start">
          <p className="extra-info">
            * Career gap to develop the{" "}
            <a
              className="link"
              href="#polymorphism"
              onClick={(e) => {
                if (window.lenis) {
                  e.preventDefault();
                  window.lenis.scrollTo("#polymorphism", { offset: -20 });
                }
              }}
            >
              Polymorphism Records
            </a>
            .
          </p>
        </div>
        <div className="amaris job">
          <img src={amaris} alt="amaris logo" />
          <p>
            Front-layout developer,<br></br>{" "}
            <b>
              <a className="link" href="https://amaris.com/" target="_blank">
                Amaris
              </a>
            </b>
            .<br></br> (Jun 2018 - Dec 2018).
          </p>
        </div>
        <div className="nateevo job">
          <img src={nateevo} alt="nateevo logo" />
          <p>
            Front-layout developer,<br></br>{" "}
            <b>
              <a className="link" href="https://nateevo.com/" target="_blank">
                Nateevo
              </a>
            </b>{" "}
            (Vass Group).<br></br> (Jan 2018 - Jun 2018).
          </p>
        </div>
        <div className="ging job">
          <img src={ging} alt="ging logo" />
          <p>
            Research scholarship,<br></br>{" "}
            <b>
              <a className="link" href="https://ging.github.io/" target="_blank">
                GING
              </a>
            </b>{" "}
            (ETSIT / UPM).<br></br> (Sep 2016 - Jun 2017).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Column1;
