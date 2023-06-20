const express = require("express");
const router = express.Router();
const {
    INSERT_HOMEWORK,
    GET_ALL_HOMEWORKS,
    DELETE_HOMEWORK,
    GET_HOMEWORK
} = require("../controllers/homework");

router.post("/homework",INSERT_HOMEWORK);
router.get("/homeworks", GET_ALL_HOMEWORKS);
router.get("/homework/:id", GET_HOMEWORK);      
router.delete("/delete/:id", DELETE_HOMEWORK);

module.exports = router;