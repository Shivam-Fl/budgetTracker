const ExpenseSchema = require("../model/expenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
  
    try {
      // Check if required fields are missing
      if (!title || !amount || !category || !date) {
        return res.status(400).json({ error: "Please fill all the required fields" });
      }
  
      // Check if the amount is a valid positive number
      if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: "Amount should be a positive number" });
      }
  
      // Create a new income document
      const expense = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
      });
  
      // Save the income document to the database
      await expense.save();
  
      res.status(201).json({ message: "New expense added", income });
    } catch (error) {
      console.error("Error while adding expense:", error);
      res.status(500).json({ error: "Server error" });
    }
  };
  

exports.getExpense = async (req, res) =>{
    try{
      const expenses = await ExpenseSchema.find().sort({createdAt : -1})
      res.status(200).json(expense)
    } catch(error) {
        res.status(500).json({message: 'Server Error'})
    }
}


exports.deleteExpense = async (req,res) =>{
    const {id} = req.params
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json('Income deleted')
        })
        .catch((error)=>{
            res.status(500).json('Server Error')
        })
}