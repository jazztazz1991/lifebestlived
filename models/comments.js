module.exports = function(sequelize,DataTypes){
	var Comments = sequelize.define("Comments",{
		user:{
			type: DataTypes.STRING,
            allowNull: false,
			validate: {
				len: [1]
			}
		},
		body: {
			type: DataTypes.STRING,
            allowNull: false,
			validate:{
                len: [1]
            }
		},
        
	});
    
    Comments.associate = function(models) {
    Comments.belongsTo(models.Blogs, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    
	return Comments;
};