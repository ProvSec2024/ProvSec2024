document.addEventListener("DOMContentLoaded", function () {
  // Load header
  //   fetch("_includes/header.html")
  //     .then((response) => response.text())
  //     .then((data) => {
  //       document.getElementById("header-placeholder").innerHTML = data;
  //     });

  // Load footer
  fetch("_includes/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
