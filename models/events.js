module.exports = function(sequelize,DataTypes){
	var Events = sequelize.define("Events",{
		year:{
			type: DataTypes.INTEGER,
			validate: {
				len: [4,4]
			}
		},
        month:{
			type: DataTypes.INTEGER,
			validate: {
				len: [1,2]
			}
		},
        day:{
			type: DataTypes.INTEGER,
			validate: {
				len: [1,2]
			}
		},
		title: {
			type: DataTypes.STRING,
			validate:{
                len: [1]
            }
		},
        link: {
			type: DataTypes.STRING,
			validate:{
                len: [1]
            }
		}
	});
   
    
	return Events;
};