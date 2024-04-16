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
  $.getJSON("config/committee.json", { mode: "no-cors" })
    .done(function (config) {
      // Define a function to process committee data
      function processCommitteeData(data, containerNameId, containerOrgId) {
        data.forEach((member) => {
          const {
            "First Name": fName,
            "Last Name": lName,
            Affiliation: affiliation,
            Country: country,
          } = member;
          const name = `${fName} ${lName}`;
          const org_name = `${affiliation}, ${country}`;
          //   const info = `${fName} ${lName}, ${affiliation}, ${country}`;

          const p = document.createElement("p");
          p.className = "h4 mb-1";
          p.innerText = name;
          document.getElementById(containerNameId).appendChild(p);
          const p2 = document.createElement("p");
          p2.className = "h4 mb-1";
          p2.innerText = org_name;
          document.getElementById(containerOrgId).appendChild(p2);
        });
      }

      // Process different committee types
      const committeeJson = config["committee"];
      processCommitteeData(
        committeeJson["program_committee"] || [],
        "program_committee_name",
        "program_committee_org"
      );
      processCommitteeData(
        committeeJson["org_committee"] || [],
        "org_committee"
      );
      processCommitteeData(
        committeeJson["publication_co_chairs"] || [],
        "publication_co_chairs"
      );
      processCommitteeData(
        committeeJson["publicity_co_chairs"] || [],
        "publicity_co_chairs"
      );
    })
    .fail(function (jqxhr, textStatus, error) {
      console.log("Error reading JSON file: " + error);
    });
});
