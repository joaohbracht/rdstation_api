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
    email: {
      type: Sequelize.STRING
    },
    opportunity: {
      type: Sequelize.BOOLEAN
    },
    first_date: {
      type: Sequelize.DATEONLY
    },
    first_event_identifier: {
      type: Sequelize.STRING
    },
    first_channel: {
      type: Sequelize.STRING
    },
    first_source: {
      type: Sequelize.STRING
    },
    first_campaign: {
      type: Sequelize.STRING
    },
    last_date: {
      type: Sequelize.DATEONLY
    },
    last_event_identifier: {
      type: Sequelize.STRING
    }
  },
    {
      // Options
      tableName: 'rdstation_old',
      timestamps: false
    })


  return rdstation;
};