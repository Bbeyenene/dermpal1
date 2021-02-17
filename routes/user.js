const express = require("express");
const router = express.Router();
const User = require("../db-model/user");
const Product = require("../db-model/product");
const StoreInfo = require("../db-model/storeInfo");
const Rating = require("../db-model/rating");
const passport = require("../passport");

//User Sign Up//
router.post("/api/user/", (req, res) => {
  console.log("user signup");
  const { username, password } = req.body;
  // ADDING VALIDATION//
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
    } else {
      const newUser = new User({
        username: username,
        password: password,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});
// User Login//
router.post(
  "/api/user/login",
  function (req, res, next) {
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  }
);

//member info
router.get("/api/user/member", async (req, res, next) => {
  if (req.user._id) {
    const result = await User.find(req.user._id).populate({
      path: "products",
      model: "product",
      populate: { path: "store", model: "storeInfo" },
      populate: { path: "rate", model: "rating" },
    });
    // .populate("storeInfo");
    console.log("===>", result);
    const userInfo = [
      {
        id: result[0]._id,
        username: result[0].username,
        products: result[0].products,
      },
    ];
    // console.log(UserInfo);
    res.json(userInfo);
  } else {
    res.json({ user: null });
  }
});

//product info posting
router.post("/api/user/member", async (req, res, next) => {
  const userId = req.user._id;
  // 1. Create a new car
  const newProduct = new Product(req.body);
  console.log(newProduct);
  // 2. Get the userId that car to append to
  const user = await await User.findById(userId).populate("product");
  // 3. Assign the user as the newCar owner
  newProduct.owner = user;
  // 4. Save car after waitting for owner assignment
  await newProduct.save();
  // 5. Push the newCar to the cars array in the User Schema.
  user.products.push(newProduct);
  // 6. Wait untill car is pushed to the user and save the change.
  await user.save();
  // 7. If every thing goes well 'OK' send 200 and the new car.
  res.status(200).json(newProduct);
});

//post store information
router.post("/api/user/member/:id/store", async (req, res) => {
  const newStore = new StoreInfo(req.body);
  const product = await Product.findById(req.params.id).populate("storeInfo");
  newStore.owner = product;
  await newStore.save();
  product.store.push(newStore);
  await product.save();
  res.status(200).json("newStore");
});

//product rating
router.post("/api/user/member/:id/rate", async (req, res) => {
  const newRating = new Rating(req.body);
  const product = await Product.findById(req.params.id).populate("rating");
  newRating.owner = product;
  await newRating.save();
  product.rate.push(newRating);
  await product.save();
  res.status(200).json("success");
});
//delete product
router.delete("/api/user/member/:id", (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id }).then((deleted) => {
    res.send(deleted);
  });
});

//User Logout//
router.post("/api/user/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
