module.exports = (Sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notnull: true
        },
        nombre: {
            type: DataTypes.VARCHAR(45)
        },
        apellido: {
            type: DataTypes.VARCHAR(45)
        },
        email: {
            type: DataTypes.VARCHAR(45)
        },
        password: {
            type: DataTypes.VARCHAR(65)
        }

    };
    let config = {
        timestamps: true
    };

    const Usuario = sequelize.define(alias, cols, config);
}