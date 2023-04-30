require('dotenv').config()
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const middleware = require("./middleware/logs");

app.use(middleware.logRequest);
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/", (req, res) => {
  
});

app.get("/", (req, res) => {
  res.json({
    nama: "Riza Athaya",
    email: "riza@gmail.com",
  });
});

app.listen(PORT, () =>
  console.log(`App listening on port http://localhost:${PORT} !`)
);
