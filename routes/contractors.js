const express = require('express');
const router = express.Router();

let contractors = [
    {
        "id": 1,
        "fname": "Rocky",
        "lname": "Ballard",
        "phone": "+61 404 871 952",
        "email": "jdon.saif.584@bulegoblog.com"
    }
];


router.get('/', function (req, res) {
    
    res.json(contractors);
});

router.post('/', function (req, res) {
    const contractor = req.body;
    const id = contractors.length+1
    contractor.id = id;
    
    contractors.push(contractor)
    console.log(contractors)
});

router.put('/', function (req, res) {
    
});

router.delete('/', function (req, res) {
    const contractor = req.body;
    const id = contractor.id;
    contractors = contractors.filter((item) => item.id !== id)
});

module.exports = router;