const { Pokemon } = require("../db/sequelize");
const { Op } = require("sequelize");
const auth = require("../auth/auth");
// https://www.youtube.com/watch?v=NRxzvpdduvQ&t=19291s

const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);

module.exports = (app) => {
  app.get("/api/pokemons", auth, (req, res) => {
    // Permet de récupérer des données par ?=name
    if (req.query.name) {
      const name = req.query.name;
      const limit = parseInt(req.query.limit) || 5;

      if (name.length < 2) {
        const message = `Le terme de recherche doit contenir au minimun 2 caractères.`;
        return res.status(400).json({ message });
      }

      return Pokemon.findAndCountAll({
        where: {
          // "name" est la propriété du modèle pokémon
          name: {
            [Op.or]: {
              // Opérateur like : https://www.youtube.com/watch?v=NRxzvpdduvQ&t=19291s
              [Op.like]: `%${name}%`, // "name" est le critère de recherche
              [Op.startsWith]: capitalize(name),
            },
          },
        },
        order: ["name"],
        limit: limit,
      }).then(({ count, rows }) => {
        const message = `Il y a ${count} pokémons qui correspondent au terme de recherche ${name}`;
        return res.json({ message, data: rows });
      });
    } else {
      Pokemon.findAll({ order: ["name"] })
        .then((pokemons) => {
          const message = "La liste des pokémons a bien été récupérée.";
          res.json({ message, data: pokemons });
        })
        .catch((error) => {
          const message = `La liste des pokemons n'a pas pu être récupérée. Réessayez dans quelquels instants`;
          res.status(500).json({ message, data: error });
        });
    }
  });
};
