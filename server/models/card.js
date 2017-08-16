'use strict';
module.exports = function(sequelize, DataTypes) {
  var card = sequelize.define('card', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return card;
};