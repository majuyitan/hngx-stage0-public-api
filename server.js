const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    email: "olorundamisi1@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/majuyitan/hngx-stage0-public-api",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
