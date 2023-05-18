const jwt = require('jsonwebtoken');
// const { logger } = require('./logger');

const generate = (id) => jwt.sign({ id: id }, "JWT_SECRET_KEY", { expiresIn: '1d' });

const decode = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET_KEY)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    generate,
    decode
}