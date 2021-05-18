const User = require('./User');
const Post = require('./BlogPost');
const Comment = require('./Comment');

BlogPost.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blog_postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  BlogPost,
};