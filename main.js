$(document).ready(function () {
  // Load header
  fetch("partial/header.html", { mode: "no-cors" })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  // Load footer set no-cors to avoid CORS error
  fetch("partial/footer.html", { mode: "no-cors" })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  // read json file from config/data.json
  const config = $.getJSON("config/data.json", { mode: "no-cors" });
  // get title, subtitle, location, date and hoster from json file
  const index_json = config["index"];
  // Set title, subtitle, location, date and hoster to html by id
  document.getElementById("title").innerHTML = index_json["title"];
  document.getElementById("subtitle").innerHTML = index_json["subtitle"];
  document.getElementById("location").innerHTML = index_json["location"];
  document.getElementById("date").innerHTML = index_json["date"];
  document.getElementById("hoster").innerHTML = index_json["hoster"];
});
