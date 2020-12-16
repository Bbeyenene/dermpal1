const router = require("express").Router();
let Product = require("../database/models/product.model");

router.post("/api/product/", (req, res) => {
  console.log(req.body);
  Product.create({
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
  })
    .then((dbproduct) => {
      res.json(dbproduct);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.get("/api/product/
