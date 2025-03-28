function newFunction() {
  document.addEventListener("DOMContentLoaded", function () {
    const dude = document.getElementById("dude");
    const yumText = document.getElementById("yumText");

    if (!dude || !yumText) {
      console.error("Error: Elements not found!");
      return;
    }

    dude.addEventListener("click", function () {
      dude.style.display = "none";
      yumText.classList.remove("hidden");
    });
  });
}
