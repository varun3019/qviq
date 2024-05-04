const express = require("express");
const mongoose = require("mongoose");
const cors =  require("cors");
const EmployeeModal = require('./models/Employee')

const app  = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/qviz", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/",(req,res)=>
{ 
    res.json("Hello")
})

app.post('/register', async (req, res) => {
  try {
    const employee = await EmployeeModal.create(req.body);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server connected");
});
