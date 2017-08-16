'use strict';

module.exports = function(sequelize, DataTypes) {
  var deck = sequelize.define('deck', {
    title: DataTypes.STRING,
    userId:{
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        deck.belongsTo(models.user);
     }
    }
  });
  return deck;
};
