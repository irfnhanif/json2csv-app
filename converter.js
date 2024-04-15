function convertJSONToCSV(jsonInput) {
  document
    .getElementById("jsonForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const jsonInput = document.getElementById("jsonInput").value;

      try {
        JSON.parse(jsonInput);
        // add json parsing to csv logic
      } catch (error) {
        return error.message;
      }
    });
}
