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
    date: {
      type: Sequelize.DATEONLY
    },
    event_identifier: {
      type: Sequelize.STRING
    },
    lifecycle_stage: {
      type: Sequelize.STRING
    },
    opportunity: {
      type: Sequelize.BOOLEAN
    },
    channel: {
      type: Sequelize.STRING
    },
    source: {
      type: Sequelize.STRING
    }
  },
    {
      // Options
      tableName: 'rdstation',
      timestamps: false
    })


  return rdstation;
};