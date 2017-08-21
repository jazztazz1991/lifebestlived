module.exports = function(sequelize,DataTypes){
	var Recipes = sequelize.define("Recipes",{
		title:{
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		},
		description: {
			type: DataTypes.STRING,
			validate:{
                len: [1]
            }
		},
        author: {
            type: DataTypes.STRING,
            validate:{
                len: [1]
            }
        }
	});
    Recipes.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Recipes.hasMany(models.Ingredients, {
      onDelete: "cascade"
    });
  };
    
	return Recipes;
};