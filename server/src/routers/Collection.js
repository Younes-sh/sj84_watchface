const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');

router.get('/' , async (req , res) => {
    const collection =  (await Collection.find({})).reverse();
    res.json({
        data:collection,
        message:'Ok'
    })
})

router.get('/:id' , async ( req , res) => {
    const collection = await Collection.findById(req.params.id)
    if(!collection) {
        res.status(404).json({data:null,message:'collection was not found'});
    }

    res.json({
        data:collection,
        message:'Ok'
    })
})

router.post('/' , async (req , res) => {
    let newCollection = new Collection({
        name:req.body.name,
        UrlImage:req.body.UrlImage,
        DirectLink:req.body.DirectLink
    });

    newCollection = await newCollection.save()

    res.json({
        data:newCollection,
        message:'Ok'
    })

})

router.put('/:id' , async (req , res) => {
    try{
        const collection = await Collection.findByIdAndUpdate(req.params.id , {
            name:req.body.name,
            UrlImage:req.body.UrlImage,
            DirectLink:req.body.DirectLink
        }, {new:true})

        if(!collection) {
           return res.status(404).json({data:null,message:'collection was not found'});
        }

        return res.json({ data: collection, message: 'collection updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
})


// Delete 
router.delete('/:id' , async (req , res) => {
    const collection = await Collection.findByIdAndDelete(req.params.id);
    if(!collection) {
        res.status(400).json({data:null,message:'collection was not found'});
    }

    res.json({
        data:collection,
        message:'Ok'
    })
})



module.exports = router