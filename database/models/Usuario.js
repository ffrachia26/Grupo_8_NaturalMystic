module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
            
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        id_imagen: {
            type: DataTypes.INTEGER
        },
        avatar: {
            type:DataTypes.STRING
        }
    };
    let config = {
        tablename: "usuarios",
        timestamps: false,
        
    
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Image, {
            foreignKey: 'id_imagen'
        })
    }

    return Usuario
}