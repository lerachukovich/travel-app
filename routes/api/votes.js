const express = require("express");
const config = require("../../config/keys");
const router = express.Router();
const Country = require("../../models/Country");

// api/votes/rating

router.post("/rating", async (req, res) => {
    const {userId, userName, vote, country, sight_name} = req.body;

    try {
        const sight = await Country.findOne({country_en: country}).then(data => data.sights);
        sight.map(item => {
            if (item.sight_name === sight_name) {
                // Check if user done vote
                if (item.votes.some(vote => vote.userId === userId)) return item;

                item.votes.push({
                    userId,
                    userName,
                    vote
                })
                res.json(item)
            }
            return item;
        })
        const changeCountry = await Country.updateOne({country_en: country}, {$set: {sights: sight}});

        // res.json(sight)
    } catch (e) {
        res.status(500).json({message: 'Oops, something goes wrong, try again later'})
    }
})

module.exports = router;
