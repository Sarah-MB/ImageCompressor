'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('Image', {
    image: DataTypes.STRING
  });

}