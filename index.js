const raven = require('./sentry')
const {scheduleJob} = require('node-schedule')
const fetch = require('node-fetch')

module.exports = () => 'Timecom'

const DATACOM = 'https://datacom.glutenproject.com'
const TOKEN = '?token=' + process.env.TGP_NETWORK_TOKEN

raven.context(() => {
  scheduleJob({minute: 0}, () => fetch(DATACOM + '/amazon' + TOKEN) && console.log(new Date(), 'Triggered Amazon'))
})
