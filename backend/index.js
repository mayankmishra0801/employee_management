const express = require("express");
const app = express();

const dotenv = require("dotenv");

const mongoose = require("mongoose");
const routes = require('./routes/employeeRoute');


const cors = require("cors");

dotenv.config();

const connectDB = require('./config/empDB')

const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)

app.use(express.json())
app.use(cors())



app.listen(4008,()=> console.log("Server connected on port 4008!"))
app.use('/employee',routes)
