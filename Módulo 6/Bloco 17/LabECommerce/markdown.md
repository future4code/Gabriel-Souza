<h1 align="center">LabeEcommerce</h1>

## Todos os exercicios feitos inclusive os desafios.

<br />

## Documentação API básica

```
### 
# GET http://localhost:3003/users
GET http://localhost:3003/users?name=gabriel silva 2


###
POST http://localhost:3003/users
Content-Type: application/json

{
    "name": "Gabriel Silva 2",
    "email": "gabriel2@gmail.com",
    "password": "ywduopd73d39jjg467"
}

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////

###
GET http://localhost:3003/products
# GET http://localhost:3003/products?search=Abacaxi
# GET http://localhost:3003/products?order=DESC

###
POST http://localhost:3003/products
Content-Type: application/json

{
    "name": "Coca Cola",
    "price": 8.5,
    "imageUrl": "https://media.istockphoto.com/photos/abstract-blue-background-picture-id840173468?k=6&m=840173468&s=612x612&w=0&h=342zz85bAB6ezjuPMPAfoQnqD7vwEhBPwWG87fSoDvM="
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

###
POST http://localhost:3003/purchases
Content-Type: application/json

{
    "quantity": 2,
    "idUser": "0a4147ad-30dd-4547-9e35-94e655d02f13",
    "idProduct": "be5d79f8-427d-4eea-aa1b-08345520be44"
}
```