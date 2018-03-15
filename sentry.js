const raven = require('raven')

module.exports = raven
  .config(process.env.SENTRY_DSN_TIMECOM, {
    logger: 'server',
    name: process.env.NOW_URL,
  })
  .install()
