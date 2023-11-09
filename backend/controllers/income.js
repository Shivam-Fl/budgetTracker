const IncomeSchema = require("../model/income");

exports.addIncome = async (req, res) => {
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
      const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
      });
  
      // Save the income document to the database
      await income.save();
  
      res.status(201).json({ message: "New income added", income });
    } catch (error) {
      console.error("Error while adding income:", error);
      res.status(500).json({ error: "Server error" });
    }
  };
  

exports.getIncomes = async (req, res) =>{
    try{
      const incomes = await IncomeSchema.find().sort({createdAt : -1})
      res.status(200).json(incomes)
    } catch(error) {
        res.status(500).json({message: 'Server Error'})
    }
}


exports.deleteIncome = async (req,res) =>{
    const {id} = req.params
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json('Income deleted')
        })
        .catch((error)=>{
            res.status(500).json('Server Error')
        })
}