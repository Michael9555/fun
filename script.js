document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    const tl = gsap.timeline();

    tl.to("p", {
      text: "Ты Пидор!",
      duration: 5,
      ease: "power1.in",
      paused: false,
    }).to("p", { fontSize: 100, ease: "elastic" });

    button.style.display = "none";
  });
});
