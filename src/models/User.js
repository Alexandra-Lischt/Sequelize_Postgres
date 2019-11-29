// Como nossa aplicação vai se comunicar com nossa base de dados

const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'}) // um usuário tem muitos endereços coluna do address user_id
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'}) // um user pode possuir  muitos techs
    }
}

module.exports = User;