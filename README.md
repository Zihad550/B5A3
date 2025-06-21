# welcome to B5A3
- A library management API.

## Follow the below steps to setup the project
1. clone the project.
2. run `pnpm install` to install all dependencies.
3. create a `.env` file and setup all the environment variables declared in `.env.example`
4. run `pnpm dev` to start the project in development.
5. and for production first build the project  by running `pnpm build` and then `pnpm start` to start the server.
6. if you face any issue setting up the project feel free to create an issue.

## Features
1. Can create,get,update and delte books.
2. Can borrow books.
3. Can see the statictics about borrowed books.

## API
### Book
- GET `/api/books` -> get all
- GET `/api/books/:bookId` -> get book using id
- POST `/api/books` -> create book
  - payload
  ```json
  {
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true
  }
  ```
- PUT `/api/books/:bookId` -> update book
  - payload
  ```json
  {
      "title": "The Theory of Everything",
      "author": "Stephen Hawking",
      "genre": "SCIENCE",
      "isbn": "9780553380163",
      "description": "An overview of cosmology and black holes.",
      "copies": 5,
      "available": true
    }
  ```
