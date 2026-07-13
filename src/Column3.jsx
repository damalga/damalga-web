import ps from "./assets/svgs/ps.svg";
import ai from "./assets/svgs/ai.svg";
import id from "./assets/svgs/id.svg";
import pr from "./assets/svgs/pr.svg";
import ae from "./assets/svgs/ae.svg";
import live from "./assets/svgs/live.svg";
import int1 from "./assets/svgs/int1.svg";
import int2 from "./assets/svgs/int2.svg";
import int3 from "./assets/svgs/int3.svg";
import ecmslv from "./assets/svgs/ecmslv.svg";

function Column3() {
  return (
    <section className="col-3">
      <div className="soft-skills topic">
        <h4>SOFTWARE SKILLS</h4>

        <h5>Graphic tools</h5>
        <div className="soft-skill">
          <img src={ps} className="psdlogo" alt="photoshop logo psd adobe" />
          <div className="bar-wrapper">
            <div className="bar psd-bar"></div>
            <div className="pro-bar psd-pro-bar"></div>
            <p className="label-soft-skill psd">photoshop</p>
          </div>
        </div>
        <div className="soft-skill">
          <img src={ai} className="ailogo" alt="illustrator logo ai adobe" />
          <div className="bar-wrapper">
            <div className="bar ai-bar"></div>
            <div className="pro-bar ai-pro-bar"></div>
            <p className="label-soft-skill ai">illustrator</p>
          </div>
        </div>
        <div className="soft-skill">
          <img src={id} className="idlogo" alt="indesign logo id adobe" />
          <div className="bar-wrapper">
            <div className="bar id-bar"></div>
            <div className="pro-bar id-pro-bar"></div>
            <p className="label-soft-skill id">indesign</p>
          </div>
        </div>
        <p className="extra-info">
          Adobe’s not the only one in the game. I also work with{" "}
          <a className="link" href="https://www.figma.com" target="_blank">
            Figma
          </a>
          , I love it because it loads in the browser so fast and it’s easy collaborate with others.
        </p>
        <h5>Video tools</h5>
        <div className="soft-skill">
          <img src={pr} className="prlogo" alt="premiere logo pr adobe" />
          <div className="bar-wrapper">
            <div className="bar pr-bar"></div>
            <div className="pro-bar pr-pro-bar"></div>
            <p className="label-soft-skill pr">Premiere</p>
          </div>
        </div>
        <div className="soft-skill">
          <img src={ae} className="aelogo" alt="after effects logo ae adobe" />
          <div className="bar-wrapper">
            <div className="bar ae-bar"></div>
            <div className="pro-bar ae-pro-bar"></div>
            <p className="label-soft-skill ae">After Effects</p>
          </div>
        </div>
        <p className="extra-info">
          I often edit videos like I would with Premiere, but using{" "}
          <a className="link" href="https://kdenlive.org/" target="_blank">
            Kdenlive
          </a>
          . It’s lightweight, powerful and open source! For post-production, I still use After Effects.
        </p>
        <h5>Audio tools</h5>
        <div className="soft-skill">
          <img src={live} className="ablogo" alt="ableton live logo" />
          <div className="bar-wrapper">
            <div className="bar live-bar"></div>
            <div className="pro-bar live-pro-bar"></div>
            <p className="label-soft-skill ab">Ableton</p>
          </div>
        </div>
        <p className="extra-info">
          I’ve recently dived into the world of making music through code libraries like{" "}
          <a className="link" href="https://strudel.cc/" target="_blank">
            Strudel
          </a>
          , and I feel it’s given my mind a new abstraction layer.
        </p>
      </div>

      <div className="langs topic">
        <h4>LANGUAGES</h4>
        <div className="level">
          <label>
            Spanish <br></br>
            <span>(Native)</span>
          </label>
          <label>
            English <span>(Fluent-ish chaos master)</span>
          </label>
        </div>
      </div>

      <div className="interests topic">
        <h4>INTERESTS</h4>
        <div className="points">
          <div className="mus-film interest">
            <img src={int1} className="int1" alt="music, films and digital arts" />
            <p>
              Music, cinema<br></br>& digital arts
            </p>
          </div>
          <div className="sci-tec interest">
            <img src={int2} className="int2" alt="science, nature and technology" />
            <p>
              Science, Nature<br></br>& Technology
            </p>
          </div>
          <div className="trips-narr interest">
            <img src={int3} className="int3" alt="trips, vehicles and narratives" />
            <p>
              Trips, vehicles<br></br>& narratives
            </p>
          </div>
        </div>
      </div>

      <div className="contact topic">
        <h4>CONTACT</h4>
        <div className="points">
          <div className="email point">
            <p>
              <b>Email:</b> damalga@protonmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="extra topic">
        <h4>EXTRA</h4>
        <div className="points">
          <div className="point">
            <p>
              <a href="https://youtu.be/pKDBHSzBMug?si=XlsoVv7qvNOeJiKH" className="link">El caballo me salvó la vida</a>: Audiovisual piece about a guy who doesn't know what he's doing but does it anyway.
            </p>
            <img src={ecmslv} alt="el caballo me salvó la vida" />
          </div>
            <p className="extra-info">
              About Basketball, Jokic, horses and record labels. Code, road and bottom-shelf barstool philosophy. This is a Roadtrip from Madrid to as far as one could get and one day will.
            </p>
        </div>
      </div>

      <div className="bye topic">
        <h4>BYE!</h4>
        <p>
          P.S. Follow me on{" "}
          <a className="link" href="https://bsky.app/profile/alcarciandamalga.bsky.social" target="_blank">
            (blue)sky
          </a>{" "}
          or{" "}
          <a className="link" href="https://reddit.com/user/alcarciandamalga/" target="_blank">
            (red)dit
          </a>
          .<br></br>I kinda like the blue/red pill thing...<br></br>
          Have a nice day.
        </p>
        <h6>Damian;</h6>
      </div>
    </section>
  );
}

export default Column3;
