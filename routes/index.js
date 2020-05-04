const User = require('../services/user');
module.exports = function index(req,res){        
// Update views
    req.session.views = (req.session.views || 0) + 1;
    // const user = User.findUserById(req.session.userId);
    res.render('index',{views:req.session.views});
}
