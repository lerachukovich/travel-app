const express = require("express");
const config = require("../../config/keys");
const router = express.Router();
const Country = require("../../models/Country");

// api/votes/rating

router.post("/rating", async (req, res) => {
    const {userId, votes, country, sight_name} = req.body;

    try {
        // const updateCountry = await Country.findOne({country_en: country});

        // updateCountry.sights.map(sight => {
        //     if (sight.sight_name === sight_name) {
        //         sight.averageRating.push(votes);
        //         sight.ratedBy.push(userId);
        //     }
        //     return sight
        // })
        // console.log(updateCountry)
        // await updateCountry.save();
        // res.json(updateCountry)



        
        const sight = await Country.findOne({country_en: country}).then(data => data.sights);

        sight.map(item => {
            if (item.sight_name === sight_name) {
                item.ratedBy.push(userId);
                item.averageRating.push(votes);
            }
            return item;
        })
        const changeCountry = await Country.updateOne({country_en: country}, {$set: {sights: sight}});
        console.log(changeCountry)
        res.json(sight)









        
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
