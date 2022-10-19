# PROJECT-3-API
WEB VENTAS
## API Endpoints

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT                             | TOKEN | DESCRIPTION               | POST PARAMS                           | RETURNS
-------|--------------------------------------|-------|---------------------------|---------------------------------------|--------------------
POST   | /auth/signup                         | -     | Client Signup             | name, username, email, password       | token
POST   | /auth/login                          | -     | Client Login              | email, password                       | token
POST   | /auth/seller/signup                  | -     | Seller Signup             | name, username, email, password       | token
POST   | /auth/seller/login                   | -     | Seller Login              | email, password                       | token



### Client Endpoints

METHOD | ENDPOINT                      | TOKEN |  ROL   | DESCRIPTION             | PARAMS                                | RETURNS
-------|-------------------------------|-------|--------|-------------------------|---------------------------------------|---------------
GET    | /clients                      | YES   | ADMIN  | Get all clients         | query: search string                  | all clients
GET    | /clients/profile              | YES   |  ALL   | Get client profile      |                                       | client profile
GET    | /clients/whishlist////////    | YES   |  ALL   | Get whishlist           |                                       | favorite product
GET    | /clients/purchasedProducts    | YES   | CLIENT | Get purchase            |                                       | purchased product
GET    | /clients/:clientId            | YES   | ADMIN  | Get one client          | query: search string                  | one client
GET    | /clients/mesagges//////       | YES   | ADMIN  | Get notification        |                                       | notification client
PUT    | /clients/profile              | YES   |  ALL   | Modify profile          |                                       | Modify profile
PUT    | /clients/:clientId            | YES   | ADMIN  | Modify profile          |                                       | Modify profile
DELETE | /clients/:clientId            | YES   | ADMIN  | Delete one client       |                                       | Delete client


### Seller Endpoints

METHOD | ENDPOINT                      | TOKEN |  ROL   | DESCRIPTION             | PARAMS                                | RETURNS
-------|-------------------------------|-------|--------|-------------------------|---------------------------------------|--------------------
GET    | /sellers                      | YES   | ADMIN  | Get all sellers	      | query: search string                  | all sellers
GET    | /sellers/profile              | YES   | SELLER | Get a seller profile    |                                       | seller profile
PUT    | /sellers/profile              | YES   | SELLER | Modify profile seller   |                                       | Modify seller
PUT    | /sellers/:sellerId            | YES   | ADMIN  | Modify seller           |                                       | Modify profile
DELETE | /sellers/:sellerId            | YES   | ADMIN  | Delete seller           |                                       | Delete seller



### Product Endpoints 

METHOD | ENDPOINT                      | TOKEN |   ROL  | DESCRIPTION             | PARAMS                                | RETURNS
-------|-------------------------------|-------|--------|-------------------------|---------------------------------------|--------------------
GET    |  /products                    | YES   |  C/S   | Get a list of products  | query: search string                  | List of products
GET    |  /products/:productId         | YES   |  C/S   | Get one product         |                                       | one product
POST   |  /products                    | YES   | SELLER | Add product             |                                       | New product	
PUT    |  /products/:productId         | YES   | SELLER | Modify product          |                                       | Modify product
DELETE |  /products/:productId         | YES   | SELLER | Delete product          |                                       | Delete product



### Reports Endpoints 

METHOD | ENDPOINT                      | TOKEN |   ROL | DESCRIPTION              | PARAMS                                | RETURNS
-------|-------------------------------|-------|-------|--------------------------|---------------------------------------|--------------------
GET    |  /reports                     | YES   | C/S   | Get a list of reports    | query: search string                  | List of reports
GET    |  /reports/:reportId           | YES   | C/S   | Get one report           |                                       | one report
POST   |  /reports                     | YES   | CLIENT| Add report               |                                       | New report	
PUT    |  /reports/:reportId           | YES   | S/C   | Modify report reply      |                                       | Modify report



### Tickets Endpoints 

METHOD | ENDPOINT                     | TOKEN |   ROL | DESCRIPTION               | PARAMS                                | RETURNS
-------|------------------------------|-------|-------|---------------------------|---------------------------------------|--------------------
GET    |  /tickets                    | YES   | A/S   | Get a list of tickets     | query: search string                  | List of tickets
GET    |  /tickets/:ticketId          | YES   | C/S   | Get one ticket            |                                       | one ticket
POST   |  /tickets                    | YES   | CLIENT| Add ticket                |                                       | New ticket	



### Payment Details Endpoints

METHOD | ENDPOINT                     | TOKEN |   ROL | DESCRIPTION               | PARAMS                                | RETURNS
-------|------------------------------|-------|-------|---------------------------|---------------------------------------|--------------------
GET    |  /payments                   | YES   | C/S   | Get a list of payments    | query: search string                  | List of payments
GET    |  /payments/:paymentId        | YES   | C/S   | Get one payment           |                                       | one payment
POST   |  /payments                   | YES   | C/S   | Add payment detail        |                                       | New payment	
DELETE |  /payments                   | YES   | C/S   | Delete one payment detail |                                       | Delete payment	

