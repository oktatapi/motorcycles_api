import db from '../../app/models/modrels.js';

async function up({ context: QueryInterface }) {
  if (db.Motorcycle) {
    await db.Motorcycle.bulkCreate([
      {
        "id": 1,
        "brand": "Yamaha",
        "year": 2008,
        "volume": 50,
        "mileage": 11000
      },
      {
        "id": 2,
        "brand": "Honda",
        "year": 2008,
        "volume": 108,
        "mileage": 11834
      },
      {
        "id": 3,
        "brand": "Aprilia",
        "year": 1999,
        "volume": 652,
        "mileage": 27761
      },
      {
        "id": 4,
        "brand": "Harley-Davidson",
        "year": 2008,
        "volume": 1584,
        "mileage": 70000
      },
      {
        "id": 5,
        "brand": "Kawasaki",
        "year": 2018,
        "volume": 948,
        "mileage": 4200
      }
    ]);
  } else {
    await QueryInterface.bulkInsert('motorcycles', [

    ]);
  }

}

async function down({ context: QueryInterface }) {
  await QueryInterface.bulkDelete('motorcycles');
}

export { up, down }
