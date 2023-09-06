const express = require('express');
const router = express.Router();
const RegisterImage = require('../models/backGroundRegister');

// This router is for Update Bacground Image on Gallery Page .

router.get('/' , async (req , res) => {
    const image =  ( await RegisterImage.find({})).reverse();
    res.json({
        data:image,
        message:'Ok'
    })
});


router.get('/:id' , async (req , res) => {
    const image = await RegisterImage.findById(req.params.id);
    if(!image) {
        res.status(404).json({data:null,message:'image was not found'})
    }
    res.json({
        data:image,
        message:'Ok'
    })
});


router.post('/', async (req, res) => {
    try {
        const newImageRegister = new RegisterImage({
            title: req.body.title,
            UrlImage: req.body.UrlImage
        });

        const savedImageRegister = await newImageRegister.save();

        res.status(201).json({
            data: savedImageRegister,
            message: 'Image Register added successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'An error occurred while adding the image Register'
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const image = await RegisterImage.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            UrlImage: req.body.UrlImage
        }, { new: true });

        if (!image) {
            return res.status(404).json({ data: null, message: 'Image was not found' });
        }

        return res.json({ data: image, message: 'Image updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
});

router.delete('/:id' , async (req , res) => {
    const image = await RegisterImage.findByIdAndDelete(req.params.id)
    if(!image) {
        res.status(400).json({data:null , message:'item was not found'})
    }

    res.json({
        data:image,
        message:'Ok'
    })
})



module.exports = router ;