document.addEventListener("DOMContentLoaded", function () {
  // Load header
  //   fetch("_includes/header.html")
  //     .then((response) => response.text())
  //     .then((data) => {
  //       document.getElementById("header-placeholder").innerHTML = data;
  //     });

  // Load footer
  fetch(
    "https://github.com/ProvSec2024/ProvSec2024/blob/main/_includes/footer.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
