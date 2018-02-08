/**
 * Created by MWY on 2/8/18.
 */
class Money {
    constructor() {}

    renderMoneyPage(req, res, next) {
        res.render("money");
    }
}

module.exports = new Money();