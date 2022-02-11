const Post = require('./Post'); 
const User = require('./User');


User.hasMany(Post, {
    foreignkey:'user_id'
});

Post.belongsTo(User, {
    foreignKey:'user_id'
});

module.exports = { User, Post };
