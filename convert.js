const csv = require("csvtojson");
const fs = require("fs");

const csvFilePath = "./public/Goodreads_data.csv"; // Path to your CSV file
const jsonFilePath = "./Goodreads_data.json"; // Path where JSON file will be saved

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // Save JSON to file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2));
    console.log("CSV converted to JSON successfully!");
  })
  .catch((error) => {
    console.error("Error converting CSV to JSON:", error);
  });
