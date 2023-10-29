module.exports = (sequelize, DataTypes) => {
  //This sequelize model represents Company table in MySQL database. These columns will be generated automatically
  //ex:id, title, price, createdAt, updatedAt.
  //After initializing Sequelize, we don't need to write CRUD functions, Sequelize supports all of them:

  const Company = sequelize.define("company", {
    // Model attributes are defined here
    guid: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    cname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Company;
};
