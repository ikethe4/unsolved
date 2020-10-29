const db = require("../models");

const router = require("express").Router();

router.get("/:characters?", (req, res) => {
    const {characters} = req.params;
    if(characters){
        db.Character.findOne({
            where: {
                routeName: characters
            }
        }).then(character => {
            res.json(character);
        })
    } else {
        db.Character.findAll().then(characters => {
            res.json(characters);
        })
    }
    
})

router.post("/", (req, res) => {
    const character = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    const routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    db.Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    }).then(character => {
        res.json(character);
    }).catch(err => {
        res.status(500).send(err);
    })
})

module.exports = router;