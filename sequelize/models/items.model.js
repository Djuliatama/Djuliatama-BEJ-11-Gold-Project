const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('items', {
        id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        // price: {
		// 	allowNull: false,
		// 	type: DataTypes.STRING,
		// 	validate: {
		// 		isIn: [['string', 'wind', 'percussion']]
		// 	}
		// },
		price: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
		// We also want it to have a 'orchestraId' field, but we don't have to define it here.
		// It will be defined automatically when Sequelize applies the associations.
	});
};

