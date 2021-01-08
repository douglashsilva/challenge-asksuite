# Challenge AskSuite
Simple API for rate quote Robot.


### How to run

- Install Dependencies
```
    $ npm install
```
- Run Container
```
    $ docker-compose up -d
```

### How to test
```
    $ npm run test
```
![](https://i.imgur.com/gxobUqt.png)


### Postman Collection
 - https://www.getpostman.com/collections/0272af9003b3515ada0a

```json=
{
  "info": {
    "_postman_id": "e2dac10b-a508-45d2-89ad-6dae42e6e297",
    "name": "Challenge AskSuite",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
  },
  "item": [
    {
      "name": "http://127.0.0.1:3500/buscar",
      "id": "45e3a98b-9327-458e-a871-9910d1021e8b",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"checkin\": \"10/01/2021\",\r\n    \"checkout\": \"15/01/2021\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://127.0.0.1:3500/buscar"
      },
      "response": []
    }
  ]
}
```