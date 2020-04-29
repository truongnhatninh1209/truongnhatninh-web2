const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.set('views','./views');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',require('./routes/index'));

app.post('/',require('./routes/sum'));

// app.get('/ninh',function(req,res){
//     res.render('ninh');
// });

// app.get('/count',function(req,res){
//     const number = Number(req.query.number || 0);
//     res.render('count',{number})
// });

app.use(express.static('public'));

app.listen(port);
console.log(`Server in listening on port ${port}`);