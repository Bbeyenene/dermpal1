const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const user = require("./routes/user");
const products = require("./routes/apiRoutes");
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// CORS
app.use(cors());

// DATABASE CONNECTION
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log("Connected to Mongo");

      // Sessions
      app.use(
        session({
          secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
          store: new MongoStore({ mongooseConnection: mongoose.connection }),
          resave: false, //required
          saveUninitialized: false, //required
        })
      );

      // Passport
      app.use(passport.initialize());
      app.use(passport.session()); // calls the deserializeUser

      // CONNECTION TO API ROUTES
      app.use(user);
      app.use(products)

      if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "client/build")));
        //
        app.get("*", (req, res) => {
          res.sendFile(path.join((__dirname = "client/build/index.html")));
        });
      }

      // build mode
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/public/index.html"));
      });

      // Starting Server
      app.listen(PORT, () => {
        console.log(`App listening on PORT: ${PORT}`);
      });
    },
    (err) => {
      /** handle initial connection error */
      console.log("error connecting to Mongo: ");
      console.log(err);
    }
  )
  .catch((err) => console.log({ err }));
