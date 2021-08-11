const router = require('express').Router();
let Budget = require('../models/budget.model');

router.route('/').get((req,res)=>{
    Budget.find().then(budget => res.json(budget)).catch(err=>res.status(400));
})

router.route('/add').post((req,res)=>{

    const budget  = req.budget;
    const description  = req.description;
    const amount = req.amount;

    const addingBudget = new Budget({
        budget,
        description,
        amount
    });
    addingBudget.save().then(()=> res.json('new budget added')).catch(err=>res.status(400).json('Error '+ err));
})

module.exports = router;