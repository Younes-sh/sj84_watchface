const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/' , async (req , res) => {
    const item =  (await Item.find({})).reverse();
    res.json({
        data:item,
        message:'Ok'
    })
})


router.get('/:id' , async (req , res) => {
    const item = await Item.findById(req.params.id);
    if(!item) {
        res.status(404).json({data:null, message:'User was not found'})
    }
    res.json({
        data:item,
        message:'Ok'
    })
})

router.post('/' , async (req , res) => {
    let newItem = new Item({
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category,
        Embed:req.body.Embed,
        DirectLink:req.body.DirectLink
    })
    newItem = await newItem.save()

    res.json({
        data:newItem,
        message:'Ok'
    })
})

router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, {
            name:req.body.name,
            description:req.body.description,
            image:req.body.image,
            category:req.body.category,
            Embed:req.body.Embed,
            DirectLink:req.body.DirectLink
        }, { new: true });

        if (!item) {
            return res.status(404).json({ data: null, message: 'item was not found' });
        }

        return res.json({ data: item, message: 'item updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
});


router.delete('/:id' , async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id)
    if(!item) {
        res.status(400).json({data:null, message:'item was not found'})
    }
    res.json({
        data:item,
        message:'Ok'
    })
})









module.exports = router;