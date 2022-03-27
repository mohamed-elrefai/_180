const ensureAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) return next();

    res.redirect('/signIn')

}
const forwardAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated()) return next();

    res.redirect('/signIn');      
}

module.exports = {ensureAuthenticated,forwardAuthenticated}