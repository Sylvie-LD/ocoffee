import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Feature extends Model {}

Feature.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    feature: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "feature",
  }
);

// TESTER NOTRE MODÈLE
// Instances sequelize du modele coffee avec metadonnées
// const featuresData = await Feature.findAll();

// objets sous format simplifié, uniquement les données
// const features = featuresData.map((feature) => feature.get({ plain: true }));
// console.log(features);
