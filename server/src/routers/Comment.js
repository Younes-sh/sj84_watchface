const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.get('/',async (req , res) => {
    const comment = (await Comment.find({})).reverse();
    res.json({
        data:comment,
        message:'Ok'
    })
})

router.get('/:id',async (req , res) => {
    const comment =  await Comment.findById(req.params.id);
    if(!comment){
        res.status(404).json({data:null,message:'comment was not found'});
    }
    res.json({
        data:comment,
        message:'Ok'
    })
})

router.post('/', async (req , res) => {
    let newComment = new Comment({
        email:req.body.email,
        name:req.body.name,
        comment:req.body.comment,
        replyComment:req.body.replyComment
    })
    newComment = await newComment.save();
    res.json({
        data:newComment,
        message:'Ok'
    })
})


router.put('/:id',async (req ,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id , {
            email:req.body.email,
            name:req.body.name,
            comment:req.body.comment,
            replyComment:req.body.replyComment
        },{ new:true })
        if(!comment) {
            return res.status(404).json({data:null,message:'comment was not found'});
        }

        return res.json({data:comment,message:'Comment updated successfully'})

    } catch{
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
})

router.delete('/:id', async(req , res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id)
    if(!comment) {
        res.status(404).json({data:null,message:'comment was not found'});
    }

    res.json({
        data:comment,
        message:'comment deleted'
    })
})

module.exports = router;