# my-server App (index.js)

## Features

- Get all produits
- Get a specific produit by ID
- Add a new produit
- Update the status of a produit
- Delete a produit by id

## Tech Stack

- Node.js
- index.js

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Amneharoun/my-server.git
    cd my server
    ````

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node index.js
    ```

4. Server will run on:

    ```bash
    http://localhost:3000
    ```

---

## API Reference (Use with Postman)

on a teste avec Api

---

### Get all todos

- **Method**: `GET`
- GET http://localhost:3000/produits
tout les produits
-GET http://localhost:3000/produits/6883847228a238e075f923be
produit mais avec id
-POST http://localhost:3000/produits

**Sample Response:**

```json
[
 {
      "_id": "68872837cfea631a03605c82",
      "produitName": "pizza",
      "price": 12,
      "stockStatus": "en stock",
      "__v": 0
    },
    {
      "_id": "68872b8270c0b68c0813eacc",
      "produitName": "pizza",
      "price": 12,
      "stockStatus": "en stock",
      "__v": 0
    },
]
```

---

### Create a new produit

- **Method**: `POST`
- **URL**: `POST http://localhost:3000/produits`
- **Body**: `raw` → `JSON`

```json
 {
    "produitName": "pizza12",
    "price": 120,
    "stockStatus": "en stock"
}
```

---

### Add a new produit

- **Method**: `Patch`
- **URL**: `PATCH http://localhost:3000/produits/688738b5f384016748f27f97`
- **Body**: `raw` → `JSON`

```json
{
    "produitName": "tomate",
    "price": 12000,
    "stockStatus": "petit stock"
}
```

---
**Sample Response:**

```json
{
  "message": "produit to updated"
}
```

---
### Delete a  produit by id

- **Method**: `delete`
- **URL**: `DELETE http://localhost:3000/produits/688731c2f384016748f27f6d`

