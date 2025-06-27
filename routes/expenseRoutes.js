const express = require("express");
const {
  addExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

//add expence 
router.post("/", addExpense);

//get expence
router.post("/filter", getAllExpenses);

//update expence
router.put("/:id", updateExpense);

//delete expence
router.delete("/:id", deleteExpense);

module.exports = router;
