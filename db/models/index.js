const { User, userSchema } = require('./userModel');

function setupModels(sequelize){
    User.init(userSchema, User.config(sequelize));
}

module.exports = setupModels;