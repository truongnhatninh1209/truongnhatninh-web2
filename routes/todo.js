const { Router } = require('express');
const upload = require('../middlewares/upload');
const router = new Router();

const Todo =require('../services/todo');

todo1='Đi học';
todo2='Đi chơi';


router.get('/',function gettodo(req,res){
    res.render('index',{todo1,todo2});
});
module.exports = router;