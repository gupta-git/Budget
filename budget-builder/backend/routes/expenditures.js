const router = require('express').Router();
let Expenditure = require('../Models/expenditures.model');

router.route('/').get((req,res)=>{
    Expenditure.find().then(expenditures => res.json(expenditures)).catch(err=>res.status(400));
})

router.route('/add').post((req,res)=>{

    const expenditure  = req.body.expenditure;
    const description  = req.body.description;
    const amount = req.body.amount;

    const addingeExpenditure = new Expenditure({
        expenditure,
        description,
        amount
    });
    addingeExpenditure.save().then(()=> res.json('new budget added')).catch(err=>res.status(400).json(budget+' Error '+ err));
})

module.exports = router;