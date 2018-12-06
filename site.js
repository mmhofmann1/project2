//listener for toggling menu navigation
document.getElementById('menub').addEventListener("click", function() {
    if (links.style.display === "none") {
      links.style.display = "block"}
      else links.style.display = "none";
});

//listener for toggling dog gallery
document.getElementById('dogb').addEventListener("click", function() {
  if (gallery.style.display === "none") {
    gallery.style.display = "flex"}
    else gallery.style.display = "none";
});
