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
            type: DataTypes.STRING(45)
        },
        categoria: {
            type: DataTypes.STRING(45)
        }
    };
    let config = {
        tablename: "productos",
        timestamps: false
        
    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto
}