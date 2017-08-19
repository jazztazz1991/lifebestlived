module.exports = function(sequelize,DataTypes){
	var Ingredients = sequelize.define("Ingredients",{
		item:{
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		},
		quantity: {
			type: DataTypes.FLOAT,
			validate:{
                len: [1]
            }
		},
        unit: {
            type: DataTypes.STRING,
            validate:{
                len: [1]
            }
        }
	});
    
    Ingredients.associate = function(models) {
    Ingredients.belongsTo(models.Recipes, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    
	return Ingredients;
};