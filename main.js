document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch(
    "https://github.com/ProvSec2024/ProvSec2024/blob/main/_includes/header.html",
    { mode: "no-cors" }
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  // Load footer set no-cors to avoid CORS error
  fetch(
    "https://github.com/ProvSec2024/ProvSec2024/blob/main/_includes/footer.html",
    { mode: "no-cors" }
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
