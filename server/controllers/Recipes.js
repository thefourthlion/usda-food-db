const Recipes = require("../models/Recipes");
exports.createRecipes = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    let newRecipes = new Recipes({
      name: req.body.name,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      amount: req.body.amount,
      cost: req.body.cost,
      servingCost: req.body.servingCost,
      image: req.body.image,
      timestamp: req.body.timestamp,
    });
    await newRecipes.save();
    res.send(newRecipes);
  } catch (err) {
    console.log(err);
  }
};
exports.readRecipes = async (req, res) => {
  try {
    Recipes.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    })
      .sort()
      .skip(page * limit)
      .limit(limit);
  } catch (err) {
    console.log(err);
  }
};
exports.readRecipesFromID = async (req, res) => {
  try {
    await Recipes.findById({ ndbNumber: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateRecipes = async (req, res) => {
  try {
    await Recipes.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        instructions: req.body.instructions,
        ingredients: req.body.ingredients,
        amount: req.body.amount,
        cost: req.body.cost,
        servingCost: req.body.servingCost,
        image: req.body.image,
        timestamp: req.body.timestamp,
      },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.deleteRecipes = async (req, res) => {
  try {
    if ((await Recipes.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Recipes.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
