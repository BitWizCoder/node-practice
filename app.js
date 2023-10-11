const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
let cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 28,
    email: "alice.j@example.com",
    address: "456 Elm Street, Townsville, State",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 35,
    email: "bob.smith@example.com",
    address: "789 Oak Avenue, Cityville, State",
  },
  {
    id: 3,
    name: "Eva Martinez",
    age: 22,
    email: "eva.m@example.com",
    address: "321 Pine Road, Villageton, State",
  },
  {
    id: 4,
    name: "David Brown",
    age: 40,
    email: "david.b@example.com",
    address: "567 Maple Lane, Townsville, State",
  },
  {
    id: 5,
    name: "Sophia Wilson",
    age: 29,
    email: "sophia.w@example.com",
    address: "234 Cedar Street, Cityville, State",
  },
  {
    id: 6,
    name: "John Davis",
    age: 32,
    email: "john.d@example.com",
    address: "678 Birch Road, Villageton, State",
  },
  {
    id: 7,
    name: "Olivia Taylor",
    age: 27,
    email: "olivia.t@example.com",
    address: "543 Oak Avenue, Townsville, State",
  },
  {
    id: 8,
    name: "Michael Clark",
    age: 33,
    email: "michael.c@example.com",
    address: "876 Willow Lane, Cityville, State",
  },
  {
    id: 9,
    name: "Emma White",
    age: 31,
    email: "emma.w@example.com",
    address: "432 Birch Road, Villageton, State",
  },
  {
    id: 10,
    name: "William Turner",
    age: 45,
    email: "william.t@example.com",
    address: "345 Pine Road, Townsville, State",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
