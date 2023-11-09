const {addIncome, deleteIncome, getIncomes} = require('../controllers/income')
const router = require('express').Router()

router.post('/addIncome', addIncome)
    .get('/getIncome', getIncomes)
    .delete('/deleteIncome/:id', deleteIncome)
    .post('/addExpense', addExpense)
    .get('/getExpense', getExpense)
    .delete('/deleteExpense/:id', deleteExpense)


module.exports = router