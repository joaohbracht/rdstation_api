module.exports = (sequelize, Sequelize) => {
  const rdstation = sequelize.define("rdstation", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: Sequelize.STRING
    },
    event_identifier: {
      type: Sequelize.STRING
    },
    event_type: {
      type: Sequelize.STRING
    },
    entity_type: {
      type: Sequelize.STRING
    },
    origin: {
      type: Sequelize.STRING
    }
  });

  return rdstation;
};