const router = require('express').Router();
let Budget = require('../Models/budgets.model');

router.route('/').get((req,res)=>{
    Budget.find().then(budget => res.json(budget)).catch(err=>res.status(400));
})

router.route('/add').post((req,res)=>{

    const budget  = req.body.budget;
    const description  = req.body.description;
    const amount = req.body.amount;

    const addingBudget = new Budget({
        budget,
        description,
        amount
    });
    addingBudget.save().then(()=> res.json('new budget added')).catch(err=>res.status(400).json(budget+' Error '+ err));
})

module.exports = router;