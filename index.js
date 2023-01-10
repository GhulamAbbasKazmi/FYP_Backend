const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
var cors = require("cors");
const users = require("./routes/users");
const resetPasswordRoute = require("./routes/passwordReset");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB ..."))
  .catch((err) => console.error("Could not connect to MongoDB ..."));

app.use(cors());
app.use(express.json({ limit: "200mb" }));

app.use("/api/users", users);
app.use("/api/password-reset", resetPasswordRoute);

// deployment configuration
// const __dirname = path.resolve()

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/build')))

//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     )
// }

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT} ...`)
);
