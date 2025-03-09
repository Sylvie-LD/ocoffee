import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class Coffee extends Model {}

Coffee.init(
  {
    coffee_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    reference: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price_per_kilo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    origin_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "origin",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "feature",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "coffee",
  }
);

// TESTER NOTRE MODÈLE
// Instances sequelize du modele coffee avec metadonnées
const coffeesData = await Coffee.findAll();

// objets sous format simplifié, uniquement les données
const coffees = coffeesData.map((coffee) => coffee.get({ plain: true }));
// console.log(coffees);
