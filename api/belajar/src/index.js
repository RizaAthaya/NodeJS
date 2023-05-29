require("dotenv").config();
const PORT = process.env.PORT || 5000;

const serverless = require('serverless-http');
const express = require("express");
const app = express();
const cors = require("cors");

const tagsRoutes = require("./routes/tags");
const scholarshipsRoutes = require("./routes/scholarships");
const mentorRoutes = require("./routes/mentor");
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth")
const middleware = require("./middleware/logs");

app.use(cors());
app.use(middleware.logRequest);
app.use(express.json());
app.use("/.netlify/functions/api/users", usersRoutes);
app.use("/.netlify/functions/api/auth", authRoutes);
app.use("/.netlify/functions/api/mentor", mentorRoutes);
app.use("/.netlify/functions/api/scholarships", scholarshipsRoutes);
app.use("/.netlify/functions/api/tags", tagsRoutes);

// app.get("/", (req, res) => {
//   res.json({
//     nama: "Riza Athaya",
//     email: "riza@gmail.com",
//   });
// });

app.listen(PORT, () =>
  console.log(`App listening on port http://localhost:${PORT} !`)
);

// app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)