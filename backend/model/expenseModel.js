const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },
    amount :{
        type : Number,
        required : true,
        trim : true,
        maxLength : 20
    },
    type:{
      type : String,
      default : "expense"
    },
    date :{
        type : Date,
        required : true,
        trim : true,
    },
    description :{
        type : String,
        required : false,
        trim : true,
        maxLength : 100
    },
    category :{
        type : String,
        required : true,
        trim : true,
    },


}, {timestamps : true} )

module.exports = mongoose.model("Expense", ExpenseSchema)