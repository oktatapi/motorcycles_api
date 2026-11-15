import User from './user.js';
import sequelize from '../database/database.js'
import Motorcycle from './motorcycle.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Motorcycle = Motorcycle;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
