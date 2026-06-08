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
            That's an acronym of my full name. From Madrid, Spain; Europe. I
            come from graphic design and front-end web development, but what
            really moves me is understanding how systems work underneath. That's
            why I'm moving into system administration, infrastructure and
            networking. I like building solid systems, removing the unnecessary
            and keeping things clean. Right now I'm focused on consolidating my
            scripting and linux administration skills.
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
