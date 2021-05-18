const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class BlogPost extends Model {}

BlogPost.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = BlogPost;