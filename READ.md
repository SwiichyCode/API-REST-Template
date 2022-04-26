// app.get("/", (req, res) => {
// res.send("Hello World, Express !");
// });

// //New end points with dynamic url
// app.get("/api/pokemons/:id", (req, res) => {
// const id = parseInt(req.params.id);
// const pokemon = pokemons.find((pokemon) => pokemon.id === id);
// const message = "Un pokémon a bien été trouvé.";
// res.json(success(message, pokemon));
// });

// // Methode GET / PUT / POST / DELETE

// // Retourne au format JSON la liste de notre tableaux d'object
// app.get("/api/pokemons", (req, res) => {
// const message = "Un pokémon a bien été trouvé.";
// res.json(success(message, pokemons));
// });

// // Ajout d'un élément dans la bdd
// app.post("/api/pokemons", (req, res) => {
// const id = getUniqueId(pokemons);
// const pokemonCreated = {
// ...req.body,
// ...{ id: id, created: new Date() },
// };
// pokemons.push(pokemonCreated);
// const message = `Le pokemon ${pokemonCreated.name} a bien été crée.`;
// res.json(success(message, pokemonCreated));
// });

// // Modification d'un élément de la bdd
// app.put("/api/pokemons/:id", (req, res) => {
// const id = parseInt(req.params.id);
// const pokemonUpdated = { ...req.body, id: id };
// pokemons = pokemons.map((pokemon) => {
// return pokemon.id === id ? pokemonUpdated : pokemon;
// });
// const message = `Le pokemon ${pokemonUpdated.name} a bien ete modifié`;
// res.json(success(message, pokemonUpdated));
// });

// // Supression d'un élément de la bdd
// app.delete("/api/pokemons/:id", (req, res) => {
// const id = parseInt(req.params.id);
// const pokemonDeleted = pokemons.find((pokemon) => pokemon.id === id);
// pokemons.filter((pokemon) => pokemon.id !== id);
// const message = `Le pokemon ${pokemonDeleted.name} a bien été supprimé`;
// res.json(success(message, pokemonDeleted));
// });
