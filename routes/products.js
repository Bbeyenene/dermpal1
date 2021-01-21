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
router.get("/api/product/all", async (req, res) => {
  try {
    const getProduct = await Product.find({});
    console.log("------------------whats up");
    console.log(getProduct);
    console.log("--------------------");
    res.json(getProduct);
  } catch (erf) {
    res.send({ errHappend: err });
  }
});
router.delete("/api/product/del/id=:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.remove({ _id: req.params.productId });
    res.json(deletedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
