module.exports = (sequelize, DataTypes) => {
    let alias = "Imageproducto";
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
        tablename: "imageproductos",
        timestamps: false
        
    };

    const Imageproducto = sequelize.define(alias, cols, config);



    Imageproducto.associate = function(models) {
        Imageproducto.hasOne(models.Producto, {
        foreignKey: 'id_imagen_id'
        })
    };
    

    return Imageproducto
}