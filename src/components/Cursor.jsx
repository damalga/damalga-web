import gsap from 'gsap'

function Cursor() {

    const cursorOuter = document.querySelector(".cursor--large");
    const cursorInner = document.querySelector(".cursor--small");
    let mouse = { x: -100, y: -100 };

    let cursorOuterOriginalState = {
        width:  cursorOuter.getBoundingClientRect().width,
        height: cursorOuter.getBoundingClientRect().height,
    };

    const hoverSize = parseFloat(getComputedStyle(cursorOuter).fontSize) * 2.2;

    document.addEventListener("pointerover", (e) => {
        if (e.target.closest("a, summary, .modal-close")) {
            gsap.to(cursorOuter, { duration: 0.2, width: hoverSize, height: hoverSize });
        }
    });
    document.addEventListener("pointerout", (e) => {
        if (e.target.closest("a, summary, .modal-close")) {
            gsap.to(cursorOuter, { duration: 0.2, width: cursorOuterOriginalState.width, height: cursorOuterOriginalState.height });
        }
    });

    document.body.addEventListener("pointermove", (e) => {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    });

    document.body.addEventListener("pointerdown", () => {
        gsap.fromTo(cursorInner, { scale: 1 }, { scale: 2, duration: 0.15 });
    });

    document.body.addEventListener("pointerup", () => {
        gsap.fromTo(cursorInner, { scale: 2 }, { scale: 1, duration: 0.15 });
    });

    function updateCursor() {
        gsap.set(cursorInner, { x: mouse.x, y: mouse.y });
        const w = cursorOuter.offsetWidth;
        const h = cursorOuter.offsetHeight;
        gsap.to(cursorOuter, {
            duration: 0.15,
            x: mouse.x - w / 2,
            y: mouse.y - h / 2,
        });
        requestAnimationFrame(updateCursor);
    }

    updateCursor();

}

export default Cursor
