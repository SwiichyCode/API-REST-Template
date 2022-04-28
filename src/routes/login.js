const { User } = require("../db/sequelize");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.post("/api/login", (req, res) => {
    User.findOne({ where: { username: req.body.username } }).then((user) => {
      if (!user) {
        const message = `L'utilisateur demandé n'existe pas`;
        return res.status(404).json({ message });
      }

      bcrypt
        // Methode qui compare le mot de passe non crypté avec le mdp crypté en BDD
        .compare(req.body.password, user.password)
        .then((isPasswordValid) => {
          if (isPasswordValid) {
            if (!isPasswordValid) {
              const message = `Le mot de passe est incorrect`;
              return res.status(401).json({ message });
            }

            const message = `L'utilisateur a été connecté avec succès`;
            return res.json({ message, data: user });
          }
        })
        .catch((error) => {
          const message = `L'utilisateur n'a pas pu être connecté. Réessayez dans quelques instants.`;
          return res.json({ message, data: error });
        });
    });
  });
};
