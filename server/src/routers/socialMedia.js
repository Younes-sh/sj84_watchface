const express = require('express');
const router = express.Router();
const SocialMedia = require('../models/socialMedia');



router.get('/' , async (req , res) => {
    const social =  (await SocialMedia.find({}));
    res.json({
        data:social,
        message:'Ok'
    })
})

router.get('/:id' , async (req , res) => {
    const social = await SocialMedia.findById(req.params.id)
    if(!social) {
        res.status(404).json({data:null,message:'item was not found'})
    }
    res.json({
        data:social,
        message:'Ok'
    })
})


router.post('/' , async (req , res) => {
    let newSocial = new SocialMedia({
        name : req.body.name,
        UrlImage: req.body.UrlImage,
        LinkDirection: req.body.LinkDirection
    })
    newSocial = await newSocial.save()
    res.json({
        data:newSocial,
        message:'Ok'
    })
})

// router.put('/:id' , async (req , res) => {
//     try{
//         const social = await SocialMedia.findByIdAndUpdate(req.params.id , {
//             name: req.body.name,
//             UrlImage: req.body.UrlImage,
//             LinkDirection: req.body.LinkDirection
//         }, { new: true })

//         if(!social) {
//             res.status(404).json({data:null,message:'item was not found'})
//         }

//         res.json({
//             data:social,
//             message:'Ok'
//         })
//     } catch {
//         console.error(error);
//         return res.status(500).json({ data: null, message: 'Internal server error' });
//     }
// })
router.put('/:id', async (req, res) => {
    try {
        const social = await SocialMedia.findByIdAndUpdate(req.params.id, {
            name:req.body.name,
            UrlImage:req.body.UrlImage,
            LinkDirection:req.body.LinkDirection
        }, { new: true });

        if (!social) {
            return res.status(404).json({ data: null, message: 'social was not found' });
        }

        return res.json({ data: social, message: 'social updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
});

router.delete('/:id' , async (req , res) => {
    const social = await SocialMedia.findByIdAndDelete(req.params.id)
    if(!social) {
        res.status(400).json({data:null,message:'item was not found'})
    }
    res.json({
        data:social,
        message:'Ok'
    })
})


module.exports = router;