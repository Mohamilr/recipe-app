import Recipe from '../models/model';


const recipeController = {
    getAllRecipe(req, res) {
       Recipe.find().then((recipe) => {
           res.status(200).json(recipe)
       }).catch((e) => {
          console.log(e)
          res.status(400).json({
              message: 'error in getting recipes'
          })
       })
    },
    getSingleRecipe(req, res) {
        Recipe.findOne({
            _id: req.params.id
        }).then((recipe) => {
            res.status(200).json(recipe)
        }).catch((e) => {
            console.log(e)
            res.status(400).json({
                message: 'error, did not get single recipe'
            })
        })
    },
    postARecipe(req, res) {
      const recipe = new Recipe ({
        title : req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        time : req.body.time,
        difficulty: req.body.difficulty
      });
      recipe.save()
      .then(() => {
          res.status(201).json({
              message: "recipe created sucessfully"
          })
      })
      .catch((e) => {
          console.log(e)
          res.status(400).json({
              message : 'error, could not add recipe'
          })
      })
    },
    modifyARecipe(req, res) {
        const recipe = new Recipe ({
            _id: req.params.id,
            title : req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            time : req.body.time,
            difficulty: req.body.difficulty
          });
        Recipe.updateOne({_id: req.params.id}, recipe).then((recipe) => {
            res.status(200).json(recipe)
        })
        .catch((e) => {
            console.log(e)
            res.status(400).json({
                message: 'error, could not modify recipe'
            })
        })
    },
    deleteARecipe(req, res) {
        Recipe.deleteOne({
            _id: req.params.id
        }).then(() => {
            res.status(200).json({
                message: 'recipe deleted sucessfully'
            })
        }).catch((e) => {
            console.log(e)
            res.status(400).json({
                message: 'error, did not delete sucessfully'
            })
        })
    }
}

export default recipeController;