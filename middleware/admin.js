const Users = require('../db/models/user')

const authAdmin = async (req, res, next) => {
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if (user.isAdmin === 'seller' && user.isAdmin === 'users')
            return res.status(400).json({ msg: "Admin resources access denied" })

        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authAdmin