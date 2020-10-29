const connection = require("../config/connection");
const Character = require("./character.model")
module.exports = {
    Character: new Character(connection)
}