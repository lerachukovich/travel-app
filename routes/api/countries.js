const express = require("express");
const config = require("../../config/keys");
const router = express.Router();
const Country = require("../../models/Country");

// api/countries/countrylist

router.get('/countrylist', async (req, res) => {
    try {
        const countries = await Country.find();
        res.json(countries);
    } catch (e) {
        res.status(500).json({message: 'Oops, something goes wrong, try again later'});
    }
})

module.exports = router

