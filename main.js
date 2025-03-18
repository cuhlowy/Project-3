document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");

    if (!text) {
        console.error("Text element not found! Check your HTML.");
        return;
    }

    // Growing Effect on Click
    text.addEventListener("click", () => {
        console.log("Clicked! Text should grow.");
        text.classList.toggle("grow");
    });

    // Wind Effect (Mouse Move)
    document.addEventListener("mousemove", (event) => {
        let x = event.clientX / window.innerWidth - 0.5;
        text.style.transform = `rotate(${x * 10}deg)`;
    });

    // Rain Effect (Fade Letters on Double Click)
    text.addEventListener("dblclick", () => {
        console.log("Double clicked! Text should fade.");
        text.style.opacity = "0.5";
        setTimeout(() => text.style.opacity = "1", 2000);
    });
});
