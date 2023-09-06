const express = require('express');
const router = express.Router();
const GalleryImage = require('../models/backGroundGallery');

router.get('/' , async (req , res) => {
    const galleryImage = (await GalleryImage.find({})).reverse();
    res.json({
        data:galleryImage,
        message:'Ok'
    })
})


router.get('/:id' , async (req , res) => {
    const galleryImage = await GalleryImage.findById(req.params.id)
    if(!galleryImage) {
        res.status(404).json({data:null , message:'image was not found'});
    }
    res.json({
        data:galleryImage,
        message:'Ok'
    })
})

router.post('/' , async (req , res) => {
    try{
        const newImageGallery = new GalleryImage({
            title:req.body.title,
            UrlImage:req.body.UrlImage
        })
        const saveImageGallery = await newImageGallery.save();

        res.status(201).json({
            data:saveImageGallery,
            message:'Image gallery added successfully'
        })
    } catch {
        res.status(500).json({
            error: 'An error occurred while adding the image gallery'
        });
    }
})


router.put('/:id', async (req, res) => {
    try {
        const image = await GalleryImage.findByIdAndUpdate(req.params.id, {
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
    const image = await GalleryImage.findByIdAndDelete(req.params.id)
    if(!image) {
        res.status(400).json({data:null , message:'item was not found'})
    }

    res.json({
        data:image,
        message:'Ok'
    })
})



module.exports = router;