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
            That's an acronym of my full name. From Madrid, Spain; Europe. I come from a graphic design degree where I
            discovered web development, and I've been working on it with passion for the last 7 years. What moves me is
            building efficient, clean and maintainable systems: reusable components, especially with Vue and/or Web
            Components. A devotion to pixel-perfect UI and solid architecture, removing the unnecessary and keeping
            things clean. Right now I'm focused on understanding how the front interacts with the back and how the magic
            happens on the servers.
          </p>
        </div>
      </section>
      <section className="second">
        <div className="name">
          <h3>SYSTEMS BUILDER AND CREATIVE WEB CODER</h3>
        </div>
      </section>
    </header>
  );
}

export default Header;
