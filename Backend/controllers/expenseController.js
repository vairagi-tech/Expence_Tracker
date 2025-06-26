const expenseModel = require("../models/expenseModel");
const moment = require("moment");

//Add 
const addExpense = async (req, res) => {
  try {
    const newExpense = new expenseModel(req.body);
    await newExpense.save();
    res.status(201).send("Expense added successfully.");
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ error: "Error while adding expense." });
  }
};

//Get 
const getAllExpenses = async (req, res) => {
  try {
    const { frequency, selectedDate, type, userid } = req.body;

    
    const dateFilter =
      frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "days").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          };

    const typeFilter = type !== "all" ? { type } : {};

    const expenses = await expenseModel.find({
      ...dateFilter,
      userid,
      ...typeFilter,
    });

    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error getting expenses:", error);
    res.status(500).json({ error: "Failed to retrieve expenses." });
  }
};

// Update 
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body.payload;

    await expenseModel.findByIdAndUpdate(id, updatedData);
    res.status(200).send("Expense updated successfully.");
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ error: "Failed to update expense." });
  }
};

/// Delete 
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await expenseModel.findByIdAndDelete(id);
    res.status(200).send("Expense deleted successfully.");
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({ error: "Failed to delete expense." });
  }
};

module.exports = {
  addExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
};
