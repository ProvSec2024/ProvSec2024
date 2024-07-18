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
  $.getJSON("config/accepted_papers.json", { mode: "no-cors" })
    .done(function (config) {
      // Setting CFP page
      const full_papers_json = config["full_papers"];
      const short_papers_json = config["short_papers"];
      // get each paper from the json file
      // insert the paper into the html with the tbody tag
      // multiple authors are separated by comma
      full_papers_json.forEach((paper) => {
        authors_string = paper["authors"].join(", ");
        const paper_html = `
        <tr>
            <td>${paper["title"]}</td>
            <td>${authors_string}</td>
        </tr>
          `;
        $("#full-paper-list").append(paper_html);
      });
      // same as the short papers
      short_papers_json.forEach((paper) => {
        authors_string = paper["authors"].join(", ");
        const paper_html = `
            <tr>
                <td>${paper["title"]}</td>
                <td>${authors_string}</td>
            </tr>
            `;
        $("#short-paper-list").append(paper_html);
      });
    })
    .fail(function (jqxhr, textStatus, error) {
      console.log("Error reading JSON file: " + error);
    });
});
