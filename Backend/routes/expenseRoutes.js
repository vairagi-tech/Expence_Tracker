const express = require("express");
const {
  addExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/", addExpense);

router.post("/filter", getAllExpenses);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);

module.exports = router;
