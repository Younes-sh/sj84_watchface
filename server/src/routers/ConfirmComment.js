const express = require('express');
const router = express.Router();
const Confirm = require('../models/confirm');

router.get('/', async (req , res) => {
    const confirm = await Confirm.find({})
    res.json({
        data:confirm,
        message:'Ok'
    })
})

router.get('/:id',async (req , res) => {
    const confirm =  await Confirm.findById(req.params.id);
    if(!confirm){
        res.status(404).json({data:null,message:'comment was not found'});
    }
    res.json({
        data:confirm,
        message:'Ok'
    })
})


router.post('/', async (req , res) => {
    let newConfirm = new Confirm({
        email:req.body.email,
        name:req.body.name,
        comment:req.body.comment,
        replyComment:req.body.replyComment
    })
    newConfirm = await newConfirm.save();
    res.json({
        data:newConfirm,
        message:'Ok'
    })
})



router.put('/:id',async (req ,res) => {
    try{
        const confirm = await Confirm.findByIdAndUpdate(req.params.id , {
            email:req.body.email,
            name:req.body.name,
            comment:req.body.comment,
            replyComment:req.body.replyComment
        },{ new:true })
        if(!confirm) {
            return res.status(404).json({data:null,message:'confirm was not found'});
        }

        return res.json({data:confirm,message:'confirm updated successfully'})

    } catch{
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
})

router.delete('/:id', async(req , res) => {
    const confirm = await Confirm.findByIdAndDelete(req.params.id)
    if(!confirm) {
        res.status(404).json({data:null,message:'confirm was not found'});
    }

    res.json({
        data:confirm,
        message:'confirm deleted'
    })
})



module.exports = router;