function convertJSONToCSV(parsedJSON) {
  if (typeof parsedJSON === "object" && !Array.isArray(parsedJSON)) {
    const fields = Object.keys(parsedJSON);
    let fieldString = fields.join(",");
    let rowString = fields.map((field) => parsedJSON[field]).join(",");
    fieldString += "\n";
    return fieldString + rowString;
  }

  let fields;
  let fieldString;
  let rowString = "";
  for (let i = 0; i < parsedJSON.length; i++) {
    if (i === 0) {
      fields = Object.keys(parsedJSON[i]);
      fieldString = fields.join(",") + "\n";
    }

    let currentRow = fields.map((field) => parsedJSON[i][field]).join(",");
    rowString += currentRow + "\n";
  }

  return fieldString + rowString;
}
