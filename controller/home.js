/**
 * Created by MWY on 2/7/18.
 */
class Home {
    constructor(){}

    renderHomePage(req, res, next) {
        res.render("home")
    }
}

module.exports = new Home();