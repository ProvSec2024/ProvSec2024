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
      const committee_json = config["committee"];
      const publicity_data = committee_json["publicity"];
      // get each publicity member from the JSON file
      publicity_data.forEach((member) => {
        const name = member["name"];
        const affiliation = member["affiliation"];
        const country = member["country"];
        // <p class="h3 mb-0">Xiangwen Yang, Monash University, Australia</p>
        const info = name + ", " + affiliation + ", " + country;
        const p = document.createElement("p");
        p.className = "h3 mb-0";
        p.innerText = info;
        document.getElementById("publicity_co_chairs").appendChild(p);
      });
    })
    .fail(function (jqxhr, textStatus, error) {
      console.log("Error reading JSON file: " + error);
    });
});
