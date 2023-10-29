module.exports = (sequelize, DataTypes) => {
  //This sequelize model represents products table in MySQL database. These columns will be generated automatically
  //ex:id, title, price, createdAt, updatedAt.
  //After initializing Sequelize, we don't need to write CRUD functions, Sequelize supports all of them:

  const Product = sequelize.define("products", {
    // Model attributes are defined here
    guid: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,

      get() {
        const rawValue = this.getDataValue("guid");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    quantity: {
      type: DataTypes.DOUBLE,
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
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

  return Product;
};
