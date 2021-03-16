const express = require("express");
const config = require("../../config/keys");
const router = express.Router();
const Country = require("../../models/Country");

// api/votes/rating

router.post("/rating", async (req, res) => {
    const userId = req.body.userId;
    const votes = req.body.votes;
    const countryName = req.body.country;
    const sight_name = req.body.sight_name;

    try {
        // Country.findOne({country_en: country}).then(country => {
        //     country.sights.map(sight => {
        //         if (sight.sight_name === sight_name) {
        //             sight.averageRating.push(votes);
        //             sight.ratedBy.push(userId);
        //         }

        //         return sight
        //     })

        //     country.save()
        // })

        // Country.findOneAndUpdate({
        //     country_en: country,
        //     sight: sight_name
        // }, {
        //     $push: {
                
        //     }
        // })

        // const data = Country.findOne({country_en: country}).then(getCountry => getCountry.sight.filter(sight => sight_name === sight.sight_name))

        // res.json(data)

    } catch (e) {
        res.status(500).json({message: 'Oops, something goes wrong, try again later'})
    }
})

module.exports = router;
