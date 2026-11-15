# Endpoints

* /api/motorcycles

## The motorcycles endpoints

| Endpoint | Method | Auth | Description |
| - | - | - | - |
| /motorcycles | GET | No | Get motorcycles |
| /motorcycles | POST | No | Create new motorcycle |
| /motorcycles/:id | GET | No | Get a motorcycle |
| /motorcycles/:id | PUT | No | Update a motorcycle |
| /motorcycles/:id | DELETE | No | Delete a motorcycle |

### Get motorcycles

* Endpoint: /api/motorcycles

### Create motorcycle

* Method: POST
* Endpoint: /api/motorcycles

Example motorcycle:

```json
{
    "id": 1,
    "brand": "Yamaha",
    "year": 2008,
    "volume": 50,
    "mileage": 11000
}
```

### Get one motorcycle

* Method: GET

* Endpoint: /api/motorcycles/:id

### Update motorcycle

* Method: PUT

* Endpoint: /api/motorcycles/:id

Example motorcycle:

```json
{
    "id": 1,
    "brand": "Yamaha",
    "year": 2008,
    "volume": 50,
    "mileage": 11000
}
```

### Delete motorcycle

Method: DELETE

* Endpoint: /api/motorcycles/:id
