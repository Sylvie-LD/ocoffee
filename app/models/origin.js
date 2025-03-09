import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Origin extends Model {}

Origin.init(
  {
    country_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "origin",
  }
);

// TESTER NOTRE MODÈLE
// Instances sequelize du modele coffee avec metadonnées
// const originsData = await Origin.findAll();

// objets sous format simplifié, uniquement les données
// const origins = originsData.map((origin) => origin.get({ plain: true }));
// console.log(origins);
