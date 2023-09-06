const express = require('express');
const router = express.Router();
const { body , validationResult } = require('express-validator');
const User = require('../models/user');



router.get('/' , async (req , res) => {
    const user = (await User.find({})).reverse()
    res.json({
        data:user,
        message:'Ok'
    })
})

router.get('/:id' , async (req , res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(404).json({data:null, message:'User was not found'})
    }
    res.json({
        data:user,
        message:'Ok'
    })
})

router.post('/' , [
    body('first_name').not().isEmpty().trim().escape(),
    body('last_name').not().isEmpty().trim().escape(),
    body('username').not().isEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').not().isEmpty().trim().escape()
] , async (req , res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({data:null , errors:errors.array() , message:'error validate'})
    }
    let newUser = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    newUser = await newUser.save()

    res.json({
        data:newUser,
        message:'Ok' 
    })
})


router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }, { new: true });

        if (!user) {
            return res.status(404).json({ data: null, message: 'user was not found' });
        }

        return res.json({ data: user, message: 'user updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data: null, message: 'Internal server error' });
    }
});

// Delete   user

router.delete('/:id' , async (req , res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).json({ data: null, message: 'user was not found' });
    }

    res.json({
        data:user,
        message:'Ok'
    })
})

 

module.exports = router;