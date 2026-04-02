const express = require("express");
const cors = require("cors"); // install with npm i cors
const app = express();
const PORT = process.env.PORT || 3000;

// Example route
app.use(cors());
app.get("/", (req, res) => {
  res.json({id:1,name:"riri"});
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});