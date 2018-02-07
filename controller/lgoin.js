/**
 * Created by MWY on 2/7/18.
 */
class Login {
    constructor(){}

    renderLoginPage(req, res, next) {
        res.render('login')
    }
}

module.exports = new Login();