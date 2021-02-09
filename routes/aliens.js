const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');


router.get('/', async (req, res) => {
    try{
        const aliensdata = await Alien.find();
        res.json(aliensdata);
    }catch(err) {
        res.send('Error'+err);
    }
});

router.get('/:id', async(req, res) =>{
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }catch(err) {
        res.send("err"+err);
    }
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try{
        const z1 = await alien.save();
        res.json(z1);
    } catch(err){
        res.send("Error"+err);
    }
});
// router.patch('/:id', async(req, res)=> {
//     try {
//         const alien = await Alien.findById(req.params.id);
//         alien.sub = req.body.sub;
//         const a1 = await alien.save();
//         res.json(a1);
//     } catch(err){
//         res.send(err);
//     }
// });
router.patch('/:id', async(req, res)=> {
    try {
        const alien = await Alien.findByIdAndUpdate(req.params.id, req.body);
        const a1 = await alien.save();
        res.json(a1);
    } catch(err){
        res.send(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        // const alien = await Alien.findById(req.params.id);
        // alien.sub = req.body.sub;
        // const a1 = await alien.remove();
        const alien = await Alien.findByIdAndDelete(req.params.id);
        if(!alien) res.status(404).send("No Items");
        res.status(200).send(err);
    } catch(err) {
        res.status(500).send(err);
    }
});


module.exports = router;