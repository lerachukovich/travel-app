const express = require("express");
const config = require("../../config/keys");
const router = express.Router();
const Country = require("../../models/Country");

// api/votes/rating

router.post("/rating", (req, res) => {
    const userId = req.body.userId;
    const votes = req.body.votes;
    const country = req.body.country;
    const sight_name = req.body.sight_name;

    try {
        Country.findOne(country)
            .then(data => console.log(data))

            
    } catch (e) {
        res.status(500).json({message: 'Oops, something goes wrong, try again later'})
    }
})
