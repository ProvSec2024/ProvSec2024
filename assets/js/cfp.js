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
  $.getJSON("config/data.json", { mode: "no-cors" })
    .done(function (config) {
      // Setting CFP page
      const cfp_json = config["cfp"];
      document.getElementById("cfp_title").innerText = cfp_json["title"];
      document.getElementById("cfp_instruction").innerText =
        cfp_json["cfp_instruction"];
      document.getElementById("cfp_guideline").innerText =
        cfp_json["cfp_guideline"];
      document.getElementById("cfp_sub_date").innerText = cfp_json["sub_date"];
      document.getElementById("cfp_notification_date").innerText =
        cfp_json["notification_date"];
      document.getElementById("cfp_camera_ready_date").innerText =
        cfp_json["camera_ready_date"];
      document.getElementById("cfp_conference_date").innerText =
        cfp_json["conference_date"];
    })
    .fail(function (jqxhr, textStatus, error) {
      console.log("Error reading JSON file: " + error);
    });
});
