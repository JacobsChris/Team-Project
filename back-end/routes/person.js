const express = require("express");
const router = express.Router();
const test = require("../middleware/service/personService.js");


router.use((req, res, next) => {
    res.send(test)
});

router.get("/");



module.exports = router;