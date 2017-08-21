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
    
    
	return Blogs;
};