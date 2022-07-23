import { Sequelize } from "sequelize";

export const createDB = () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "src/db/db.sqlite",
  });

  return db;
};

export const checkDBConnection = async (db: Sequelize) => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
