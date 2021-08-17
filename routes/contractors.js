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
    const id = contractors.length + 1
    contractor.id = id;

    contractors.push(contractor)
    res.send('contractor is added');
});

router.put('/', function (req, res) {
    const newContractor = req.body;
    console.log(newContractor);
    contractors.map((con) => {
        if (con.id === newContractor.id) {
            con.fname = newContractor.fname;
            con.lname = newContractor.lname;
            con.phone = newContractor.phone;
            con.email = newContractor.email;

        }
    })
    res.send('contractor is updated');

});

router.delete('/', function (req, res) {
    const contractor = req.body;
    const id = contractor.id;
    contractors = contractors.filter((item) => item.id !== id)
    res.send('contractor is deleted');
});

module.exports = router;