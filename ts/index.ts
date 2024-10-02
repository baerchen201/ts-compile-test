window.addEventListener("load", () => {
  document.querySelector("span")!.style.color =
    Math.random() < 0.5 ? "#f00" : "#00f";
  document.querySelector("div")!.animate([{}, { opacity: "0.2" }, {}], {
    duration: 2000,
    delay: 500,
    fill: "forwards",
    easing: "linear",
    iterations: Infinity,
  });
  document.querySelector("button")!.disabled = false;
  document.querySelector("button")!.onclick = () => {
    location.reload();
  };
});
