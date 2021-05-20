if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/tools.min')
} else {
    module.exports = require('./dist/tools')
}