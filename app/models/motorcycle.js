import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Motorcycle = sequelize.define('motorcycles', {
    brand: { type: DataTypes.STRING,  allowNull: false  },
    year: { type: DataTypes.INTEGER,  allowNull: true  },
    volume: { type: DataTypes.INTEGER,  allowNull: true  },
    mileage: { type: DataTypes.INTEGER,  allowNull: true  },
}, {
    timestamps: true,
    freezeTableName: true
})

export default Motorcycle
