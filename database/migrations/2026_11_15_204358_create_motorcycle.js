import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('motorcycles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    brand: { type: DataTypes.STRING,  allowNull: false  },
    year: { type: DataTypes.INTEGER,  allowNull: true  },
    volume: { type: DataTypes.INTEGER,  allowNull: true  },
    mileage: { type: DataTypes.INTEGER,  allowNull: true  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('motorcycles');
}

export { up, down }
