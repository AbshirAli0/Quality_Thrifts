//dependencies
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config(); 
const router = express();
const port = process.env.PORT || 6000;
require('./routes/router')(router)

//middleware

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
router.use(cors());
router.use(bodyParser.json());
router.use(express.static(path.join(__dirname, '../frontend/build')));

//react build
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


//Listener
router.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
