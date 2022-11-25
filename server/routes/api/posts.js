const express = require("express"),
job = require("../../models/Workforce"),
router = express.Router();

const user = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

process.env.SECRET_KEY = 'secret',
router.use(cors())

//REGISTER USER
router.post("/register", (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    user.findOne({
        email: req.body.email
    })
    .then(User =>{
        if(!User) {
            bcrypt.hash(req.body.password, 10, (err,hash) =>{
                userData.password = hash
                user.create(userData)
                .then(user => {
                    res.status(201).send;
                })
                .catch(err => {
                    res.send('error:' + err)
                })
            })
        } else {
            res.json({ error: 'User Already Exist' })
        }
    })
})

//LOGIN
router.post ('/login', (req,res) =>{
    user.findOne({
        email: req.body.email
    })
    .then(User => {
        if(User) {
            if(bcrypt.compareSync(req.body.password, User.password)){
                const payload = { 
                    _id: User._id,
                    first_name: User.first_name,
                    last_name: User.last_name,
                    email: User.email 
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.json({error: 'User not found'})
            }
        }
        else{
        res.json({error: 'User not found'})
        }
    })
    .catch(err => {
        res.status(500).send(err);
    })
})


// END OF USER REGISTRATION

//Get 
router.get("/", async(req,res) => {
    try{
        const Workforce = await job.find({});
        // console.log (Workforce);
        res.send(Workforce);

    } catch (error) {
        res.status(500).send(error);
    }
});

//Post
router.post('/', async (req,res) =>{
    const Workforce = new job(req.body);
    // const Workforce = new job(req.body);

    console.log(Workforce);
    
    try {
        await Workforce.save();
        res.status(201).send();
    }catch (error){
        res.status(400).send(error);
    }
});

//Delete 
router.delete('/delete/:id', async (req, res) => {
    try{
        const Job = await job.findByIdAndDelete(req.params.id);
        if(!Job){
            return res.sendStatus(404).send(Job);
        }else{
            res.sendStatus(200).send(Job)
        }
        
    }catch(error) {
        res.sendStatus(500).send(error);
    }
})


//Update
router.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const Job = new job(req.body)
    console.log(Job);
    
    try{
        const editWorkForce = await job.findByIdAndUpdate(id, Job, {
            new: true,
            runValidators: true
        });
        if(!editWorkForce) {
            return res.sendStatus(404).send();
        }else{
            res.sendStatus(201).send();
        }
    }catch(error) {
        res.sendStatus(500).send(error);
    }
})

module.exports = router;