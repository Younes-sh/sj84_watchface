const express = require('express');
const router = express.Router()
const Gifwatch = require('../models/gifwatch');


router.get('/' , async (req , res) => {
    const gif = await Gifwatch.find({})
    res.json({
        data:gif,
        message:'Ok'
    })
})

router.get('/:id' , async (req , res) => {
    const gif = await Gifwatch.findById(req.params.id)
    if(!gif) {
        res.status(404).json({data:null,message:'gif was not found'})
    }
    res.json({
        data:gif,
        message:'Ok'
    })
})


router.post('/' , async (req , res) => {
    let newGif = new Gifwatch({
        name:req.body.name,
        gif:req.body.gif
    })

    newGif = await newGif.save()

    res.json({
        data:newGif,
        message:'Ok'
    })
})


module.exports = router;