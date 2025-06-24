document.addEventListener("DOMContentLoaded", () => {
  const moon = document.getElementById('moon');
  const sun = document.getElementById('sun');

  let vantaEffect = null;
  let currentTheme = 'night';

 function loadNightTheme() {
  if (vantaEffect) vantaEffect.destroy();

  vantaEffect = VANTA.DOTS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200,
    minWidth: 200,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xffffff,
    backgroundColor: 0x0d0d0d
  });

  moon.classList.remove("hidden");
  sun.classList.add("hidden");
  currentTheme = "night";

  // বডি থেকে day-mode ক্লাস তুলে দাও, night-mode ক্লাস যোগ করো
  document.body.classList.remove("day-mode");
  document.body.classList.add("night-mode");
}

function loadDayTheme() {
  if (vantaEffect) vantaEffect.destroy();

  vantaEffect = VANTA.DOTS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200,
    minWidth: 200,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3366ff,
    backgroundColor: 0xffffff,
  });

  sun.classList.remove("hidden");
  moon.classList.add("hidden");
  currentTheme = "day";

  // বডি থেকে night-mode ক্লাস তুলে দাও, day-mode ক্লাস যোগ করো
  document.body.classList.remove("night-mode");
  document.body.classList.add("day-mode");
}


  moon.addEventListener("click", loadDayTheme);
  sun.addEventListener("click", loadNightTheme);

  loadNightTheme();
});
