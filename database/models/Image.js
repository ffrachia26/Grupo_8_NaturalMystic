module.exports = (sequelize, DataTypes) => {
    let alias = "Image";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        path: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tablename: "images",
        timestamps: false
        
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = function(models) {
        Image.hasOne(models.Usuario, {
        foreignKey: 'id_imagen'
        })
    };    

    return Image
}

