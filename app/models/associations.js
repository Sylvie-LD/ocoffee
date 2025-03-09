import { Coffee } from "./coffee.js";
import { Feature } from "./feature.js";

// Définition des relations

// Un café appartient à une seule caractéristique
Coffee.belongsTo(Feature, {
  as: "feature",
  foreignKey: "feature_id",
});

// Une caractéristique peut avoir plusieurs cafés
Feature.hasMany(Coffee, {
  as: "coffees",
  foreignKey: "feature_id",
});

// Export des modèles associés
export { Coffee, Feature };

// Partie test
// const coffeeWithFeature = await Coffee.findOne({
//   include: { model: Feature },
// });

// console.log(coffeeWithFeature.toJSON());

// const featureWithCoffees = await Feature.findOne({
//   where: { id: 1 }, // Remplace 1 par l'ID de la caractéristique que tu cherches
//   include: {
//     model: Coffee,
//   },
// });
// console.log(featureWithCoffees.toJSON());
