const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    email: "olorundamisi1@example.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/majuyitan/hngx-stage0-public-api",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
