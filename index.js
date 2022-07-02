const express = require("express");
const app = express();
const path = require("path");

// 👇️ "/home/john/Desktop/javascript"
console.log("directory-name 👉️", __dirname);

app.use(express.static(__dirname + "/assets"));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
