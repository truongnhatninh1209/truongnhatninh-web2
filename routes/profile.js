const { Router } = require('express');
const upload = require('../middlewares/upload');
const user =require('../services/user');
const router = new Router();

router.get('/',function profile(req,res){
    if(req.currentUser){
        res.render('profile');
    }else{
        res.redirect('/')
    }
});

router.post('/',upload.single('avatar'),function(req,res,next){
    // if(req.body.email==req.email&&req.body.password==req.password){
    //     id=currentUser.id;
    //     emmail=currentUser.email;
    //     displayName=currentUser.displayName;
    //     res.render('profile',{id,email,displayName});
    // }
    name=req.body.email;
    pass = req.body.password;
    temp=user.findUserByEmail(name);
    password = temp['password']
    mk = user.verifyPassword(pass,password);
    if(temp && mk){
        id=temp['id'];
        email=temp['email'];
        displayName=temp['displayName'];
        res.render('profile',{id,email,displayName})
    }
    else{
        res.redirect('login'); 
    }
});

module.exports = router;