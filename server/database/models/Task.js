function tasksData(sequelize,DataTypes){

    alias = "Tasks"

    cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: { 
            type: DataTypes.DATE 
        },
    }

    config = { camelCase: false, timestamps: false}

    const Tasks = sequelize.define(alias, cols,config)

    return Tasks

}

module.exports = tasksData
