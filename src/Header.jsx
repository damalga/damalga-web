import hello from "./assets/svgs/hello.svg";

function Header() {
  return (
    <header>
      <section className="first">
        <div className="hello">
          <h1>
            <img src={hello} alt="hello friend" />
          </h1>
        </div>
        <div className="intro">
          <h2>I'M DAMALGA</h2>
          <p>
            I've worked as a graphic designer and front-end developer for the last 10 years, building interfaces with
            HTML, CSS and JavaScript. I have worked with React and Vue: I understand how both work and which one fits
            each case. I have a huge devotion for managing the DOM efficiently, fast loading, pixel-perfect responsive
            design. Clean, reusable and maintainable components. I'm comfortable with GNU/Linux, Git and the terminal,
            with hands-on experience in networking and sysadmin stuff. Design fascinates me, but so does infrastructure;
            how servers send data to browsers to render information.
          </p>
        </div>
      </section>
      <section className="second">
        <div className="name">
          <h3>VISUAL DESIGNER AND WEB DEVELOPER</h3>
        </div>
      </section>
    </header>
  );
}

export default Header;
