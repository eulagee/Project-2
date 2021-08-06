const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    has_nuts: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,

    },
    has_meat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,

    },
    has_gluten: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,

    },
    description: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal',
});

module.exports = Meal;