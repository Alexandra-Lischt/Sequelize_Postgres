const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs' // força o banco nomear a tabela como techs e não teches
        })
    }
    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users'}) // uma tech pode pertencer a muitos usuario que será registrado no campo user_techs
    }
}

module.exports = Tech;