window.addEventListener("load", () => {
  document.querySelector("span")!.style.color = "#f00";
  document.querySelector("div")!.animate([{}, { opacity: "0.1" }], {
    duration: 2000,
    delay: 500,
    fill: "forwards",
  });
  document.querySelector("button")!.disabled = false;
  document.querySelector("button")!.onclick = () => {
    alert("Button pressed");
  };
});
