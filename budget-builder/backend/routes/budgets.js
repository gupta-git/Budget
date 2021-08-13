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

router.route('/:id').get((req, res) => {
    Budget.findById(req.params.id)
      .then(budget => res.json(budget)) 
      .catch(err => res.status(400).json('Error: ' + err));
    });
  
router.route('/:id').delete((req, res) => {
    Budget.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/update/:id').post((req, res) => {
    Budget.findById(req.params.id)
        .then(updatingBudget => {
            updatingBudget.budget = req.body.budget;
            updatingBudget.description = req.body.description;
            updatingBudget.amount = req.body.amount

            updatingBudget.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });
  

module.exports = router;