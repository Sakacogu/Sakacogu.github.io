const photo = document.getElementById("llama1");
console.log("photo element:", photo);

  photo.addEventListener("click", function () {
    console.log("Current photo visibility:", photo.style.display);
    photo.style.display = photo.style.display === "none" ? "block" : "none";
    console.log("New photo visibility:", photo.style.display);
  });