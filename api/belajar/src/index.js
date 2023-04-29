const express = require("express");
const app = express();
const port = 4000;

const usersRoutes = require("./routes/users");
const middleware = require("./middleware/logs");

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(middleware.logRequest);
app.use(express.json())
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.json({
    nama: "Riza Athaya",
    email: "riza@gmail.com",
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
