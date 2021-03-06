const raven = require('./sentry')
const {scheduleJob} = require('node-schedule')
const fetch = require('node-fetch')

module.exports = () => 'Timecom'

const DATACOM = 'https://datacom.glutenproject.com'
const TOKEN = '?token=' + process.env.TGP_NETWORK_TOKEN

raven.context(() => {
  scheduleJob({minute: 0}, () => fetch(DATACOM + '/amazon' + TOKEN) && console.log('Triggered Amazon'))
  scheduleJob({hour: 4, minute: 15}, () => fetch(DATACOM + '/vitacost' + TOKEN) && console.log('Triggered Vitacost'))
  scheduleJob({hour: 5, minute: 15}, () => fetch(DATACOM + '/azure' + TOKEN) && console.log('Triggered Azure'))
  scheduleJob({hour: 6, minute: 15}, () => fetch(DATACOM + '/luckyvitamin' + TOKEN) && console.log('Triggered LuckyVitamin'))
  scheduleJob({hour: 7, minute: 15}, () => fetch(DATACOM + '/thrive' + TOKEN) && console.log('Triggered Thrive'))
  scheduleJob({hour: 8, minute: 15, dayOfWeek: 6}, () => fetch(DATACOM + '/nuts' + TOKEN) && console.log('Triggered Nuts'))
})
