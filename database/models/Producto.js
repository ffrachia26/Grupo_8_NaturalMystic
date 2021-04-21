module.exports = (sequelize, DataTypes) => {
    let alias = "Producto";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(45)
        },
        marca: {
            type: DataTypes.STRING(45)
        },
        descripcion: {
            type: DataTypes.STRING(100)
        },
        categoria: {
            type: DataTypes.STRING(45)
        },
        id_imagen_id: {
            type: DataTypes.INTEGER
        },
        avatar: DataTypes.STRING
    };
    let config = {
        tablename: "productos",
        timestamps: false
        
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Imageproducto, {
            foreignKey: 'id_imagen_id'
        })
    }

    return Producto
}