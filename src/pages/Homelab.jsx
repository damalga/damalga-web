import { useEffect } from "react";
import { navigate } from "../router";

function Homelab() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevOverflow = document.body.style.overflow;
    document.title = "Damalga - Homelab";
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
            <h1>Homelab</h1>

            <p>
              A while back I had a{" "}
              <a href="https://www.qnap.com/es-es/product/ts-433" target="_blank" rel="noopener noreferrer" title="QNAP TS-433">
                QNAP
              </a>
              , in other words a <b>NAS</b> (Network Attached Storage), a mini home server for storing files and reaching them from any device on your network (or from outside it, if you set that up). Basically, it's like having your own Google Drive/Dropbox... I used it for music, movies, that sort of thing.
            </p>

            <p>
              All good, until one day I lost the power supply. No big deal, I thought, I'll just buy a compatible replacement… (which turned out not to be compatible…) I plug it in and right away: a flash, the smell of burnt cable, and my beloved QNAP shipped off to Valhallelectronics. RIP, soldier. On top of that, it fried a few chips on one of the drives (it had 2 of 4TB in there), so instead of crying about it I had to fix it, and after a while of mulling it over I told myself: let's do this better.
            </p>

            <p>
              I grabbed an old 2015 HP laptop, installed{" "}
              <a href="https://www.debian.org/index.es.html" target="_blank" rel="noopener noreferrer" title="Debian">
                Debian
              </a>{" "}
              12 and{" "}
              <a href="https://www.xfce.org/" target="_blank" rel="noopener noreferrer" title="XFCE desktop environment">
                XFCE
              </a>{" "}
              (a pretty lightweight desktop environment) on it, and got to work:{" "}
              <a href="https://nextcloud.com/es/" target="_blank" rel="noopener noreferrer" title="Nextcloud">
                Nextcloud
              </a>{" "}
              for my own file cloud,{" "}
              <a href="https://www.navidrome.org/" target="_blank" rel="noopener noreferrer" title="Navidrome">
                Navidrome
              </a>{" "}
              to build a private "Spoti" for streaming all my music, and{" "}
              <a href="https://tailscale.com/" target="_blank" rel="noopener noreferrer" title="Tailscale">
                Tailscale
              </a>{" "}
              to reach everything from wherever I am, without wrestling with crazy VPNs or open ports on the router.{" "}
              <a href="https://hackeed.es/en/blog/post_2" target="_blank" rel="noopener noreferrer" title="Homelab writeup on Hackeed">
                Here
              </a>{" "}
              I get into all the details.
            </p>

            <p>
              That worked out well, so well that the project kept evolving, that damn silicon hijacked my neural network and kept it mutating. Today the setup is made up of a few more machines, each with its own name:
            </p>

            <details className="chapter">
              <summary>Chapter 1: Zakarias</summary>

              <p>
                The HP did its job, but a laptop moonlighting as a server is pretty overmotherfuckinghead. So when I discovered the{" "}
                <a href="https://shop.zimaspace.com/es/products/zimablade-single-board-server-for-cyber-native" target="_blank" rel="noopener noreferrer" title="ZimaBlade">
                  ZimaBlade
                </a>
                , I decided to "retire" it.
              </p>

              <p>
                The <b>ZimaBlade</b> is an SBC (Single Board Computer), a full computer on a single board, like a Raspberry Pi, but with one particular twist: its processor architecture is <b>x86</b>, the same as a regular PC, and not <b>ARM</b> like the Raspberry. In practice that means you can install almost any program built for a PC without fighting compatibility issues. Mine runs a <b>Celeron N3350</b>, which won't move mountains but is more than enough for serving my own files (nothing too heavy). Anyway, I rechristened the ZimaBlade as <b>Zakarias</b>. Why? Doesn't matter, no need to know that.
              </p>

              <p>
                It came stock with <b>Debian Bookworm</b> plus a visual web interface (
                <a href="https://casaos.zimaspace.com/" target="_blank" rel="noopener noreferrer" title="CasaOS">
                  CasaOS
                </a>
                ) that <b>IceWhale</b> (the company behind this machine) stopped maintaining, a genuinely useful tool that makes visually managing containers a lot easier, for hosting a huge stack of programs and services running efficiently.
              </p>

              <p>
                Now! Here's the bad part (pretty bad, in my opinion): it kept connecting every so often to a server over at Alibaba, with a persistence that was, at the very least, curious (the attempts ended up blocked on my network, more on that in Chapter 2). What was inside those requests? No idea: could be something as boring as checking for updates or usage telemetry, or it could be something less admissible. I haven't checked, that would mean capturing the traffic and picking it apart, but I'm too late for that now: it would have been a great exercise, but like I said, CasaOS isn't maintained anymore, and I'd rather not run unpatched software on my network. So I won't sell you any certainties. What I do know for a fact: persistent connections, undocumented, unannounced, with no switch to turn them off. And that, whatever it was carrying, already strikes me as questionable for something marketed as a digital-liberation tool.
              </p>

              <p>
                Inside the box came a card, thanking you for the purchase and pitching the ZimaBlade as the server for those who dare to be "the ultimate outsiders of this rich, post-capitalist supra-activist era." And get this, the card wraps up with a quote from Albert Camus about becoming so free that your very existence becomes an act of rebellion. Anyway, lots of Camus and lots of questionable logs. I'll leave it there… By the way, the successor is called{" "}
                <a href="https://www.zimaspace.com/zimaos" target="_blank" rel="noopener noreferrer" title="ZimaOS">
                  ZimaOS
                </a>
                , and it's no longer a layer you install on top of Debian, but a full operating system. I'll give it a try someday.
              </p>

              <p>
                That said, I switched operating systems, and after a lot of back and forth I ended up installing <b>Rocky Linux 9</b>. A free clone of Red Hat Enterprise Linux, the distro running a good chunk of the world's enterprise servers, and since I'm knee-deep in the sysadmin world these days, it was good practice to get my hands dirty with SELinux, rpm, dnf, and all that. Then, on top of Rocky, three things:
              </p>

              <p>
                <b>Cockpit</b>, a web panel for managing the server from your browser: disks, services, logs, updates. The terminal is still boss, but for a quick check from your phone, say, it's pretty deluxe.
              </p>

              <p>
                <b>Navidrome</b>, but this time in a container, unlike on the old HP where I installed it bare-metal… This time I skipped Nextcloud; for now I just need to get files up there, and rsync (a command for copying and syncing files between machines) handles that, end of story.
              </p>

              <p>
                And <b>Tailscale</b>, which already showed up in the intro and deserves another bar. It's a VPN (Virtual Private Network, a private network between your devices) but without the usual headache that comes with one, meaning no opening ports or hand-editing config files. You install the app on each device, log in, and they all see each other as if they were in the same room, wherever you are. Thanks to that I can hit play on my music from the car, or check in on Zakarias from another country, all encrypted and without exposing anything to the internet.
              </p>
            </details>

            <details className="chapter">
              <summary>Chapter 2: Federico (and Berta)</summary>

              <p>
                A router is a computer. With its own processor, memory, operating system. The thing is, the router your ISP hands you ships with factory firmware that's usually a "black box": the manufacturer updates it whenever it feels like it, if it feels like it at all, until it stops feeling like it altogether, and the router turns into a hole in your network.
              </p>

              <p>
                <a href="https://openwrt.org/" target="_blank" rel="noopener noreferrer" title="OpenWrt">
                  OpenWrt
                </a>{" "}
                is a full GNU/Linux system built for routers. Its own package manager (opkg), its services, a configurable firewall, SSH... GL.iNet routers ship with OpenWrt out of the box.
              </p>

              <p>
                <b>Federico</b> is a{" "}
                <a href="https://hackeed.es/product/gl-inet-flint-2-70d66428-24ad-4780-ade6-82bc6bcd5ad1" target="_blank" rel="noopener noreferrer" title="GL.iNet Flint 2">
                  GL.iNet Flint 2
                </a>
                , and it's the home router. It hands out addresses, routes traffic, holds up the firewall. And it runs{" "}
                <a href="https://adguard.com/" target="_blank" rel="noopener noreferrer" title="AdGuard Home">
                  AdGuard Home
                </a>
                , a filtering DNS server: it intercepts the question "what IP does this domain resolve to?", and if the domain is on an ads-or-tracking blocklist (you can configure those lists easily from its admin panel), it answers that the domain doesn't exist, and the connection never gets made.
              </p>

              <p>
                I already wrote on the Hackeed blog about{" "}
                <a href="https://hackeed.es/en/blog/post_3" target="_blank" rel="noopener noreferrer" title="How to set up Pi-hole on an old Raspberry Pi">
                  how to set up Pi-hole on an old Raspberry Pi
                </a>
                .{" "}
                <a href="https://pi-hole.net/" target="_blank" rel="noopener noreferrer" title="Pi-hole">
                  Pi-hole
                </a>{" "}
                can also be installed straight on the router, no problem. The difference is that AdGuard Home installs from Federico's own admin panel in a couple of clicks, and overall I find the experience more polished than with Pi-hole. Moving the "filter" over to Federico meant taking one machine out of the equation.
              </p>

              <p>
                On the other hand, <b>Berta</b> is a{" "}
                <a href="https://hackeed.es/product/gl-inet-beryl-ax-fb8219f0-f26e-40cf-8bfa-fa7cbbcf8604" target="_blank" rel="noopener noreferrer" title="GL.iNet Beryl AX">
                  GL.iNet Beryl AX
                </a>
                , the travel router. It fits in the palm of your hand, plugs in anywhere, and spins up its own network wherever it is. I usually run it off my phone's connection, but if you'd rather use the hotel's, the airport's, or the library's, that's on you.
              </p>

              <p>
                Between Federico and Berta there's a{" "}
                <a href="https://www.wireguard.com/" target="_blank" rel="noopener noreferrer" title="WireGuard">
                  WireGuard
                </a>{" "}
                tunnel; that's a VPN protocol. The difference with Tailscale comes down to layers: Tailscale is a service built on top of WireGuard that handles the hard parts for you (finding devices, managing keys, punching through NAT) in exchange for depending on its infrastructure. Plain WireGuard means you're the one generating keys and writing the config by hand. A bit more work, but zero middlemen.
              </p>

              <p>
                With that tunnel, whenever I switch Berta on, wherever I am, all the traffic from anything connected to it goes out through my house. If I'm in another country, say, my connection points straight back to my living room.
              </p>
            </details>

            <details className="chapter">
              <summary>Chapter 3: Alba</summary>

              <p>
                Alba is a{" "}
                <a href="https://hackeed.es/product/raspberry-pi-4-model-b-8gb-695f22d8-4692-4b01-8a63-7b7cb10d32f2" target="_blank" rel="noopener noreferrer" title="Raspberry Pi 4 8GB">
                  Raspberry Pi 4 8GB
                </a>{" "}
                in a{" "}
                <a href="https://hackeed.es/product/deskpi-pro-v3-0-carcasa-aluminio-para-raspberry-pi-4-e5f6a7b8-9c0d-1e2f-3a4b-5c6d7e8f9a0b" target="_blank" rel="noopener noreferrer" title="DeskPi Pro V3">
                  DeskPi Pro V3
                </a>{" "}
                case, running Debian with no desktop environment. It started out as an observability node, with{" "}
                <a href="https://prometheus.io/" target="_blank" rel="noopener noreferrer" title="Prometheus">
                  Prometheus
                </a>
                ,{" "}
                <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" title="Grafana">
                  Grafana
                </a>
                , and{" "}
                <a href="https://grafana.com/oss/loki/" target="_blank" rel="noopener noreferrer" title="Loki">
                  Loki
                </a>{" "}
                keeping watch over the rest of the homelab, hence the name: Alba, Latin for dawn, the thing that clears up before the rest of the day does… I dunno... don't grill me about it. XD.
              </p>

              <p>
                Over time Alba stopped just watching and started serving too. These days, on top of keeping an eye on the homelab, it also hosts a site out on the internet:{" "}
                <a href="https://meowrawr.org/" target="_blank" rel="noopener noreferrer" title="MeowRawr">
                  meowrawr.org
                </a>
                , a wiki about wild cats. Nginx takes the request, and a Cloudflare tunnel gets it there without needing to open a single port on Federico. I get into exactly how that's set up{" "}
                <a href="https://hackeed.es/en/blog/post_5" target="_blank" rel="noopener noreferrer" title="Cloudflare tunnel writeup">
                  here
                </a>
                .
              </p>

              <p>
                Lastly, I installed{" "}
                <a href="https://matomo.org/" target="_blank" rel="noopener noreferrer" title="Matomo">
                  Matomo
                </a>
                , a sort of open-source Google Analytics: if you've got a server (like I do), you can run it for free, and sure, if you ever want to extend its capabilities or use their hosted infrastructure, that comes with a cost, but here you're not the product. The tool itself is brilliant, and I use it partly for security (relax, no shady cookies involved) across my own sites: <b>Damalga</b>, meaning this very site, plus{" "}
                <a href="https://www.alcarcia.com/" target="_blank" rel="noopener noreferrer" title="Alcarcia">
                  Alcarcia
                </a>
                ,{" "}
                <a href="https://polymorphismrecords.com/" target="_blank" rel="noopener noreferrer" title="Polymorphism Records">
                  Polymorphism
                </a>
                ,{" "}
                <a href="https://meowrawr.org/" target="_blank" rel="noopener noreferrer" title="MeowRawr">
                  Meowrawr
                </a>
                , and of course{" "}
                <a href="https://hackeed.es/" target="_blank" rel="noopener noreferrer" title="Hackeed">
                  Hackeed
                </a>
                , which on top of letting me spot suspicious connections, lets me see which products get searched the most. Right now the ClockworkPi uConsole is the most popular one. Which also happens to be one of the two stars of the Epilogue.
              </p>
            </details>

            <details className="chapter">
              <summary>Epilogue: Hugo and Martin</summary>

              <p>
                <b>Hugo</b> is a{" "}
                <a href="https://hackeed.es/product/uconsole-kit-rpi-cm4-lite-color-negro-f7a23c89-4d12-4e8a-b623-9c1d8f5a7e42" target="_blank" rel="noopener noreferrer" title="uConsole">
                  uConsole
                </a>{" "}
                from{" "}
                <a href="https://www.clockworkpi.com/" target="_blank" rel="noopener noreferrer" title="ClockworkPi">
                  ClockworkPi
                </a>
                . No mods for now, straight out of the box, aside from a Sway config (the window manager) I've put a fair bit of care into. You can grab the dotfiles{" "}
                <a href="https://codeberg.org/hackeed/uconsole-dotfiles/" target="_blank" rel="noopener noreferrer" title="uConsole dotfiles">
                  here
                </a>
                . It's the pocket machine for tinkering, with no bigger ambition than learning the noble art of pentesting bit by bit, so I installed{" "}
                <a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer" title="Kali Linux">
                  Kali Linux
                </a>{" "}
                on it and kept it lean, so I don't overwhelm myself with tools I'm not going to touch for now.
              </p>

              <p>
                Martin is more or less the same idea in a different body: a{" "}
                <a href="https://hackeed.es/product/raspberry-pi-4-model-b-4gb-0c40723b-461f-4c05-9aef-43233ff1c875" target="_blank" rel="noopener noreferrer" title="Raspberry Pi 4 4GB">
                  Raspberry Pi 4 4GB
                </a>{" "}
                instead of a{" "}
                <a href="https://www.raspberrypi.com/products/compute-module-4/" target="_blank" rel="noopener noreferrer" title="Compute Module 4">
                  Compute Module 4
                </a>{" "}
                (which is Hugo's brain), sitting on a{" "}
                <a href="https://hackeed.es/product/ups-con-rtc-y-coulometro-para-raspberry-pi-4b-3b-3b-a7b8c9d0-1e2f-3a4b-5c6d-7e8f9a0b1c2d" target="_blank" rel="noopener noreferrer" title="52Pi battery carrier">
                  52Pi battery carrier
                </a>
                , with a{" "}
                <a href="https://hackeed.es/product/hat-4g-3g-para-raspberry-pi-f6a7b8c9-0d1e-2f3a-4b5c-6d7e8f9a0b1c" target="_blank" rel="noopener noreferrer" title="HAT 4G LTE for Raspberry Pi">
                  HAT from the same brand stacked on top for 4G LTE connectivity
                </a>
                . The modem I fitted is an{" "}
                <a href="https://docs.arduino.cc/resources/datasheets/TPX00200-TPX00201-datasheet.pdf" target="_blank" rel="noopener noreferrer" title="Arduino Mini PCIe modem datasheet">
                  Arduino
                </a>{" "}
                in Mini PCIe format (any compatible one works here), linked to the Pi with a very short USB cable, plus its antenna, a SIM card, and on top of all that, an{" "}
                <a href="https://hackeed.es/product/alfa-awus036acs-dc2f61b4-5359-458a-9c79-ce2e71ffbc8d" target="_blank" rel="noopener noreferrer" title="Alfa Network AWUS036ACS">
                  Alfa Network AWUS036ACS
                </a>
                , the smallest go-to card for wifi auditing.
              </p>

              <p>
                Martin also lends its name to a bit of wordplay: Hackeed Martin, after Lockheed Martin, the company behind the F-117 Nighthawk. "Invisible" to radar, slipping in where it's least expected. Scale aside, obviously, between a stealth jet and a Raspberry Pi, the idea points at the same thing: the intruder that shouldn't be there. Can you picture Martin strapped to a drone? That could get dangerous in the wrong hands, and no, buddy, we don't want that. Deconstruct to construct, never to destruct, that's the spirit!
              </p>

              <p>
                To reach Martin remotely, I go straight to WireGuard. I could also use Tailscale, though for this one Headscale feels more consistent, or some other self-hostable VPN service, for coordinating several nodes without depending on servers or infrastructure that isn't mine. Though let's not get carried away, the real point of these last two machines is understanding how a network gets broken into, so I can audit it and learn to lock it down better. Anyway... From a fried QNAP to a handful of machines with names of their own, all of them under my control… I hope this doesn't get too out of hand, though honestly I wouldn't mind if it went completely off the rails. Whatever's meant to be.
              </p>

              <p>A virtual hug.</p>
            </details>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Homelab;
