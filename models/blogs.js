module.exports = function(sequelize,DataTypes){
	var Blogs = sequelize.define("Blogs",{
		title:{
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		},
		text: {
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
    Blogs.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Blogs.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };
    
	return Blogs;
};