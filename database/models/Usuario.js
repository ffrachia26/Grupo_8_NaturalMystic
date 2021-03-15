module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notnull: true
        },
        nombre: {
            type: DataTypes.STRING(45)
        },
        apellido: {
            type: DataTypes.STRING(45)
        },
        email: {
            type: DataTypes.STRING(45)
        },
        password: {
            type: DataTypes.STRING(65)
        }

    };
    let config = {
        tablename: "usuarios",
        timestamps: true,
        paranoid: true,
        underscored: true
    
    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario
}