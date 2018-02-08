/**
 * Created by MWY on 2/8/18.
 */

class Coin {
    constructor() {}

    renderCoinPage(req, res, next) {
        res.render("coin");
    }
}

module.exports = new Coin();